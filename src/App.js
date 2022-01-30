import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Giving from "./pages/Giving";
import Footer from "./component/Footer";

function App() {
	return (
		<div className="App">
			<Header />

			{/* ROUTES FOR ALL PAGES react-router-dom v6 */}
			<Routes>
				{/* <Route path='/' element={}/> */}
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/events" element={<Events />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/giving" element={<Giving />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
