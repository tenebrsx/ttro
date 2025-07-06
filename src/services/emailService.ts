// Email Service Configuration
// This file contains the setup for sending emails from the contact form

// Option 1: EmailJS (Recommended for client-side)
// 1. Sign up at https://emailjs.com/
// 2. Create a service (Gmail, Outlook, etc.)
// 3. Create a template
// 4. Get your Public Key, Service ID, and Template ID

export const EMAILJS_CONFIG = {
  // Replace with your actual EmailJS credentials
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',
  SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID'
};

// Option 2: Formspree (Simple alternative)
// 1. Sign up at https://formspree.io/
// 2. Create a form
// 3. Get your form endpoint

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// Option 3: Netlify Forms (If deploying to Netlify)
// Add data-netlify="true" to your form element
// Netlify will automatically handle form submissions

// Email template data structure
export interface EmailTemplateData {
  name: string;
  email: string;
  phone: string;
  requestType: string;
  eventDate: string;
  guestCount: string;
  message: string;
  submittedAt: string;
}

// Email service functions
export const sendEmail = async (formData: EmailTemplateData): Promise<boolean> => {
  // This is a placeholder implementation
  // In production, you would implement one of the above options
  
  try {
    // Example with fetch to a backend API
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// EmailJS implementation example
export const sendEmailWithEmailJS = async (formData: EmailTemplateData): Promise<boolean> => {
  try {
    // Uncomment and install emailjs-com: npm install emailjs-com
    // import emailjs from 'emailjs-com';
    
    // const result = await emailjs.send(
    //   EMAILJS_CONFIG.SERVICE_ID,
    //   EMAILJS_CONFIG.TEMPLATE_ID,
    //   {
    //     from_name: formData.name,
    //     from_email: formData.email,
    //     phone: formData.phone,
    //     request_type: formData.requestType,
    //     event_date: formData.eventDate,
    //     guest_count: formData.guestCount,
    //     message: formData.message,
    //     submitted_at: formData.submittedAt
    //   },
    //   EMAILJS_CONFIG.PUBLIC_KEY
    // );
    
    // return result.status === 200;
    
    // For development - log the data that would be sent
    console.log('EmailJS would send:', formData);
    return true; // Placeholder
  } catch (error) {
    console.error('Error sending email with EmailJS:', error);
    return false;
  }
};

// Formspree implementation example
export const sendEmailWithFormspree = async (formData: EmailTemplateData): Promise<boolean> => {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error sending email with Formspree:', error);
    return false;
  }
};
