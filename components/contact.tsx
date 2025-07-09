"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Linkedin, Github, AlertCircle, CheckCircle, Send } from "lucide-react"

// EmailJS client-side integration
declare global {
  interface Window {
    emailjs: any
  }
}

export default function Contact() {
  const [emailJsLoaded, setEmailJsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  // Initialize EmailJS
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init("TkXQuKl3tQq9Fd9yw")
        setEmailJsLoaded(true)
        console.log("EmailJS loaded successfully")
      }
    }
    script.onerror = () => {
      console.error("Failed to load EmailJS")
      setSubmitStatus({
        type: 'error',
        message: 'Failed to load email service. Please refresh the page and try again.'
      })
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Check if EmailJS is loaded
      if (!emailJsLoaded || !window.emailjs) {
        throw new Error("EmailJS service is not available. Please refresh the page and try again.")
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "jxiakash@outlook.com",
        reply_to: formData.email,
      }

      // Send email using EmailJS
      const response = await window.emailjs.send("service_hxx2kx3", "email_aSQMvTXHwN4TOw6YlJi7Yic8", templateParams)
      
      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        })
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Email sending failed')
      }
      
    } catch (error) {
      console.error("Email sending failed:", error)
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an issue sending your message. Please try emailing me directly at jxiakash@outlook.com or try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu, India",
      link: "https://maps.google.com/?q=Amrita+Vishwa+Vidyapeetham+Coimbatore",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 XXX XXX XXXX",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "jxiakash@outlook.com",
      link: "mailto:jxiakash@outlook.com",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jei-akash-5b6532291/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/jeiakash",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:jxiakash@outlook.com",
      label: "Email",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let's discuss your next project or collaboration opportunity. I'm always excited to work on innovative
            solutions!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : "_self"}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                      className="text-gray-600 hover:text-teal-500 transition-colors"
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Google Map */}
            <div className="mt-8">
              <div className="w-full h-80 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.5567890123456!2d76.89535678901234!3d10.903790567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85c95d3e828eb%3A0x2785cb4510629029!2sAmrita%20Vishwa%20Vidyapeetham%2C%20Coimbatore!5e1!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amrita Vishwa Vidyapeetham Ettimadai Location - Satellite View"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.google.com/?q=Amrita+Vishwa+Vidyapeetham+Ettimadai+Coimbatore&t=k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-600 text-sm font-medium inline-flex items-center"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  View larger satellite map
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h3>

              {/* Success/Error Messages */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
                    submitStatus.type === 'success'
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "bg-red-50 border border-red-200 text-red-700"
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p>{submitStatus.message}</p>
                    {submitStatus.type === 'success' && (
                      <p className="text-sm mt-2 text-green-600">
                        ✅ Email delivered successfully! I'll respond as soon as possible.
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-vertical"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="text-center">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center transition-colors"
                      disabled={isSubmitting || !emailJsLoaded}
                    >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : !emailJsLoaded ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Loading...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-100">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-800">Available for Freelance</span>
              </div>
              <p className="text-gray-600 text-sm">
                Currently open to new opportunities and exciting projects. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}