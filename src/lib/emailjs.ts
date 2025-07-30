// src/lib/emailjs.ts
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export async function sendEmail(formData: {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  message?: string;
}) {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone ?? "",
    from_address: formData.address ?? "",
    message: formData.message ?? "",
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    return response; // contains status info you can use
  } catch (error) {
    throw error;
  }
}
