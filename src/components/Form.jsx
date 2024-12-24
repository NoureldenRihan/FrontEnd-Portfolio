import React from "react";

function Form() {
  return (
    <div className="form" id="form">
      <form
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-duration="1200"
        id="contact-form"
        action="https://formsubmit.co/noureldenrihan2002@gmail.com"
        method="POST"
      >
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          id="msg"
          rows="5"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          value="Email from Portfolio Website!"
        />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_next"
          value="https://nourelden-rihan.web.app/"
        />
        <button id="submit" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
