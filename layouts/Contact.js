import React from "react";
import emailjs from "emailjs-com"; // Import the EmailJS library
import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const contactParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // Send email using EmailJS
    emailjs
      .send("service_yiw1ljj", "template_dlu6itn", contactParams, "-yjRpeexSpFc286tp")
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          // Optionally, show a success message to the user
          alert("Thank you for your message! We'll get back to you soon.");
        },
        (error) => {
          console.error("Email failed to send:", error);
          // Optionally, show an error message to the user
          alert("Sorry, there was an issue sending your message. Please try again later.");
        }
      );

    // Reset the form after submission
    event.target.reset();
  };

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              onSubmit={handleSubmit} // Call handleSubmit on form submission
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  name="message" // Add a name attribute to the textarea
                  rows="7"
                  placeholder="Your message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
