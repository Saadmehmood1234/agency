"use server";

import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const generateEmailHtml = (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" border="0" 
    style="font-family: Arial, sans-serif; background-color: #fb2056; background-image: url('https://www.transparenttextures.com/patterns/buried.png'); padding: 20px;">
    <tr>
      <td>
        <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" 
          style="background-color: #ffffff; border-radius: 6px; padding: 20px;">
          <tr>
            <td style="font-size: 24px; font-weight: bold; color: #FB2056; text-align: center; padding-bottom: 20px;">
              New Project Inquiry
            </td>
          </tr>

          <tr>
            <td style="padding: 10px 0;">
              <strong style="color: #333;">Name:</strong><br />
              ${data.name}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px 0;">
              <strong style="color: #333;">Email:</strong><br />
              ${data.email}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px 0;">
              <strong style="color: #333;">Subject:</strong><br />
              ${data.subject}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px 0;">
              <strong style="color: #333;">Message:</strong><br />
              ${data.message}
            </td>
          </tr>

          <tr>
            <td style="text-align: center; padding-top: 30px;">
              <a href="mailto:${data.email}" 
                style="background-color: #FB2056; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: bold;">
                Reply Now
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  `;
};

export const connectMe = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const mailOptions = {
    from: `"DigitalApex" <${process.env.SMTP_EMAIL}>`,
    to: "mehmoodsaad347@gmail.com",
    subject: `New Inquiry from ${data.name}: ${data.subject}`,
    html: generateEmailHtml(data),
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};
