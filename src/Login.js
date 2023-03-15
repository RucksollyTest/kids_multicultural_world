import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [formType,setFormType] = useState(false)
    const submitHandler = ()=>{

    }
    return (
        <div className='loginFormBg'>
            <div className="paddForm">
                <div className="loginContainerBox3">
                    <div className="center bold4 font_24">
                        Login
                    </div>
                    <div className="center text-dark pb_1">
                        Welcome Back
                    </div>
                    <input type="text" placeholder='Input Email' 
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
                    <div>
                        <button onClick={submitHandler}>
                            Submit
                        </button>
                    </div>
                    <div className="pt_1">
                        <Link to={"/home"} className="text-primary">
                            Forgot password?
                        </Link>
                    </div>
                    <div className="pt_1">
                        Don't have an account? <Link className='text-primary pl-1' to={"/sign-up"}>Sign up</Link>
                    </div>
                </div>
            </div>
            {/* <img src="/DelImages/IMG_8220.jpg" alt="" /> */}
        </div>
    )
}

export default Login