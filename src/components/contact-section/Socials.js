import { FaLinkedin } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"

var git = "https://github.com/jhnaron"
var ln = "https://www.linkedin.com/in/jhnaron/"
var ml = "mailto:johnaronbelmonte@gmail.com"

function Socials() {
  return (
      <div className="group__socials">
        <a href={git} target="_blank noreferrer" className="github">
          <FaGithubSquare />
        </a>
        <a href={ln} target="_blank noreferrer" className="linkedin">
          <FaLinkedin />
        </a>
        <a href={ml} target="_blank noreferrer" className="mail">
          <IoIosMail />
        </a>
      </div>
  );
}

export default Socials;