import React from 'react'

const ContactUs = () => {
  return (
    <div>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              // rows= "4"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            ></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactUs

