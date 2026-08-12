"use server";

import { Resend } from "resend";

// Fallback to a dummy key to prevent the app from crashing on build/start
// if the user hasn't set up the RESEND_API_KEY in their .env.local yet.
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!senderEmail || typeof senderEmail !== "string" || senderEmail.length > 500) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!message || typeof message !== "string" || message.length > 5000) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "tanitoluwakeshinro@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      text: message,
    });
  } catch (error: unknown) {
    return {
      error: "Failed to send email. Ensure RESEND_API_KEY is configured.",
    };
  }

  return {
    data,
  };
};
