import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function (req: Request) {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405 }
    );
  }

  const body = await req.json();
  const { name, email, company, message } = body;

  if (!name || !email || !company) {
    return new Response(
      JSON.stringify({ error: "Missing required fields" }),
      { status: 400 }
    );
  }

  await resend.emails.send({
    from: "Pace <edwin@paceautomations.com>",
    to: ["edwin@paceautomations.com"],
    replyTo: email,
    subject: "New Discovery Call Request",
    html: `
      <h2>New Discovery Call Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong><br/>${message || "—"}</p>
    `,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
