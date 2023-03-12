import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Cart = () => {
  return (
    <div style={{backgroundColor: "#eceefc"}}>
        <div className="p-2"></div>
        <div className="cart_container xs">
            <div className="cart_body shadow">
                <div className='cart_headerTit'>
                    Cart(1)
                </div>
                <div className='cart_divider'>
                    <div className="cart_dividers">
                        <div>
                            <img src="/DelImages/chuttersnap-Q_KdjKxntH8-unsplash (1).jpg" alt="" />
                        </div>
                        <div>
                            <div className='pl_1'>
                                <div className="bold7 font_18">
                                    Multicultural Designer Hoodie
                                </div>
                                <div className="font_14 bold5">
                                    Size: Big 
                                </div>
                                <div className="mt_1 font_20 text-success">
                                    $30
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt_2 flex">
                        <div className='flex'>
                            <button>
                                -
                            </button>
                            <samp className='px_1'>
                                1
                            </samp>
                            <button>
                                +
                            </button>
                        </div>
                        <div className='left_auto text-danger bold7'>
                            Remove
                        </div>
                    </div>
                </div>
                <div className='cart_divider'>
                    <div className="cart_dividers">
                        <div>
                            <img src="/DelImages/chuttersnap-Q_KdjKxntH8-unsplash (1).jpg" alt="" />
                        </div>
                        <div>
                            <div className='pl_1'>
                                <div className="bold7 font_18">
                                    Multicultural Designer Hoodie
                                </div>
                                <div className="font_14 bold5">
                                    Size: Big 
                                </div>
                                <div className="mt_1 font_20 text-success">
                                    $30
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt_2 flex">
                        <div className='flex'>
                            <button>
                                -
                            </button>
                            <samp className='px_1'>
                                1
                            </samp>
                            <button>
                                +
                            </button>
                        </div>
                        <div className='left_auto text-danger bold7 pointer'>
                            Remove
                        </div>
                    </div>
                </div>
                <div className='cart_divider'>
                    <div className="cart_dividers">
                        <div>
                            <img src="/DelImages/chuttersnap-Q_KdjKxntH8-unsplash (1).jpg" alt="" />
                        </div>
                        <div>
                            <div className='pl_1'>
                                <div className="bold7 font_18">
                                    Multicultural Designer Hoodie
                                </div>
                                <div className="font_14 bold5">
                                    Size: Big 
                                </div>
                                <div className="mt_1 font_20 text-success">
                                    $30
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt_2 flex">
                        <div className='flex'>
                            <button>
                                -
                            </button>
                            <samp className='px_1'>
                                1
                            </samp>
                            <button>
                                +
                            </button>
                        </div>
                        <div className='left_auto text-danger bold7'>
                            Remove
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="cart_body2 shadow">
                    <div className="cart_headerTit">
                        Cart Summary
                    </div>
                    <div className="flex px-3 my_1">
                        <div className='bold5 font_16'>
                            Subtotal
                        </div>
                        <div className="left_auto font_14 bold7 text-success">
                            $23
                        </div>
                        
                    </div>
                    <div className="px-3">
                        <div className="pb-3">
                            <div className="font_14 text-muted">
                                Delivery fees not included yet.
                            </div>
                            <Link to={"/cart-summary"} className="upcoming_Eevent_btn">
                                Checkout ($23)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart