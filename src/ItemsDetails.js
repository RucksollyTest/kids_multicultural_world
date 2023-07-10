import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartAddAction, shopDetailAction } from './Action';
import Loader from './Loader';
import IsEmpty from './IsEmpty';

const ItemsDetails = () => {
    const ids = useParams();
    const dispatch= useDispatch()
    const history = useNavigate()

    const shopDetail = useSelector(state => state.shopDetail)
    const {loading,error,shop} = shopDetail

    useEffect(()=>{
        if(ids.id){
            dispatch(shopDetailAction(ids.id))
        }
    },[ids])
    const [countVal,setCountVal] = useState(0)
    const [imG,setImG] = useState(null)
    
    const addTocartHandler = (x)=>{
        let cart = JSON.parse(localStorage.getItem(`cartUserItems`))
        let cartfilt = cart ? cart.filter(m =>m.id === x.id) : ""
        if(cartfilt && !IsEmpty(cartfilt)){
            let cartin = 0
            cart.map((k,nn)=>{
                if (k.id === x.id){
                    cartin = nn
                }
            })
            if ((x.amount_available >= cart[cartin].counter + 1) || !(x.amount_available)){
                cart[cartin].counter = cart[cartin].counter + 1
            }
            localStorage.setItem(`cartUserItems`, JSON.stringify(cart))
            addCheck(x)
            dispatch(cartAddAction())
        }else{
            if (!cart){
                x.counter = 1
                localStorage.setItem(`cartUserItems`, JSON.stringify([x]))
                addCheck(x)
                dispatch(cartAddAction())
            }else{
                x.counter = 1
                cart.unshift(x)
                localStorage.setItem(`cartUserItems`, JSON.stringify(cart))
                addCheck(x)
                dispatch(cartAddAction())
            }
        }

    }
    
    const removeTocartHandler = (x)=>{
        let cart = JSON.parse(localStorage.getItem(`cartUserItems`))
        if(cart){
            let cartin = 0
            cart.map((k,nn)=>{
                if (k.id === x.id){
                    cartin = nn
                }
            })
            if ((cart[cartin].counter - 1 > 0)){
                cart[cartin].counter = cart[cartin].counter - 1
            }
            localStorage.setItem(`cartUserItems`, JSON.stringify(cart))
            addCheck(x)
            dispatch(cartAddAction())
        }

    }

    const addCheck =(x)=>{
        let cart = JSON.parse(localStorage.getItem(`cartUserItems`));
        let cartfilt = cart ? cart.filter(m =>m.id === x.id) : ""
        
        if(cartfilt && !IsEmpty(cartfilt)){
            setCountVal(cartfilt[0].counter)
        }
    }
    
    useEffect(()=>{
        if(shop){
            addCheck(shop)
        }
    },[shop])
  return (
    <div>
        <Navbar />
        <div className='standard_width'>
            {loading && <Loader />}
            {shop && 
                <div className="ItemsDetail">
                    <div className='shadow-sm'>
                        {imG ?
                            <div>
                                <img src={`${process.env.REACT_APP_BASE_URL}${imG}`} alt="" />
                            </div>
                        :
                            <div>
                                <img src={`${process.env.REACT_APP_BASE_URL}${shop.cover_image}`} alt="" />
                            </div>
                        }
                        
                        <div className='divItemsOption'>
                            {shop.other_images && shop.other_images.map(x=>(
                                <div key={x.id}>
                                    <img src={`${process.env.REACT_APP_BASE_URL}${x.image}`} alt=""
                                        onClick={()=>setImG(x.image)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="detailRightN">
                            <div className="bold7 font_24 text-dark">
                                {shop.name}
                            </div>
                            <div className="pt_2 text-muted">
                                {shop.description}
                            </div>
                            <div className="pt_1 bold7 font_20">
                                ${shop.price}
                            </div>
                            <div className="mt_2 py_2 border-top flex">
                                <div className='detailCartAdd'>
                                    {countVal > 1 ? 
                                        <span className='pointer' onClick={()=>removeTocartHandler(shop)}>
                                            -
                                        </span>
                                    :
                                        <span className='pointer text-muted'>
                                            -
                                        </span>
                                    }
                                    <samp className='bold7'>
                                        {countVal}
                                    </samp>
                                    <span className='pointer' onClick={()=>addTocartHandler(shop)}>
                                        +
                                    </span>
                                </div>
                                {(shop.amount_available < 13) && (shop.amount_available != 0) && 
                                    <div className="pl_2 msw">
                                        <div className='font_16 bold5'>
                                            Only <span className="red">{shop.amount_available} items</span> left!
                                        </div>
                                        <div className='font_16 bold5'>
                                            Don't miss it.
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="border-top pt_2">
                                <span className="bold7 text-dark">
                                    Size:
                                </span>
                                <span className='pl_1'>
                                    {shop.size}
                                </span>
                            </div>
                            <div className="pt_2">
                                {countVal ?
                                    <button className='AddToCartDetailsBtn' onClick={()=>history("/cart")}>
                                        View in cart
                                    </button>
                                :
                                    <button className='AddToCartDetailsBtn' onClick={()=>addTocartHandler(shop)}>
                                        Add To Cart
                                    </button>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            }
        </div>
        <Footer />
    </div>
  )
}

export default ItemsDetails