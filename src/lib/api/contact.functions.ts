import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator(
    z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("A valid email address is required"),
      message: z.string().min(10, "Message must be at least 10 characters"),
    }),
  )
  .handler(async ({ data }) => {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlBody = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#0f172a;border-bottom:1px solid #e2e8f0;padding-bottom:12px;">
          New enquiry from Yesp website
        </h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;color:#64748b;width:100px;vertical-align:top;">Name</td>
            <td style="padding:8px 0;color:#0f172a;font-weight:600;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748b;vertical-align:top;">Email</td>
            <td style="padding:8px 0;">
              <a href="mailto:${data.email}" style="color:#2563eb;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748b;vertical-align:top;">Message</td>
            <td style="padding:8px 0;color:#0f172a;white-space:pre-wrap;">${data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
        <p style="font-size:12px;color:#94a3b8;">Sent from yesp.uk contact form</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.CONTACT_FROM ?? '"Yesp Website" <noreply@yesp.uk>',
      to: process.env.CONTACT_TO ?? "hello@yesp.uk",
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `New enquiry from ${data.name} — Yesp`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      html: htmlBody,
    });

    return { success: true };
  });
