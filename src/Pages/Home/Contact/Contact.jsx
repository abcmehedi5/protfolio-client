import React from "react";

const Contact = () => {
  return (
    <section
      id="contact-section"
      className="py-12 "
    >
      <div className="container mx-auto" >
        <div className="md:w-1/2 mx-auto mb-10 text-center">
          <h2 className="uppercase text-3xl font-bold text-[#09CEFF] mb-4">
            Contact Me
          </h2>
          <p className="text-white">
            Let's connect and discuss your web development needs. Get in touch
            with us for personalized and innovative solutions.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-6 rounded p-10 bg-slate-600">
            <div>
              <label
                htmlFor="name"
                className="block text-white font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
