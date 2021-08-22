import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components
import Navbar from "./Components/Navbar/Navbar";
// pages
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import Resources from "./Pages/Resources/Resources";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/work" component={Work} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/resources" component={Resources} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
