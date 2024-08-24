import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <h1 className="mx-2 w-10 text-3xl">Op</h1>
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a className=" hover:shadow-xl transition transform hover:scale-105 duration-300" href="https://www.linkedin.com/in/om-patel-0608b326b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a className= " hover:shadow-xl transition transform hover:scale-105 duration-3000" href="https://github.com/ompatech" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        
        {/* <FaSquareXTwitter /> */}
    </div>
  </nav>
  )
};

export default Navbar
