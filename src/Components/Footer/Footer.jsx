import { FaAppleAlt, FaGooglePlay, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"   


const Footer = () => {
    return (
        <footer className="footer">
            <div className="apps">
                <span className="footer-text">Baixe nossos app</span>
                <div>
                    <img className="apple" src="https://i1.wp.com/multitekinfo.com.br/wp-content/uploads/2016/02/apple.png?fit=512%2C512&ssl=1" alt="" srcset="" />
                    <img className="googleplay" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/1917px-Google_Play_Arrow_logo.svg.png" alt="" srcset="" />
                </div>
            </div>
            <div className="redes">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/769px-Instagram-Icon.png" alt="" srcset="" />
                <img src="https://www.transparentpng.com/thumb/linkedin/linkedin-icon-png-4.png" alt="" srcset="" />
            </div>
            <div className="contato-footer">
                <span className="icons number">(99) 9999 9999</span>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer