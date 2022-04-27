import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class Cameras extends Component {
	render() {
		return (
			<div>
				<div className = "cameraViewDiv">
					<h1>
						Camera View
					</h1>
					<a href = 'http://25.46.212.227:8000'>
						<Image className = "HomeButtons" src = {require("../images/play-button-icon-transparent-2.png")} fluid/>
					</a>
				</div>
				<div className = "DataDiv">
					<div>
						<h1>
							Pressure Data
						</h1>
						<textarea id = "log2" cols = "50" rows = "16">

						</textarea>
					</div>
					<div>
						<h1>
							Photocell Data
						</h1>
						<textarea id = "log3" cols = "50" rows = "16">

						</textarea>
					</div>
					<div>
						<h1>
							Sonar Data
						</h1>
						<textarea id="log1" cols="50" rows="16">
							
						</textarea>
					</div>
				</div>
			</div>
		);
	}
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

function updateDisplayTextArea2(){
	var textarea = document.getElementById("log2");
	if(textarea.selectionStart == textarea.selectionEnd) {
	   textarea.scrollTop = textarea.scrollHeight;
	}
}

// setTimeout(updateDisplayTextArea2, 10)
setInterval(updateDisplayTextArea2,10)

function updateDisplayTextArea1(){
	var textarea = document.getElementById("log1");
	if(textarea.selectionStart == textarea.selectionEnd) {
	   textarea.scrollTop = textarea.scrollHeight;
	}
}

// setTimeout(updateDisplayTextArea1,10)
setInterval(updateDisplayTextArea1,10)

function updateDisplayTextArea3(){
	var textarea = document.getElementById("log3");
	if(textarea.selectionStart == textarea.selectionEnd) {
	   textarea.scrollTop = textarea.scrollHeight;
	}
}

// setTimeout(updateDisplayTextArea1,10)
setInterval(updateDisplayTextArea3,10)

function get2() {
	fetch("http://23.20.173.85:3000/log")
		.then((res) => res.json())
		.then((json) => {
			updateDisplay2(json);
		})

	function updateDisplay2(data) {
		let text = `${data[0].Date}`;
		let result = text.slice(4,24);
		console.log2(`${result}` + ' Pressure Plate: ' + `${data[0].plate}` + '\r\n')
		}
}

console.log2 = function () {
	var old = console.log;
	var logger = document.getElementById('log2');
	console.log2 = function () {
	  for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] == 'object') {
			logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]);
		} else {
			logger.innerHTML += arguments[i];
		}
	  }
	}
};

// setTimeout(get2,5000)
setInterval(get2,5000)

function get3() {
	fetch("http://23.20.173.85:3000/log")
		.then((res) => res.json())
		.then((json) => {
			updateDisplay3(json);
		})

	function updateDisplay3(data) {
		let text = `${data[0].Date}`;
		let result = text.slice(4,24);
		console.log3(`${result}` + ' Lights: ' + `${data[0].pcell}` + '\r\n')
		}
}

setInterval(get3, 5000)

console.log3 = function () {
	var old = console.log;
	var logger = document.getElementById('log3');
	console.log3 = function () {
	  for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] == 'object') {
			logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]);
		} else {
			logger.innerHTML += arguments[i];
		}
	  }
	}
};

function get() {
	fetch("http://23.20.173.85:3000/log")
		.then((res) => res.json())
		.then((json) => {
			updateDisplay(json);
		})

	function updateDisplay(data) {
		let text = `${data[0].Date}`;
		let result = text.slice(4,24);
		console.log1(`${result}` + ' Sonar Distance: ' + `${data[0].sensor}` + ' cm' + '\r\n')
		}

}

// setTimeout(get,5000)
setInterval(get,5000)

console.log1 = function () {
	var old = console.log;
	var logger = document.getElementById('log1');
	console.log1 = function () {
	  for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] == 'object') {
			logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]);
		} else {
			logger.innerHTML += arguments[i];
		}
	  }
	}
};

export default Cameras;
