import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";
//import { Resend } from "resend";

//const resend = new Resend("");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepara il contenuto dell'email
    const emailContent = `
      <h1>New Contact Request</h1>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `;

    try {
      // Invia l'email tramite Resend SMTP
      const response = await resend.emails.send({
        from: `${formData.email}`,
        to: "lorenzooradu@gmail.com",
        subject: `New contact form submission from ${formData.email}`,
        html: emailContent,
      });

      console.log("Email sent successfully:", response);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  }; */

  return (
    <section className="w-screen h-screen flex-shrink-0 snap-start relative flex items-center justify-center text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12 xs:gap-1">
            <div className="xs:text-center">
              <p className="mb-4">
                Feel free to reach out to me for any inquiries or collaboration opportunities.
              </p>
              <div className="flex items-center mb-4 xs:justify-center font-semibold">
                <FaEnvelope className="mr-2" />
                <span>lorenzooradu@gmail.com</span>
              </div>
              <div className="flex space-x-4 mt-8 xs:justify-center">
                <a
                  href="https://github.com/lorenzohauradou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gray-400 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gray-400 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gray-400 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gray-400 transition-colors"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div>
              <form /*</div>onSubmit={handleSubmit}*/ className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-700 via-red-700 to-red-800 hover:from-red-400 hover:via-red-500 hover:to-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;