const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const messageMaker = (msgObj, found) => {
  if (found) {
    return {
      subject: `${msgObj.person} has been found!!!`,
      message: `${msgObj.name} says ${msgObj.pronoun} was found at ${msgObj.location}. Check your Dashboard for all the information.`,
    };
  }

  return {
    subject: `Updates on ${msgObj.person}`,
    message: `${msgObj.name} says '${msgObj.comment}'. Check your Dashboard for all the information.`,
  };
};

export default function sendMail(recipient, msgObj, found) {
  const { subject, message } = messageMaker(msgObj, found);
  const msg = {
    to: recipient,
    from: process.env.MAIL,
    subject,
    text: message,
    html: `<strong>${message}</strong>`,
  };

  const mail = async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  };
  return mail(msg);
}
