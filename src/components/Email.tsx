// import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useState } from "react";
import "../css/email.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faUser, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// const PUBLIC_KEY = "28LDAKNfG1gEmy2h_";
// const SERVICE_ID = "service_bc0564k";
// const TEMPLATE_ID = "template_zcp7m4p";
const initialState = {
  name: "",
  email: "",
  message: "",
};

export function Email() {
  const [inputs, setInputs] = useState(initialState);
  const [status, setStatus] = useState("");
  const [pressed, setPressed] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const textChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputs((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!pressed) {
      setPressed(true);
      setStatus("Sending");
      //   emailjs
      //     .sendForm(
      //       SERVICE_ID,
      //       TEMPLATE_ID,
      //       "#" + (event.target as HTMLFormElement).id,
      //       PUBLIC_KEY
      //     )
      //     .then(
      //       () => {
      //         setStatus("Message sent succesfully!");
      //         setTimeout(() => {
      //           setPressed(false);
      //           setStatus("");
      //         }, 5000);

      //         setInputs(initialState);
      //       },
      //       () => {
      //         setStatus("Message not sent! (Service Error)");
      //         setPressed(false);
      //       }
      //     );

      setTimeout(() => {
        setStatus("Message sent succesfully!");
        setTimeout(() => {
          setPressed(false);
          setStatus("");
        }, 3000);
      }, 2000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-title">CONTACT ME</h1>
      <form
        id="contact-form"
        onSubmit={(event) => sendEmail(event)}
        className="contact-form"
      >
        <div className="contact-group">
          <div className="contact-container">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleChange}
              value={inputs.name}
              className="contact-name"
            />
          </div>
          <div className="contact-container">
            <FontAwesomeIcon icon={faAt} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              value={inputs.email}
              className="contact-email"
            />
          </div>
        </div>

        <textarea
          rows={3}
          name="message"
          placeholder="Message"
          value={inputs.message}
          onChange={textChange}
          className="contact-message"
        ></textarea>
        <p className="contact-status">{status}</p>
        <button type="submit" className="contact-button">
          <span></span>
          <FontAwesomeIcon icon={faPaperPlane} />
          &nbsp;SEND
        </button>
      </form>
    </section>
  );
}
