import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const ItemsDetails = () => {
  return (
    <div>
        <Navbar />
        <div className='standard_width'>
            <div className="ItemsDetail">
                <div className='shadow-sm'>
                    <div>
                        <img src="/Images/c20a4a_e89814ef8a0e4f37b814a5f37fb4d8cf_mv2.webp" alt="" />
                    </div>
                    <div className='divItemsOption'>
                        <div>
                            <img src="/DelImages/c20a4a_4e7ccfaae375491eb2d26969574279d6_mv2.webp" alt="" />
                        </div>
                        <div>
                            <img src="/DelImages/c20a4a_4e7ccfaae375491eb2d26969574279d6_mv2.webp" alt="" />
                        </div>
                        <div>
                            <img src="/DelImages/c20a4a_4e7ccfaae375491eb2d26969574279d6_mv2.webp" alt="" />
                        </div>
                        <div>
                            <img src="/DelImages/c20a4a_4e7ccfaae375491eb2d26969574279d6_mv2.webp" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="detailRightN">
                        <div className="bold7 font_24 text-dark">
                            Lorem ipsum dolor sit.
                        </div>
                        <div className="pt_2 text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam consectetur veritatis voluptatum minima, commodi, deserunt delectus recusandae molestiae ducimus nulla rem possimus ipsa ipsam quia culpa dicta aspernatur nobis?
                        </div>
                        <div className="pt_1 bold7 font_20">
                            $599
                        </div>
                        <div className="mt_2 py_2 border-top flex">
                            <div className='detailCartAdd'>
                                <span>
                                    -
                                </span>
                                <samp className='bold7'>
                                    1
                                </samp>
                                <span>
                                    +
                                </span>
                            </div>
                            <div className="pl_2">
                                <div className='font_16 bold5'>
                                    Only <span className="red">12 items</span> left!
                                </div>
                                <div className='font_16 bold5'>
                                    Don't miss it.
                                </div>
                            </div>
                        </div>
                        <div className="border-top pt_2">
                            <span className="bold7 text-dark">
                                Size Variation:
                            </span>
                            <span className='pl_1'>
                                Big
                            </span>
                        </div>
                        <div className="pt_2">
                            <button className='AddToCartDetailsBtn'>
                                Add To Cart
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ItemsDetails