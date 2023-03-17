import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer'

const Home = () => {

    const submitHandler = ()=>{
        console.log("submitted")
    }
    return (
        <div>
            <div className='standard_width homeBased'>
                <div className="pt_5">
                    <div className="center">
                        <span className="blue fonts2 font_34 bold4">Kids</span> <span className="red pl_05 fonts2 font_34 bold4">
                            Multicultural
                        </span> <span className='blue fonts2 font_34 bold4 pl_05'>
                        World
                        </span>
                    </div>
                    <div className="center pt_1 taking">
                        Taking Kids Talent to the next level Fashion Shows, Magazine features , Modeling and Acting sections for Kids ages 0 to 17 years old.   Join now  Create your profile.
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
                            <Carousel>
                                <Carousel.Item interval={4000}>
                                    <div className="myCaurosel">
                                        <div>
                                            <div className="inside_id">
                                                <Link to={"/hoodies-n-shirts"}>
                                                    <img src="/Images/blackHoodies.jpeg" alt="" />
                                                </Link>
                                                <Link to={"/hoodies-n-shirts"}>
                                                    <img src="/Images/whiteHoodie.jpeg" className='borrad' alt="" />
                                                </Link>
                                            </div>
                                            <div className='botBorder mt_1'>
                                                <img src="/Images/Shirts.jpeg" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='botBorder mb_1'>
                                                <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07.jpeg" alt="" />
                                            </div>
                                            <div className="inside_id2">
                                                <div className='thres'>
                                                    <img src="/Images/college.jpeg" alt="" />
                                                </div>
                                                <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.10 (10).jpeg" className='imgThres' alt="" />
                                            </div>
                                        </div>
                                        <div className='LastColImg'>
                                            <Link to={"/magazines"}>
                                                <img src="/Images/WhatsApp Image 2023-03-06 at 11.49.55.jpeg" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                    <div className="myCaurosel">
                                        <div>
                                            <div className="inside_id">
                                                <img src="/Images/blackHoodies.jpeg" alt="" />
                                                <img src="/Images/Shirts.jpeg" className='borrad' alt="" />
                                            </div>
                                            <div className='botBorder mt_1'>
                                                <img src="/Images/HairBonnets.jpeg" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='botBorder mb_1'>
                                                <img src="/Images/colleges.jpeg" alt="" />
                                            </div>
                                            <div className="inside_id2">
                                                <div className='thres'>
                                                    <img src="/Images/Web BR2.jpg" alt="" />
                                                </div>
                                                <img src="/Images/Web BR3.jpg" className='imgThres' alt="" />
                                            </div>
                                        </div>
                                        <div className='LastColImg'>
                                            <Link to={"/magazines"}>
                                                <img src="/Images/magCovers.jpeg" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                    <div className="myCaurosel">
                                        <div>
                                            <div className="inside_id">
                                                <img src="/Images/blackHoodies.jpeg" alt="" />
                                                <img src="/Images/Shirts.jpeg" className='borrad' alt="" />
                                            </div>
                                            <div className='botBorder mt_1'>
                                                <img src="/Images/HairBonnets.jpeg" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='botBorder mb_1'>
                                                <img src="/Images/Web TR1.jpg" alt="" />
                                            </div>
                                            <div className="inside_id2">
                                                <div className='thres'>
                                                    <img src="/Images/Web BR1.jpg" alt="" />
                                                </div>
                                                <img src="/Images/Web BR3.jpg" className='imgThres' alt="" />
                                            </div>
                                        </div>
                                        <div className='LastColImg'>
                                            <Link to={"/magazines"}>
                                                <img src="/Images/cover.jpeg" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>
                            <Link to={"/sign-up"} className='join_now_btn'>
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
                                The Kids Multicultural World is a cultural activism, Fashion , Modeling and Acting Academy focused on Uniting a diverse Nation of Kids ages 0 month - 17 years.
                            </div>
                            <div>
                                <div>
                                    We produce a bimonthly magazine, online Modeling & acting classes and host annual Kids Multicultural Fashion Shows & Festivals Worldwide.

                                    We educate Kids to take pride in cultural heritage ,bring more awareness to multiculturalism to end discrimination, bullying and segregation- understanding the importance of self-growth, building skills, and capitalizing on their individual talents.
                                </div>
                                <div className="pt_4">
                                    This organization was founded on May 1st, 2017 by CEO .Queen Amb. Dr. Krystal Okeke’Chanchangi. A global cultural activist and voice for the next generation. The Ceo is focused on eliminating discrimination, bullying, and segregation.
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
                                    <div className="pt_3 font_12">
                                        We had such a wonderful experience at Kids Multicultural Fashion Show. All the kids came together to celebrate their different coutures in their traditional outfits. We learned something unique about each country and made friendships. Kids we happy to receive grift bags, refreshments, certificates and trophies. After the event Krystal shared professional photographs with families. We were so happy to be part of this event and are hoping to return next year. Thank You.
                                    </div>
                                    <div className="pt_1">
                                        <div className=" font_15 bold6 text-dark pb_3">
                                            Marina Schultz
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
                                    <div className="pt_3 font_12">
                                        I enjoyed the fashion show and I thought the performances were fabulous. It was a nice experience for my son and family to showcase their cultures. Looking forward to next years show and I will continue to follow the organization. Very organized and a sense of community is truly established.
                                    </div>
                                    <div className="pt_1">
                                        <div className=" font_15 bold6 text-dark pb_3">
                                            Nicole Brown 
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
                                    <div className="pt_3 font_12">
                                        ️America Kids Multicultural World has taught my son the importance of knowing & understanding culture & roots. Helping him to better appreciate all cultures & people. Thank you so much for the experience and continued guidance
                                    </div>
                                    <div className="pt_1">
                                        <div className=" font_15 bold6 text-dark pb_3">
                                            Tasha Maria
                                        </div>
                                    </div>
                                    <img className='profileReview' src="/DelImages/el-guseinov-lPDRFQxaQDg-unsplash.jpg" alt="" />
                                </div>
                            </div>
                            <div className="pt_4">
                                <div className="reviews ">
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
                                            ️ Ever since my daughter has been apart of this amazing family, she has blossomed in so many different ways. She has gained so much experience from her first show thanks to all the amazing kings and queens who supported and helped her. She has new friends and made new goals for her career and future. She never once felt as if she didn't belong due to lack of experience. Also walking with so many different cultures was absolutely beautiful, unifying, and gave hope for our children. I highly recommend this organization to help shape our children's future and make it so bright. Greatest opportunity ever given to my daughter. Thank you
                                        </div>
                                        <div className="pt_1">
                                            <div className=" font_15 bold6 text-dark pb_3">
                                                Danielle Brown
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
                                        <div className="pt_3 font_12">
                                            Ok, parents, magazine readers, or simply fans of America Kids Multicultural World, let me share my honest opinion. This magazine promotes our children, who are our future, our investment and our world and air. Our children are given a platform to express themselves, be heard, share stories, give advice and encourage others to keep pursuing their dreams. Being heard and seen gives our children confidence and affirmation of their place and value in the society. So wouldn't you support such an altruistic purpose of the magazine? I know that I would and I will. There are numerous magazines and other types of publications that we spend money on, making rich establishments even richer. Well, I refuse to invest in those and commit to invest in what our children can benefit from. I will support and invest into America Kids Multicultural World Magazine in any way shape and form that seems feasible to me. How YOU want to contribute into our children's future - your decision. Thank you, America Kids
                                        </div>
                                        <div className="pt_1">
                                            <div className=" font_15 bold6 text-dark pb_3">
                                                Irina Littman
                                            </div>
                                        </div>
                                        <img className='profileReview' src="/DelImages/el-guseinov-lPDRFQxaQDg-unsplash.jpg" alt="" />
                                    </div>
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