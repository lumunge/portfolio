import { Switch, Route } from "react-router-dom";
// components
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Scroll from "./Components/Scroll";
// pages
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import About from "./Pages/About/About";
import Resources from "./Pages/Resources/Resources";
import "./index.css";

const App = () => {
	return (
		<div className="App">
			<Scroll>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/work" component={Work} />
					<Route exact path="/about" component={About} />
					<Route exact path="/resources" component={Resources} />
				</Switch>
				<Footer />
			</Scroll>
		</div>
	);
};

export default App;
