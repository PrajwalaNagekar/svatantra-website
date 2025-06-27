import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/about/ContactInfo'

const Contact = () => {
  return (
    <>
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Form */}
          <div className="w-full lg:w-7/12">
            <ContactForm />
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-5/12 space-y-8">
            <ContactInfo />
          </div>
        </div>
      </div>

      {/* Full Width Google Map */}
      <div className="w-full h-[300px] lg:h-[400px] mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.9865110987116!2d77.54827740644036!3d12.912392228126826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fdd13628a4f%3A0xdf96b815a935c564!2sSvatantra%20Montessori%20-%20House%20of%20Children!5e0!3m2!1sen!2sin!4v1751018361781!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Svatantra Montessori Location"
        ></iframe>
      </div>
    </>
  )
}

export default Contact
