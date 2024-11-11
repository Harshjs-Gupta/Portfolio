import Image from "next/image";
import call from "@/assets/Images/Icons/call.png";
import mail from "@/assets/Images/Icons/mail.png";

function ContactPage() {
  return (
    <section className="section" id="section-5">
      <div className="container p-20">
        <div className="contact-container">
          <span>Let&apos;s work together</span>
          <div className="information-container">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="number" placeholder="Mob. Number" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="messageBox">
            <select>
              <option value="Select a service">Select a service</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Frontend Development">Frontend Development</option>
            </select>
            <input
              type="message"
              placeholder="Your Message"
              className="message"
            />
          </div>
          <button>Send</button>
        </div>
        <div className="contact">
          <div className="contact-method">
            <div className="icon">
              <Image src={call} alt="PhoneLogo" />
            </div>
            <div className="information-container">
              <pre>Phone</pre>
              <span>(+91) 7667045966</span>
            </div>
          </div>
          <div className="contact-method">
            <div className="icon">
              <Image src={mail} alt="mailLogo" />
            </div>
            <div className="information-container">
              <pre>Email</pre>
              <span>harshgupta88911@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactPage;
