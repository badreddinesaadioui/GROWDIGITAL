import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import Email from "https://smtpjs.com/v3/smtp.js"; // Import the SMTP.js library

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Prepare the email content with input elements' values
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `;

    // Send email using SMTP.js
    Email.send({
      Host: "smtp.elasticemail.com", // SMTP server host (replace with your server)
      Username: "your_smtp_username", // Your SMTP username
      Password: "your_smtp_password", // Your SMTP password or API key
      To: "recipient@example.com", // Recipient's email address (replace with the actual recipient)
      From: email, // Sender's email address (using the entered email as the "From" address)
      Subject: "Contact Form Submission", // Email subject
      Body: emailContent, // Email body
    }).then((message) => {
      alert("Email sent successfully!"); // Show a success message
    }).catch((error) => {
      alert("Failed to send email. Please try again later."); // Show an error message
      console.error(error);
    });
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
              action={contact_form_action}
              onSubmit={handleFormSubmit} // Call the handleFormSubmit function on form submission
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
                  rows="7"
                  name="message" // Added the "name" attribute for the textarea
                  placeholder="Your message"
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

