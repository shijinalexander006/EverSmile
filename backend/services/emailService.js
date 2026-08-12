import nodemailer from "nodemailer";

// Configure email transporter (using Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send admin notification when appointment is booked
export async function sendAdminNotification(appointmentData) {
  const { fullName, phone, email, treatment, date, time, message } = appointmentData;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Appointment Request from ${fullName}`,
    html: `
      <h2>New Appointment Request</h2>
      <p><strong>Patient Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || "Not provided"}</p>
      <p><strong>Treatment:</strong> ${treatment}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Message:</strong> ${message || "No additional message"}</p>
      <hr>
      <p><em>Please review and respond to this appointment request as soon as possible.</em></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✓ Admin notification sent to ${process.env.ADMIN_EMAIL}`);
  } catch (err) {
    console.error("❌ Email send error:", err.message);
    throw new Error("Failed to send admin notification");
  }
}

// Dummy function (not used, but imported)
export async function sendPatientConfirmation(appointmentData) {
  // Only admin gets email, patient confirmation disabled
  return Promise.resolve();
}