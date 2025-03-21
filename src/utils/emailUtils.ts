
import { EMAIL_CONFIG, isEmailConfigured } from './configUtils';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  if (!isEmailConfigured()) {
    console.error('Email is not configured');
    return { 
      success: false, 
      message: 'Email service is not configured. Please contact administrator.' 
    };
  }

  try {
    // Here we would typically use an API to send emails
    // We're using a serverless API endpoint that should be protected with environment variables
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        emailConfig: {
          service: EMAIL_CONFIG.SERVICE,
          user: EMAIL_CONFIG.USER,
          // We never send the password to the client, this is just for reference
          // The actual email sending should happen server-side
          to: EMAIL_CONFIG.TO,
          from: EMAIL_CONFIG.FROM
        }
      }),
    });

    if (!response.ok) {
      throw new Error('Email sending failed');
    }

    const result = await response.json();
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: 'Failed to send email. Please try again later.' 
    };
  }
}
