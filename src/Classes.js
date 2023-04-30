import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Classes = () => {
    return (
        <div>
            <Navbar />
            <div className="classLanding_page">
                <div className="classDivider relative">
                    <div>
                        <div className="ClassHeader text_align_center">
                            CLASSES
                        </div>
                        <div className="classesDescHeader">
                            KIDS MODELING AND ACTING CLASSES
                        </div>
                        <div className="pt_2">
                            <span className='text-muted'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cupiditate, consequatur veniam aperiam beatae numquam earum deleniti quaerat provident facere.
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="diveid">
                            <div>
                                <img src="/Images/2008ac874c6d825fe0b9d5a682ad7f21.jpg" alt="" />
                            </div>
                            <div>
                                <img src="/Images/2008ac874c6d825fe0b9d5a682ad7f21.jpg" alt="" />
                            </div>
                            <div></div>
                            <div>
                                <img src="/Images/2008ac874c6d825fe0b9d5a682ad7f21.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="standard_width xr">
                <div className="standard_in">
                    <div className="pt_7 bold7 font_32">
                        Modeling Classes
                    </div>
                    <div className="model_class_CONtainer">
                        <div>
                            <img src="/DelImages/lorenzo-hamers-BKa3ovG8Yps-unsplash.jpg" alt="" />
                        </div>
                        <div>
                            <div className="mt_2">
                                <div className="bold7 font_24">
                                    Lorem ipsum dolor sit.
                                </div>
                                <div className="mt_3 text-muted">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit, sunt molestias quibusdam voluptates fugiat adipisci eaque aut quaerat consequuntur ab libero magnam consequatur ad pariatur inventore commodi dolore distinctio?
                                </div>
                                <div className='pt_2'>
                                    <span className="pr_1 text-danger bold6">
                                        2pm - 4pm
                                    </span>
                                    Every Sunday
                                </div>
                                <div className="pt_2">
                                    <Link to={"/home"} className="font_18 bold6 blue">
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt_7 bold7 font_32">
                        Acting Classes
                    </div>
                    <div className="model_class_CONtainer pb_7">
                        <div>
                            <img src="/DelImages/lorenzo-hamers-BKa3ovG8Yps-unsplash.jpg" alt="" />
                        </div>
                        <div>
                            <div className="mt_2">
                                <div className="bold7 font_24">
                                    Lorem ipsum dolor sit.
                                </div>
                                <div className="mt_3 text-muted">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit, sunt molestias quibusdam voluptates fugiat adipisci eaque aut quaerat consequuntur ab libero magnam consequatur ad pariatur inventore commodi dolore distinctio?
                                </div>
                                <div className='pt_2'>
                                    <span className="pr_1 text-danger bold6">
                                        2pm - 4pm
                                    </span>
                                    Every Sunday
                                </div>
                                <div className="pt_2">
                                    <Link to={"/home"} className="font_18 bold6 blue">
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Classes