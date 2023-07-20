import React from "react";
import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

export default function Contact() {
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container">
        {markdownify("Contact Us", "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
              name="contact"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="firstname"
                  id="firstname"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  id="youremail"
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
                  name="message"
                  id="yourmessage"
                  rows="7"
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify("Contact Information", "h4")}
            {markdownify("Some description about the contact details.", "p", "mt-4")}
            <ul className="contact-list mt-5">
              <li>
                {markdownify("Contact 1: contact@example.com", "strong", "text-dark")}
              </li>
              <li>
                {markdownify("Contact 2: +1 (123) 456-7890", "strong", "text-dark")}
              </li>
              {/* Add more contact details here */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

