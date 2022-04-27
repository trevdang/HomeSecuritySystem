import React, { Component }from 'react';
import { createHashHistory } from 'history';
import './App.css';
import { Nav, NavLink, NavMenu } from "./components/NavbarElements";
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route, renderMatches}
	from 'react-router-dom';
import './index.css'
import { Link } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Cameras from './pages/cameras';
import SignIn from './pages/signin';
import Footer from "./components/Footer";

class App extends Component {
	render() {
		return (
			<div className="body">
				<Router>
					<Navbar />
					<Routes>
						<Route exact path = '/' exact element = {<Home/>}/>
						<Route path = '/about' element = {<About/>}/>
						<Route path = '/cameras' element = {<Cameras/>}/>
						<Route path = '/sign-in' element = {<SignIn/>}/>
					</Routes>
					<Footer />
				</Router>
			</div>
		);
	}
}

export default App;