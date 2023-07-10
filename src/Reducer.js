import { ADD_CART_FAIL, ADD_CART_REQUEST, ADD_CART_SUCCESS, DEL_IMG_FAIL, DEL_IMG_REQUEST, DEL_IMG_RESET, DEL_IMG_SUCCESS, DISPLAY_MAGAZINE_FAIL, DISPLAY_MAGAZINE_REQUEST, DISPLAY_MAGAZINE_SUCCESS, EVENT_DETAIL_FAIL, EVENT_DETAIL_REQUEST, EVENT_DETAIL_SUCCESS, EVENT_FAIL, EVENT_REQUEST, EVENT_SUCCESS, HANDLE_EDIT_FAIL, HANDLE_EDIT_REQUEST, HANDLE_EDIT_RESET, HANDLE_EDIT_SUCCESS, KIDS_DETAILS_FAIL, KIDS_DETAILS_REQUEST, KIDS_DETAILS_SUCCESS, KIDS_VIEW_FAIL, KIDS_VIEW_REQUEST, KIDS_VIEW_SUCCESS, NEWS_LETTER_FAIL, NEWS_LETTER_REQUEST, NEWS_LETTER_SUCCESS, SHOP_DETAIL_FAIL, SHOP_DETAIL_REQUEST, SHOP_DETAIL_SUCCESS, SHOP_FAIL, SHOP_REQUEST, SHOP_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_LOGOUT_FAIL, USER_LOGOUT_SUCCESS, USER_PROFILE_RESET, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./Constant"

export const magazineReducer =(state={},action)=>{
    switch(action.type){
        case DISPLAY_MAGAZINE_REQUEST:
            return {loading:true}
        case DISPLAY_MAGAZINE_SUCCESS:
            return {loading:false, magazines:action.payload}
        case DISPLAY_MAGAZINE_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}


export const cartAddReducer =(state={},action)=>{
    switch(action.type){
        case ADD_CART_REQUEST:
            return {loading:true}
        case ADD_CART_SUCCESS:
            return {loading:false, cart:action.payload}
        case ADD_CART_FAIL:
            return {loading: false,error:action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const eventDetsilReducer =(state={},action)=>{
    switch(action.type){
        case EVENT_DETAIL_REQUEST:
            return {loading:true,...state}
        case EVENT_DETAIL_SUCCESS:
            return {loading:false, eventh:action.payload}
        case EVENT_DETAIL_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}

export const eventReducer =(state={},action)=>{
    switch(action.type){
        case EVENT_REQUEST:
            return {loading:true,...state}
        case EVENT_SUCCESS:
            return {loading:false, eventt:action.payload}
        case EVENT_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}


export const shopDetsilReducer =(state={},action)=>{
    switch(action.type){
        case SHOP_DETAIL_REQUEST:
            return {loading:true,...state}
        case SHOP_DETAIL_SUCCESS:
            return {loading:false, shop:action.payload}
        case SHOP_DETAIL_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}


export const shopReducer =(state={},action)=>{
    switch(action.type){
        case SHOP_REQUEST:
            return {loading:true,...state}
        case SHOP_SUCCESS:
            return {loading:false, shop:action.payload}
        case SHOP_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}


export const updateReducer =(state={},action)=>{
    switch(action.type){
        case HANDLE_EDIT_REQUEST:
            return {loading:true,...state}
        case HANDLE_EDIT_SUCCESS:
            return {loading:false, success:action.payload}
        case HANDLE_EDIT_FAIL:
            return {loading: false,error:action.payload}
        case HANDLE_EDIT_RESET:
            return {}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}


export const delReducer =(state={},action)=>{
    switch(action.type){
        case DEL_IMG_REQUEST:
            return {loading:true,...state}
        case DEL_IMG_SUCCESS:
            return {loading:false, success:action.payload}
        case DEL_IMG_FAIL:
            return {loading: false,error:action.payload}
        case DEL_IMG_RESET:
            return {}
        default:
            return state
    }
}


export const kidsDetailsReducer =(state={},action)=>{
    switch(action.type){
        case KIDS_DETAILS_REQUEST:
            return {loading:true,...state}
        case KIDS_DETAILS_SUCCESS:
            return {loading:false, kid:action.payload}
        case KIDS_DETAILS_FAIL:
            return {loading: false,error:action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const kidsViewReducer =(state={},action)=>{
    switch(action.type){
        case KIDS_VIEW_REQUEST:
            return {loading:true,...state}
        case KIDS_VIEW_SUCCESS:
            return {loading:false, kids:action.payload}
        case KIDS_VIEW_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}

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

export const logoutReducer =(state={},action)=>{
    switch(action.type){
        case USER_LOGOUT:
            return {}
        case USER_LOGOUT_SUCCESS:
            return {loading:false,success:true}
        case USER_LOGOUT_FAIL:
            return {loading: false,error:action.payload}
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
