import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
// import { signUpReducer, userLoginReducer } from "./HomeReducer"
import { newsLetterReducer, signUpReducer, userLoginReducer } from "./Reducer"
// import { bookConsultationReducer, contactUsReducer, dashboardReducer, handleProjectReducer, homeListReducer, newsLetterReducer, passwordResetReducer, passwordSetReducer, paymentReducer, settingsReducer, signUpReducer, tokenRequestReducer, userLoginReducer } from "./HomeReducer"



const reducer = combineReducers({
    userLogin: userLoginReducer,
    singUp: signUpReducer,
    newsLetter:newsLetterReducer,
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




