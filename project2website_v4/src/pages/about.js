import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class About extends Component {
	render() {
		return (
			<div>
				<h1>
					Welcome to Our Project
				</h1>
				<div>
					<p>
						Welcome to our Raspberry Pi 3 Model B V2 Home Security System project designed for UBC's CPEN291 
						Computer Engineering Design course.
					</p>
				</div>
				<div className = "AboutPage">
					<div className = "AboutPageSubDiv">
						<div>
							<h2 style = {{color: '#e0e0e0'}}>
								Overview
							</h2>
							<ul className = "overview" style = {{color: '#e0e0e0'}}>
								<li>
									The purpose of this project is to combine our knowledge of hardware and software to create a basic  
									interactive home security system
								</li>
								<li>
									The home security system includes a sensor, camera, and pressure plate all to view, detect, 
									and signal intruders through our website
								</li>
							</ul>
						</div>
						<div>
							<h2 style = {{color: '#e0e0e0'}}>
								Features
							</h2>
							<ul className = "overview" style = {{color: '#e0e0e0'}}>
								<li>
									ReactJS to design the website using libraries (e.g. Router, Navbar, 
									bootstrap, etc.)
								</li>
								<li>
									Raspberry Pi 3 Model B V2 combined with Raspberry Pi camera, ultrasonic 
									sensor, and pressure plate
								</li>
								<li>
									NodeJS for the server to fetch data and API to send notifications to 
									user via email
								</li>
							</ul>
						</div>
						<div>
							<h2 style = {{color: '#e0e0e0'}}>
								Usage and Details
							</h2>
							<ul className = "overview" style = {{color: '#e0e0e0'}}>
								<li>
									There are 3 separate programs that run the hardware separately
								</li>
								<li>
									Camera has a program running to continuously display its view on a separate 
									website that is accessible through the website under the cameras tab 
								</li>
								<li>
									Pressure plate has a program that is reading whether or not a certain amount 
									of pressure has been applied to it (e.g. representing someone stepping
									on the front door of client's house)
								</li>
								<li>
									Ultrasonic sensor has a program thats is continuously reading the distance in 
									front of it (e.g. detect the distance of how close someone is to the door)
								</li>
							</ul>
						</div>
						<div>
							<h2 style = {{color: '#e0e0e0'}}>
								Credits
							</h2>
							<ul className = "overview" style = {{color: '#e0e0e0'}}>
								<li>
									Thank you to jerry-ubc and Theo1611 for the back-end and hardware implementations
								</li>
								<li>
									Thank you to leonguo736 and trevdang for the front-end website development
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default About;