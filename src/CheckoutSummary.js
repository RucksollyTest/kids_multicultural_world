import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const CheckoutSummary = () => {
    const [name,setName] = useState(null)
    const [address,setAddress] = useState(null)
    const [email,setEmail] = useState(null)
    const [phone,setPhone] = useState(null)

    const [namef,setNamef] = useState(null)
    const [addressf,setAddressf] = useState(null)
    const [emailf,setEmailf] = useState(null)
    const [phonef,setPhonef] = useState(null)
    
    const submitHandler = ()=>{
        if (!name){
            setNamef(true)
        }else{
            setNamef(null)
        }

        if (!address){
            setAddressf(true)
        }else{
            setAddressf(null)
        }

        if (!email){
            setEmailf(true)
        }else{
            setEmailf(null)
        }

        if (!phone){
            setPhonef(true)
        }else{
            setPhonef(null)
        }
    }
    
    return (
        <div style={{backgroundColor: "#eceefc"}}>
            <div className="p-2"></div>
            <div className="cart_container">
                <div className="cart_body shadow">
                    <div className='cart_headerTit'>
                        Delivery Information
                    </div>
                    <div className='cart_divider'>
                        <div>
                            <div className="pb_1 bold6 font_14">
                                Name
                            </div>
                            <input type="text" className={namef===true ? "error" : ""} placeholder='Input name' 
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="py_1 bold6 font_14">
                                Delivery Address
                            </div>
                            <input type="text" className={addressf ? "error" : ""} placeholder='Input delivery address' 
                                onChange={(e)=>setAddress(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="py_1 bold6 font_14">
                                Phone number
                            </div>
                            <input type="text" className={phonef ? "error" : ""} placeholder='Input phone number' 
                                onChange={(e)=>setPhone(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="py_1 bold6 font_14">
                                Email
                            </div>
                            <input type="text" className={emailf ? "error" : ""} placeholder='Input email' 
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        
                    </div>
                    <div className="cart_divider">
                        <div className="bold7 font_16">
                            ADDRESS DETAILS
                        </div>
                        <div className="bold6 font_14 pt_1">
                            {name}
                        </div>
                        <div className="text-muted font_14">
                            {address}
                        </div>
                        <div className="text-muted font_14">
                            {email}
                        </div>
                        <div className="text-muted font_14">
                            {phone}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cart_body2 shadow">
                        <div className="cart_headerTit">
                            Your Order
                        </div>
                        <div className='cart_divider'>
                            <div className="cart_dividersheck">
                                <div>
                                    <img src="/DelImages/chuttersnap-Q_KdjKxntH8-unsplash (1).jpg" alt="" />
                                </div>
                                <div>
                                    <div className='pl_1'>
                                        <div className="bold7 font_14">
                                            Multicultural Designer Hoodie
                                        </div>
                                        <div className="font_12 bold5">
                                            Size: Big 
                                        </div>
                                        <div className="font_14 text-success">
                                            $30
                                        </div>
                                        <div className="text-muted font_15">
                                            Qut: 1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='cart_divider'>
                            <div className="cart_dividersheck">
                                <div>
                                    <img src="/DelImages/chuttersnap-Q_KdjKxntH8-unsplash (1).jpg" alt="" />
                                </div>
                                <div>
                                    <div className='pl_1'>
                                        <div className="bold7 font_14">
                                            Multicultural Designer Hoodie
                                        </div>
                                        <div className="font_12 bold5">
                                            Size: Big 
                                        </div>
                                        <div className="font_14 text-success">
                                            $30
                                        </div>
                                        <div className="text-muted font_15">
                                            Qut: 1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex px-3 my_1">
                            <div className='font_16'>
                                Subtotal
                            </div>
                            <div className="left_auto font_14 bold7 text-success">
                                $23
                            </div>
                            
                        </div>
                        <div className="flex px-3 my_1">
                            <div className='font_16'>
                                Delivery fee
                            </div>
                            <div className="left_auto font_14 bold7 text-success">
                                $3
                            </div>
                            
                        </div>
                        <div className="flex px-3 my_1">
                            <div className='bold5 font_16'>
                                Total
                            </div>
                            <div className="left_auto font_14 bold7 text-success">
                                $23
                            </div>
                            
                        </div>
                        <div className="px-3">
                            <div className="pb-3">
                                <button onClick={submitHandler} className="upcoming_Eevent_btn">
                                    Checkout ($23)
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

export default CheckoutSummary