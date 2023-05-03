import axios from "axios"
import { NEWS_LETTER_FAIL, NEWS_LETTER_REQUEST, NEWS_LETTER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./Constant"




export const loginAction =(email,password) => async(dispatch) =>{
    
    try{
        dispatch({type: USER_LOGIN_REQUEST})
        
        const headers= {
            "Content-type":"application/json"
        }
        const {data} = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/login`,
            {username:email,password:password},
            headers
        )
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem("userInfo",JSON.stringify(data))
    } catch(error){
        dispatch({
            type : USER_LOGIN_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}


export const signUpAction =(x) => async(dispatch) =>{
    
    try{
        dispatch({type: USER_REGISTER_REQUEST})
        const headers= {
            "Content-type":"application/json"
        }
        const {data} = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/register`,
            x,
            headers
        )
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch(error){
        dispatch({
            type : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}


export const newsLetterAction =(x) => async(dispatch,getState) =>{
    
    try{
        dispatch({type: NEWS_LETTER_REQUEST})
        
        const headers= {
            "Content-type":"application/json"
        }
        const {data} = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/newsletter`,
            x,
            headers
        )
        dispatch({
            type: NEWS_LETTER_SUCCESS,
            payload: data
        })
    } catch(error){
        if(error && error.response.status === 401){
            dispatch({type: USER_LOGOUT})
            localStorage.removeItem('userInfo')
        }else{
            dispatch({
                type : NEWS_LETTER_FAIL,
                payload : error.response && error.response.data.detail ? error.response.data.detail : error.message
            })
        }
    }
}


