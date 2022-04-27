import React, { Component } from 'react';

class SignIn extends Component {
	constructor(props) {
		super(props)

		this.state = { 
			email: ''
		}
	}

	changeHandler = e => {
		this.setState({[e.target.name]: e.target.value})
	}

	submitHandler = e => {
		e.preventDefault()
		post(this.state)
	}

	render() {
		const { email } = this.state
		return (
			<div className = "SignInDiv">
				<h1>
					Sign In
				</h1>
				<h3>
					Please enter your email to receive post notifications
				</h3>
				<form onSubmit = {this.submitHandler}>
					<div>
						<input
							type = "text"
							name = "email"
							value = {email}
							onChange = {this.changeHandler}
						/>
					</div>
					<button type = "submit" onClick = {updateDisplay}>
						Submit
					</button>
					<h4>

					</h4>
				</form>
				<div className = "cameraButtons">
					<h1>
						Settings
					</h1>
					<button onClick = {postTrue}>
						Activate Notifications
					</button>
					<button onClick = {postFalse}>
						Disable Notifications
					</button>
					<p>
								
					</p>
				</div>
			</div>
		);
	}
}

function post(data) {

	fetch("http://23.20.173.85:3000/email", {
		headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: 'POST',
		mode: 'cors',
		body: JSON.stringify(data) 
	})
}

function postTrue() {
    // Send data to the backend via POST
    fetch("http://23.20.173.85:3000/settings", {  // Enter your IP address here
        
        headers:{          
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify({ status: 'true' }) // body data type must match "Content-Type" header
  
    })

	updateDisplayTrue()
}

function postFalse() {
    // Send data to the backend via POST
    fetch("http://23.20.173.85:3000/settings", {  // Enter your IP address here
        
        headers:{          
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify({ status: 'false' }) // body data type must match "Content-Type" header
  
    })

	updateDisplayFalse()
}

function updateDisplayTrue() {
	const p = document.querySelector('p');
	while(p.firstChild) {
		p.removeChild(p.firstChild);
	}
	p.textContent = `Notifications: On`;
}

function updateDisplayFalse() {
	const p = document.querySelector('p');
	while(p.firstChild) {
		p.removeChild(p.firstChild);
	}
	p.textContent = `Notifications: Off`;
}

function updateDisplay() {
	const p = document.querySelector('h4');
	while(p.firstChild) {
		p.removeChild(p.firstChild);
	}
	p.textContent = `Thank you`;
}

export default SignIn;
