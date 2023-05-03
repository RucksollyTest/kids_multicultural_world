import { NEWS_LETTER_FAIL, NEWS_LETTER_REQUEST, NEWS_LETTER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_RESET, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./Constant"




export const userLoginReducer =(state={},action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true}
        case USER_LOGIN_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false,error:action.payload}
        case USER_LOGOUT:
            return {}
        case USER_PROFILE_RESET:
            return {}
        default:
            return state
    }
}


export const signUpReducer =(state={},action)=>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading:true}
        case USER_REGISTER_SUCCESS:
            return {loading:false,success:true, userInfo:action.payload}
        case USER_REGISTER_FAIL:
            return {loading: false,error:action.payload}
        case USER_LOGOUT:
            return {}
        case USER_PROFILE_RESET:
            return {}
        default:
            return state
    }
}


export const newsLetterReducer =(state={},action)=>{
    switch(action.type){
        case NEWS_LETTER_REQUEST:
            return {loading:true,...state}
        case NEWS_LETTER_SUCCESS:
            return {loading:false, ...action.payload}
        case NEWS_LETTER_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}
