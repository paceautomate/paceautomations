import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("RESEND_API_KEY is missing");
    }

    const resend = new Resend(apiKey);

    const { name, email, company, message } = req.body;

    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: ["edwin@paceautomations.com"],
      subject: "New Discovery Call Request",
      reply_to: email,
      html: `
        <h2>New Discovery Call</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
