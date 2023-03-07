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

					{/* about */}
					<Route path="/about" element ={<About/>} />

					{/* FAQs */}
					<Route path="/faqs" element ={<Faqs/>} />

					{/* Shop */}
					<Route path="/shop" element ={<Shop/>} />
					<Route path="/hoodies-n-shirts" element ={<Hoodies/>} />
					<Route path="/hair-bonnets" element ={<Bonnets/>} />

					{/* Magazines */}
					<Route path="/magazines" element ={<Magazines/>} />

					{/* Classes */}
					<Route path="/classes" element ={<Classes/>} />
					<Route path="/modelling-classes" element ={<Modelling />} />

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
