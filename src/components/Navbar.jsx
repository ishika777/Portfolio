import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo from "../assets/ik-logo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} style={{color : "white"}} className="mx-2" width={70} height={33} alt="Logo" />
            </a>

        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/ishika-kansal-699198245/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>

            <a href="https://github.com/ishika777" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>
        </div>
    </nav>
  )
}

export default Navbar