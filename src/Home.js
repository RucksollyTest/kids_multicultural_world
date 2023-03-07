import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {

    const submitHandler = ()=>{
        console.log("submitted")
    }
    return (
        <div>
            <div className='standard_width'>
                <div className="pt_5">
                    <div className="center font_34 bold4">
                        Kids Multicultural World
                    </div>
                    <div className="center pt_1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum, pariatur, consequuntur ipsam rerum 
                    </div>
                    <div className='py_3'>
                        <div className="search_container shadow_sm">
                            <input type="text" placeholder='Search' />
                            <span>
                                <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/24/ffffff/external-search-interface-essentials-kmg-design-glyph-kmg-design.png"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="py_4">
                    <div className="standard_in">
                        <div className="flex">
                            <span className='smd pr_1'>
                                Shop 
                                {/* <img className='ml_01' src="https://img.icons8.com/material-rounded/12/005BAA/sort-down.png"/> */}
                            </span>
                            <span className='smx'>
                                Magazines
                            </span>
                            <span className='smx'>
                                Classes
                            </span>
                            <span className='smx'>
                                Events
                            </span>
                            
                        </div>
                    </div>
                    <div className="standard_in">
                        <div className="py_4">
                            <div className="myCaurosel">
                                <div>
                                    <div className="inside_id">
                                        <img src="/DelImages/birk-enwald-UiQAb2rzL40-unsplash.jpg" alt="" />
                                        <img src="/DelImages/birk-enwald-UiQAb2rzL40-unsplash.jpg" alt="" />
                                    </div>
                                    <div className='botBorder mt_1'>
                                        <img src="/DelImages/aakash-dhage-8oTlyFFch9M-unsplash.jpg" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='botBorder mb_1'>
                                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07.jpeg" alt="" />
                                    </div>
                                    <div className="inside_id2">
                                        <div className='thres'>
                                            <img src="/Images/grl.jpeg" className='imgOnes' alt="" />
                                            <img src="/Images/stage.jpeg" className='imgtwos' alt="" />
                                        </div>
                                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.10 (10).jpeg" className='imgThres' alt="" />
                                    </div>
                                </div>
                                <div className='LastColImg'>
                                    <img src="/Images/WhatsApp Image 2023-03-06 at 11.49.55.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link className='join_now_btn'>
                                <span>
                                    Join Now
                                </span>
                                <samp>
                                    <img src="https://img.icons8.com/external-solid-kawalan-studio/24/ffffff/external-right-user-interface-solid-kawalan-studio.png"/>
                                </samp>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="py_5">
                    <div className="standard_in">
                        <div className='font_36 bold6'>
                            About
                        </div>
                        <div className="pt_5 about">
                            <div className="font_20 bold6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, omnis natus! Unde maiores minima voluptates dolores sunt quidem, a illo.
                            </div>
                            <div>
                                <div>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ad molestiae dolor alias delectus consequatur nam vero sint nostrum expedita quidem, quos eos fugiat aperiam laudantium neque consequuntur, ut voluptas.
                                </div>
                                <div className="pt_4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente quam soluta itaque, voluptates, aspernatur architecto magnam exercitationem reiciendis id fugiat, vitae quos perferendis eum dolorem vel officiis ratione. Ea.
                                </div>
                            </div>
                        </div>
                        <div className="padAbtpix">
                            <div className="about_pix_container">
                                <div>
                                    <div className='aboutPix1 flex'>
                                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07 (4).jpeg" alt="" />
                                    </div>
                                    <div className='aboutPix2 flex'>
                                        <img src="/Images/WhatsApp Image 2.jpeg" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='pt_6 aboutPix3'>
                                        <img src="/Images/imbg2.jpeg" alt="" />
                                    </div>
                                    <div className="mt_1 aboutPix4">
                                        <img src="/DelImages/aakash-dhage-8oTlyFFch9M-unsplash.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py_5">
                <div className="bg_ashy pb_7">
                    <div className='standard_width '>
                        <div className="standard_in">
                            <div className='font_36 bold6 pt_4'>
                                Reviews
                            </div>
                            <div className="reviews">
                                <div className='reviewContent shadow_sm'>
                                    <div className="flex">
                                        <div>
                                            <img src="https://img.icons8.com/ios-filled/24/null/quote-left.png"/>
                                        </div>
                                        <div className="left_auto">
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                        </div>
                                    </div>
                                    <div className="pt_3 font_14">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet ducimus ipsa consectetur vel asperiores. Earum eaque nesciunt magni debitis.
                                    </div>
                                    <div className="pt_1">
                                        <div className=" font_15 bold6 text-dark pb_3">
                                            Okenwa Anthony
                                        </div>
                                    </div>
                                    <img className='profileReview' src="/DelImages/el-guseinov-lPDRFQxaQDg-unsplash.jpg" alt="" />
                                </div>
                                <div className='reviewContent shadow_sm'>
                                    <div className="flex">
                                        <div>
                                            <img src="https://img.icons8.com/ios-filled/24/null/quote-left.png"/>
                                        </div>
                                        <div className="left_auto">
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                        </div>
                                    </div>
                                    <div className="pt_3 font_14">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet ducimus ipsa consectetur vel asperiores. Earum eaque nesciunt magni debitis.
                                    </div>
                                    <div className="pt_1">
                                        <div className=" font_15 bold6 text-dark pb_3">
                                            Okenwa Anthony
                                        </div>
                                    </div>
                                    <img className='profileReview' src="/DelImages/el-guseinov-lPDRFQxaQDg-unsplash.jpg" alt="" />
                                </div>
                                <div className='reviewContent shadow_sm'>
                                    <div className="flex">
                                        <div>
                                            <img src="https://img.icons8.com/ios-filled/24/null/quote-left.png"/>
                                        </div>
                                        <div className="left_auto">
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                            <img src="https://img.icons8.com/color/16/null/filled-star--v1.png"/>
                                        </div>
                                    </div>
                                    <div className="pt_3 font_14">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet ducimus ipsa consectetur vel asperiores. Earum eaque nesciunt magni debitis.
                                    </div>
                                    <div className="pt_1">
                                        <div className=" font_15 bold6 text-dark pb_3">
                                            Okenwa Anthony
                                        </div>
                                    </div>
                                    <img className='profileReview' src="/DelImages/el-guseinov-lPDRFQxaQDg-unsplash.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="standard_width py_7">
                <div className="standard_in">
                    <div className="py_3 logoIndustries">
                        <div>
                            <img src="/Images/unnameds.png" alt="" />
                        </div>
                        <div>
                            <img src="/Images/image_6483441 (2).JPG" alt="" />
                        </div>
                        <div>
                            <img src="/Images/image_6483441 (3).JPG" alt="" />
                        </div>
                        <div>
                            <img src="/Images/WLS_7_1996.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="standard_width">
                <div className="newsletterContainer shadow">
                    <div className="newsLetterText">
                        NEWS LETTER
                    </div>
                    <div className='font_14'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis excepturi, laudantium at reprehenderit
                    </div>
                    <div className="newLetterInpuContainer">
                        <input type="text" placeholder='Input Email Address' />
                        <button type='submit' onClick={()=>submitHandler}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home