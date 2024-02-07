import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import anime from "../src/components/images/Rectangle 27.svg";
import { LuPhoneCall } from "react-icons/lu";
import { FaCheckSquare } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import ring from "../src/components/images/Ring.svg";
import butterfly from "../src/components/images/Butterfly.svg";
import earing from "../src/components/images/Earing.svg";
import rings from "../src/components/images/Rings.svg";
import necklace from "../src/components/images/Necklace.svg";
import cloth2 from "../src/components/images/image 2.svg";
import two from "../src/components/images/image 3 (2).svg";
import three from "../src/components/images/image 5 (1).svg";
import four from "../src/components/images/image 6.svg";
import five from "../src/components/images/image 4.svg";
import cloth from "../src/components/images/Cloth.svg";
import ten from "../src/components/images/Iridescent Demon Anime Kimono Haori Inspired Dangle Butterfly Stud Earrings 1.svg";
import eleven from "../src/components/images/Hanafuda Tanjiro Earrings (long) Demon Slayer 1.svg";
import twelve from "../src/components/images/Japanese Anime Earrings, Takashi Mitsuya Earrings, Anime Cosplay, Anime Jewelry 1.svg";
import thirteen from "../src/components/images/image 1.svg";
import loading from "../src/components/images/image 7.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import line1 from "../src/components/images/Line 1.svg";
import line2 from "../src/components/images/Line 1.svg";


const Shopname = () => {
    return ( 
        <div className="shopname-container">
            <div className="shopname-wrapper">
                <div className="shopname-heading">
                    <h1>SHOPANIME</h1>
                    <div className="shopname-in">
                        <CiSearch className="search" />
                        <input type="text" placeholder="Search" className="shopname-input" />
                    </div>
                </div>
                <div className="hamburger">
                    <RxHamburgerMenu className="burger" />
                </div>
                <div className="navbar">
                    <div className="navbar-account">
                        <CgProfile className="likes" />
                        <p>Account</p>
                    </div>

                    <div className="navbar-account">
                        <FcLikePlaceholder className="likes" />
                        <p>Likes</p>
                    </div>

                    <div className="navbar-account">
                        <FaRegCommentAlt className="likes" />
                        <p>About us</p>
                    </div>

                    <div className="navbar-account">
                        <FaCartPlus className="likes" />
                    </div>
                </div>
            </div>

            <div className="anime">
                <div className="wallet">
                <   h2>Wallet friendly shop site low price high quality!</h2>
                </div>
                <div className="anime-one">
                    <img src={anime} alt="" className="anime-image" width="100%" />
                </div>
            </div>
            <div className="anime-button">
                <div className="anime-contents">
                    <div className="check-square">
                        <FaCheckSquare className="square" />
                        <p>100% Safe payment</p>
                    </div>
                    <div className="phonecall">
                        <LuPhoneCall className="call" />
                        <p>24/7 Costmer attendance</p>
                    </div>
                </div>
            </div>

            <div className="jewelries-container">
                <div className="jewelries-wrapper">
                        <div className="jewelries-jewelries">
                            <h3>JEWELRIES</h3>
                            <IoChevronDown className="jewelries-down" />
                        </div>
                    <div className="new">
                        <div className="jewelries-contents">
                            <div className="jewelries-heading">
                                <div className="jewelries-ring-img">
                                    <img src={ring} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="jewelries-contents">
                            <div className="jewelries-heading1">
                                <div className="jewelries-ring-img">
                                    <img src={butterfly} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="jewelries-contents">
                            <div className="jewelries-heading1">
                                <div className="jewelries-ring-img">
                                    <img src={earing} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="jewelries-contents">
                            <div className="jewelries-heading1">
                                <div className="jewelries-ring-img">
                                    <img src={rings} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="jewelries-contents">
                            <div className="jewelries-heading1">
                                <div className="jewelries-ring-img">
                                    <img src={necklace} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>

            
            <div className="jewelries-container">
                <div className="jewelries-wrapper">
                    <div className="jewelries-jewelries">
                        <h3>FEMALE DRESS CUSTOMS</h3>
                        <IoChevronDown className="jewelries-down" />
                    </div>
                    <div className="new">
                        <div className="jewelries-contents">
                            <div className="jewelries-heading">
                                <div className="jewelries-ring-img">
                                    <img src={cloth2} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="jewelries-contents">
                            <div className="jewelries-heading1">
                                <div className="jewelries-ring-img">
                                    <img src={two} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="jewelries-contents">
                            <div className="jewelries-heading1">
                                <div className="jewelries-ring-img">
                                    <img src={three} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="jewelries-contents">
                            <div className="jewelries-heading1">
                                <div className="jewelries-ring-img">
                                    <img src={four} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="jewelries-contents">
                            <div className="jewelries-heading1">
                                <div className="jewelries-ring-img">
                                    <img src={five} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="jewelries-container">
                <div className="jewelries-wrapper">
                        <div className="jewelries-jewelries">
                            <h3>MALE DRESS CUSTOMS</h3>
                            <IoChevronDown className="jewelries-down" />
                        </div>
                    <div className="new">
                        <div className="jewelries-contents">
                            <div className="jewelries-heading">
                                <div className="jewelries-ring-img">
                                    <img src={cloth} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="jewelries-contents">
                            <div className="jewelries-heading1">
                                <div className="jewelries-ring-img">
                                    <img src={ten} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="jewelries-contents">
                            <div className="jewelries-heading1">
                                <div className="jewelries-ring-img">
                                    <img src={eleven} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="jewelries-contents">
                            <div className="jewelries-heading1">
                                <div className="jewelries-ring-img">
                                    <img src={twelve} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="jewelries-contents">
                            <div className="jewelries-heading1">
                                <div className="jewelries-ring-img">
                                    <img src={thirteen} alt="" className="ring-image" width="100%" />
                                </div>
                                <div className="jewlries-new-text">
                                    <div className="jewelries-text">
                                        <p>Death Note Yag...</p>
                                        <h4>$20.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="img-seven">
                <img src={loading} alt="" className="image-seven" width="100%" />
            </div>

            <footer>
                <div className="footer-container">
                    <h3>SHOPANIME</h3>
                    <div className="footer-wrapper">
                        <div className="footer-service">
                            <p>Chat with us</p>
                            <p>Customer care</p>
                            <p>Contact us</p>
                        </div>
                        <div className="footer-about">
                            <h3>ABOUT US</h3>
                            <p>Career</p>
                            <p>Terms and conditions</p>
                            <p>Privacy</p>
                            <p>Official store</p>
                            <p>Shopanime express</p>
                            <p>Shopanime global</p>
                        </div>
                        <div className="footer-money">
                            <h3>MAKE MONEY WITH SHOANIME</h3>
                            <p>Sell on Shopanime </p>
                            <p>Vendor hub </p>
                            <p>Become a partner</p>
                        </div>
                        <div className="footer-internatinal">
                            <h3>INTERNATIONAL</h3>
                            <p>China</p>
                            <p>Morocco</p>
                            <p>Nigeria</p>
                            <p>Algeria</p>
                        </div>
                    </div>
                    <div className="more">
                        <img src={line1} alt="" className="line1-seven" width="100%" />
                        <p>More</p>
                        <img src={line2} alt="" className="line1-seven" width="100%" />
                    </div>

                    <div className="footer-follow">
                        <h4>Follow us on</h4>
                        <div className="footer-facebook">
                            <FaFacebookSquare className="facebook" />
                            <p>Shopanime fun</p>
                        </div>
                        <div className="footer-facebook">
                            <FaYoutube className="youtube" />
                            <p>Shopanime fun</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
     );
}
 
export default Shopname;