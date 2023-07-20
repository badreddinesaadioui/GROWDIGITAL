import React from "react";
import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

export default function Contact() {
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container">
        {markdownify("Contacter nous", "h1", "text-center font-normal")}
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
                  placeholder="Nom"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  id="youremail"
                  type="email"
                  placeholder="Votre adresse e-mail"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Sujet"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  name="message"
                  id="yourmessage"
                  rows="7"
                  placeholder="Votre message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Envoyer maintenant
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify("Besoin de nous contacter ?", "h4")}
            {markdownify(
              "Chez GrowDigital, nous sommes toujours ravis de discuter de vos projets et de vos objectifs en matière de marketing digital. Que vous cherchiez à améliorer votre présence en ligne, à augmenter vos ventes ou à renforcer votre marque, nous sommes là pour vous aider à réussir.",
              "p",
              "mt-4"
            )}
            <ul className="contact-list mt-5">
              <li>
                {markdownify("Téléphone : +212 6 87 30 15 64", "strong", "text-dark")}
              </li>
              <li>
                {markdownify(
                  "Email : [growstudio.ma@gmail.com](mailto:growstudio.ma@gmail.com)",
                  "strong",
                  "text-dark"
                )}
              </li>
              <li>{markdownify("Adresse : Casablanca, Maroc", "strong", "text-dark")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
