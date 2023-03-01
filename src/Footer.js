import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg_footer'>
        <footer className='standard_width'>
            <div className=" standard_in">
                <div className="footer_container">
                    <div>
                        <div>
                            <img src="/Images/kids multicultural logo 2.webp" alt="" />
                        </div>
                        <div className='social_media_logo'>
                            <a className='shadow center' href="#">
                                <img src="https://img.icons8.com/ios/24/CF0C36/instagram-new--v1.png"/>
                            </a>
                            <a className='shadow center' href="sfhnds">
                                <img src="https://img.icons8.com/ios/24/CF0C36/facebook-new.png"/>
                            </a>
                            <a className='shadow center' href="sfhnds">
                                <img src="https://img.icons8.com/ios/24/CF0C36/twitter--v1.png"/>
                            </a>
                            <a className='shadow center' href="sfhnds">
                                <img src="https://img.icons8.com/ios/24/CF0C36/youtube-play--v1.png"/>
                            </a>
                            <a className='shadow center' href="sfhnds">
                                <img src="https://img.icons8.com/ios/24/CF0C36/tiktok--v1.png"/>
                            </a>
                        </div>
                        <div className="pt_5">
                            <img src="https://img.icons8.com/ios-filled/24/CF0C36/place-marker--v1.png"/>
                            <span className="pl_2 bold7">
                                2801 Kings dr , Chicago Illinois 60615
                            </span>
                        </div>
                        <div className="pt_1">
                            <img src="https://img.icons8.com/fluency-systems-filled/24/CF0C36/filled-message.png"/>
                            <a href="mailto:global@Kidsmulticulturalworld.org" className="pl_2 bold7">
                                global@Kidsmulticulturalworld.org
                            </a>
                        </div>
                        <div className="pt_1">
                        <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/24/CF0C36/external-phone-networking-tanah-basah-glyph-tanah-basah.png"/>
                            <a href="tel:+17252508777" className="pl_2 bold7">
                                +17252508777
                            </a>
                        </div>
                    </div>
                    <div className='otherRoutes'>
                        
                        <div>
                            <div className="text-dark bold7 font_20">
                                Routes
                            </div>
                            <div className="pt_3">
                                <p>
                                    <span>
                                        <Link to={"/home"}>
                                            Home
                                        </Link>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <Link to={"/about"}>
                                            About
                                        </Link>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <Link to={"/faqs"}>
                                            FAQs
                                        </Link>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <Link to={"/sign_up"}>
                                            Sign Up
                                        </Link>
                                    </span>
                                </p>

                            </div>
                        </div>
                        <div>
                            <div className="text-dark bold7 font_20">
                                Activities
                            </div>
                            <div className="pt_3">
                                <p>
                                    <span>
                                        <Link to={"/shop"}>
                                            Shop
                                        </Link>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <Link to={"/magazines"}>
                                            Magazines
                                        </Link>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <Link to={"/home"}>
                                            Classes
                                        </Link>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <Link to={"/home"}>
                                            Events
                                        </Link>
                                    </span>
                                </p>

                            </div>
                        </div>
                        <div>
                            <div className="text-dark bold7 font_20">
                                Others
                            </div>
                            <div className="pt_3">
                                <p>
                                    <span>
                                        <Link to={"/home"}>
                                            Login
                                        </Link>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <Link to={"/home"}>
                                            My Cart
                                        </Link>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <Link to={"/home"}>
                                            Get Ticket
                                        </Link>
                                    </span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="borderTop py_1 bold5 text-muted">
                    © 2023 Kidsmulticulturalworld.org
                </div>
            </div>
        </footer>
        {/* <img src="/DelImages/IMG_8392.PNG" alt="" /> */}
    </div>
  )
}

export default Footer