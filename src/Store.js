import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { cartAddReducer, delReducer, eventDetsilReducer, eventReducer, kidsDetailsReducer, kidsViewReducer, logoutReducer, magazineReducer, newsLetterReducer, shopDetsilReducer, shopReducer, signUpReducer, updateReducer, userLoginReducer } from "./Reducer"


const reducer = combineReducers({
    userLogin: userLoginReducer,
    singUp: signUpReducer,
    kidsDetails: kidsDetailsReducer,
    newsLetter:newsLetterReducer,
    kidsView:kidsViewReducer,
    delImg:delReducer,
    updateUser:updateReducer,
    shop:shopReducer,
    shopDetail : shopDetsilReducer,
    eventt : eventReducer,
    eventDetail : eventDetsilReducer,
    cartAdd : cartAddReducer,
    magazine : magazineReducer,
    logout : logoutReducer,
    // dashboard:dashboardReducer,
    // paymentVerification:paymentReducer,
    // settings:settingsReducer,
    // passwordReset : passwordResetReducer,
    // passwordSet : passwordSetReducer
})

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
}
const middleware = [thunk]

const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store




