import { Switch, Route } from "react-router-dom";
// components
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Scroll from "./Components/Scroll";
// pages
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Resources from "./Pages/Resources/Resources";
import "./index.css";

const App = () => {
	return (
		<div className="App">
			<Scroll>
				<Navbar />
				<Switch>
					<Route
						exact
						path={process.env.PUBLIC_URL + "/"}
						component={Home}
					/>
					<Route
						exact
						path={process.env.PUBLIC_URL + "/work"}
						component={Work}
					/>
					<Route
						exact
						path={process.env.PUBLIC_URL + "/about"}
						component={About}
					/>
					<Route
						exact
						path={process.env.PUBLIC_URL + "/contact"}
						component={Contact}
					/>
					<Route
						exact
						path={process.env.PUBLIC_URL + "/resources"}
						component={Resources}
					/>
				</Switch>
				<Footer />
			</Scroll>
		</div>
	);
};

export default App;
