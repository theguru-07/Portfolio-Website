import { NextResponse } from 'next/server';

// ✅ #2 — Contact form API route using Resend
// Install Resend: npm install resend
// Get your free API key at https://resend.com (100 emails/day free)
// Add RESEND_API_KEY to your .env.local

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // --- Option A: Resend (Recommended) ---
    // Uncomment after: npm install resend
    // and adding RESEND_API_KEY to .env.local

    
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Portfolio Contact <https://portfolio-website-rho-nine-75.vercel.app/>',   // use your verified domain later
      to: 'malharprasadray@gmail.com',                         // ← your email
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
      replyTo: email,
    });
    

    // --- Option B: Nodemailer with Gmail (alternative) ---
    // npm install nodemailer
    // Add GMAIL_USER and GMAIL_PASS (App Password) to .env.local

    /*
    const nodemailer = await import('nodemailer');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'malharr.dev@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`,
      replyTo: email,
    });
    */

    // ── Temporary: log to console until you uncomment one of the above ──
    console.log('[Contact Form]', { name, email, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact API Error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
