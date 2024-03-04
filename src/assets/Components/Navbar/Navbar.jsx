import { FiAlignLeft } from "react-icons/fi";
import logo from "/images/logo.png"
import "./navbar.scss";

const Navbar =()=>{
    return(
        <header>
            <figure>
                <img src={logo} alt="" />
                <FiAlignLeft className="menu"/>
            </figure>

            <nav>
                <a href="javascript:void(0)">Home</a>
                <a href="javascript:void(0)">About</a>
                <a href="javascript:void(0)">Contact</a>
            </nav>
        </header>
    )
}

export default Navbar