import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ScrollToTop from './ScrollToTop';
import About from './About';
import Shop from './Shop';
import Magazines from './Magazines';
import Classes from './Classes';
import Events from './Events';
import Faqs from './Faqs';
import EventsDetails from './EventsDetails';
import Hoodies from './Hoodies';
import Bonnets from './Bonnets';
import Modelling from './Modelling';
import Acting from './Acting';
import Cart from './Cart';
import CheckoutSummary from './CheckoutSummary';
import Login from './Login';
import SignUp from './SignUp';
import ItemsDetails from './ItemsDetails';
import Tiers from './Tiers';
import Dashboard from './Dashboard';

function App() {
    return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					
					{/* Home */}
					<Route path="/" element ={<Home/>} />
					<Route path="/home" element ={<Home/>} />

					{/* Login and sign up */}
					<Route path="/login" element ={<Login/>} />
					<Route path="/sign-up" element ={<SignUp/>} />
					<Route path="/tiers" element ={<Tiers/>} />

					{/* about */}
					<Route path="/about" element ={<About/>} />

					{/* FAQs */}
					<Route path="/faqs" element ={<Faqs/>} />

					{/* Dashboard */}
					<Route path="/dashboard" element ={<Dashboard/>} />

					{/* Shop */}
					<Route path="/cart" element ={<Cart/>} />
					<Route path="/shop" element ={<Shop/>} />
					<Route path="/hoodies-n-shirts" element ={<Hoodies/>} />
					<Route path="/hair-bonnets" element ={<Bonnets/>} />
					<Route path="/cart-summary" element ={<CheckoutSummary/>} />
					<Route path="/item-detail" element ={<ItemsDetails/>} />

					{/* Magazines */}
					<Route path="/magazines" element ={<Magazines/>} />

					{/* Classes */}
					<Route path="/classes" element ={<Classes/>} />
					<Route path="/modelling-classes" element ={<Modelling />} />
					<Route path="/acting-classes" element ={<Acting />} />

					{/* Events */}
					<Route path="/events" element ={<Events/>} />
					<Route path="/events-details" element ={<EventsDetails/>} />

					{/* <Route path="/materials/:id" element ={<Materials/>} /> */}
				</Routes>
			</Router>
			
		</div>
    );
}

export default App;
