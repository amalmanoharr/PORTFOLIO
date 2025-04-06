import logo from "../assets/amal.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { SiHackerrank } from "react-icons/si";

const Navbar = () => {
    return(
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={65} height={45} alt="Logo"/>
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/amal-manohar/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                <FaLinkedin className="text-white" />
                </a>
                <a href="https://github.com/amalmanoharr?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <FaSquareGithub className="text-white" />
                </a>
                <a href="https://leetcode.com/u/AMALMANOHARRR/" target="_blank" rel="noopener noreferrer" aria-label="Leetcode">
                <TbBrandLeetcode className="text-white" />
                </a>
                <a href="https://www.hackerrank.com/profile/amal_manoharr" target="_blank" rel="noopener noreferrer" aria-label="Hackerrank">
                <SiHackerrank className="text-white" />
                </a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <MdEmail className="text-white"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;