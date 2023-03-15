import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [formType,setFormType] = useState(false)
    const submitHandler = ()=>{

    }
    return (
        <div className='loginFormBg2'>
            <div className='pt_1'>
                <div className='signUpFormContainer'>
                    <div className='signUpForms'>
                        <div className="bold7 font_24 red">
                            Sign Up
                        </div>
                        <div className='pt_1 font_15 bold6'>
                            Get started with Kids Multicultural World
                        </div>
                        <div className='registerContent pt_3'>
                            <input type="text" placeholder='First Name' 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                             <input type="text" placeholder='Other Names' 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                             <input type="text" placeholder='Zip Code' 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                             <input type="email" placeholder='Input Email' 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                            <div className="passwordFormContainer">
                                <input className='xb' type={formType === false ? "password" : "text"} placeholder='Password' 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                                <div className='sight'>
                                    <img className={formType === false ? "pointer" : "d_none"} src="https://img.icons8.com/external-creatype-outline-colourcreatype/29/null/external-eye-essential-ui-v4-creatype-outline-colourcreatype.png"
                                        onClick={()=>setFormType(!formType)}
                                    />
                                    <img className={formType === false ? "d_none" : "pointer"} src="https://img.icons8.com/external-creatype-glyph-colourcreatype/24/null/external-eyes-basic-creatype-glyph-colourcreatype-2.png"
                                        onClick={()=>setFormType(!formType)}
                                    />
                                </div>
                            </div>
                            <div className='pt_2'>
                                <button onClick={submitHandler}>
                                    Submit
                                </button>
                            </div>
                            <div className="pt_2">
                                Already have an account? <Link className='text-primary pl-1' to={"/login"}>Login</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/Images/loginImg.jpeg" alt="" />
                    </div>
                </div>
            </div>
            <div className="pb-1"></div>
        </div>
    )
}

export default SignUp