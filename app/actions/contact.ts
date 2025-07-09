"use server"

export async function sendContactEmail(prevState: any, formData: FormData) {
  // Check if formData exists
  if (!formData) {
    return {
      success: false,
      message: "Form data is missing",
    }
  }

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "All fields are required",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
    }
  }

  try {
    // Send email using EmailJS API
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_hxx2kx3",
        template_id: "email_aSQMvTXHwN4TOw6YlJi7Yic8",
        user_id: "TkXQuKl3tQq9Fd9yw",
        template_params: {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_email: "jxiakash@outlook.com",
          reply_to: email,
        },
      }),
    })

    if (response.ok) {
      console.log("Email sent successfully via EmailJS")
      return {
        success: true,
        message: `Thank you ${name}! Your message has been sent successfully to jxiakash@outlook.com. I'll get back to you soon.`,
      }
    } else {
      const errorData = await response.text()
      console.error("EmailJS API error:", errorData)
      throw new Error(`EmailJS request failed: ${response.status}`)
    }
  } catch (error) {
    console.error("Email sending failed:", error)

    // Log the form data for manual review as backup
    console.log("Contact form submission (backup log):", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    return {
      success: false,
      message: `Failed to send email automatically. Your message has been logged and I'll review it manually. You can also contact me directly at jxiakash@outlook.com`,
    }
  }
}
