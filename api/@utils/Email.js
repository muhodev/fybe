import path from "path";
import pug from "pug";
import { htmlToText } from "html-to-text";
import sgMail from "@sendgrid/mail";
import { SENDGRID_API_KEY, EMAIL_FROM } from "../@constants/index.js";

sgMail.setApiKey(SENDGRID_API_KEY);
export class Email {
  constructor(user, url) {
    this.to = user?.email;
    this.firstName = user?.name?.split(" ")?.[0];
    this.url = url;
    this.from = `Fybe <${EMAIL_FROM}>`;
  }

  newTransport() {
    return sgMail;
  }

  async send(template, subject) {
    const html = pug.renderFile(
      `${path.resolve(path.dirname("."))}/views/email/${template}.pug`,
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      }
    );

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText(html),
    };

    await this.newTransport().send(mailOptions);
  }

  async sendPasswordReset() {
    await this.send("resetPassword", "Reset password link");
  }
}
