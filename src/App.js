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

					{/* Magazines */}
					<Route path="/magazines" element ={<Magazines/>} />

					{/* Classes */}
					<Route path="/classes" element ={<Classes/>} />

					{/* Events */}
					<Route path="/home" element ={<Events/>} />

					{/* <Route path="/materials/:id" element ={<Materials/>} /> */}
				</Routes>
			</Router>
			
		</div>
    );
}

export default App;
