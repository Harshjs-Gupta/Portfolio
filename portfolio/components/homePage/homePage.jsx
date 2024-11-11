import "@/style/home.css";
import Image from "next/image";
import Twitter from "../../public/twitter.png";
import Github from "../../public/github.png";
import LinkedIn from "../../public/linkedIn.png";
import OwnImage from "@/assets/Images/Harsh.png";
import DownloadIcon from "@/assets/Images/Icons/download.png";

function HomePage() {
  return (
    <>
      <section id="section-1">
        <div className="profile-container">
          <div className="introduction-container">
            <div className="introduction">
              <div className="hello">Hello It&apos;s Me</div>
              <h1>Harsh Gupta</h1>
              <div className="profession">
                <div className="static-txt">And I&apos;m a</div>
                <ul className="dynamic-txt">
                  <li>
                    <span className="Typing">Wev Developer</span>
                  </li>
                  <li>
                    <span className="Typing">Wev Designer</span>
                  </li>
                </ul>
              </div>
              <p>
                Frontend developer, interested in building high-performance,
                eye-catching, responsive, and interactive user interfaces for
                web apps/websites. currently in 3rd yr of BCA, looking for
                full-time opportunity in the domain of frontend development.
              </p>
            </div>
            <div className="social-account">
              <a
                href="https://x.com/harshgupta_js"
                target="_blank"
                className="logo"
              >
                <Image src={Twitter} height={20} width={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-gupta-b56a63265/"
                target="_blank"
                className="logo"
              >
                <Image src={LinkedIn} height={20} width={20} />
              </a>
              <a
                href="https://github.com/Harshjs-Gupta"
                target="_blank"
                className="logo"
              >
                <Image src={Github} height={20} width={20} />
              </a>
            </div>
            <div className="download_btn">
              <a href="" download="HarshGupta_CV">
                Download CV
              </a>
              <Image src={DownloadIcon} height={30} width={30} alt="" />
            </div>
          </div>
          <div className="picture-container">
            <Image
              src={OwnImage}
              height={350}
              width={350}
              alt="myPic"
              className="picture"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default HomePage;
