import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div>
				<div>
					<h1>
						Home Security Systems Inc.
					</h1>
					<div>
						<p className = "HomePara">
							Hi, we are Home Security Systems Inc. and we are here to provide you with the safest,
							fastest, and accessible home security system so you will not have to worry about 
							another intruder again.
						</p>
					</div>
					<div className = "HomePageRedirectDiv">
						<div className = "HomePageRedirect">
							<Col>
								<Link to = '/cameras' style = {{textDecoration: 'none', color: '#e0e0e0'}}>
									<Image className = "HomeButtons" src = {require("../images/play-button-icon-transparent-2.png")} fluid/>
									<h2>
										Live Feed
									</h2>
								</Link>
							</Col>
						</div>
						<div className = "HomePageRedirect">
							<Col>
								<Link to = '/sign-in' style = {{textDecoration: 'none', color: '#e0e0e0'}}>
									<Image className = "HomeButtons" src = {require("../images/settingsicon.png")} fluid/>
									<h2>
										Settings
									</h2>
								</Link>
							</Col>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;