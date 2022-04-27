import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class Footer extends Component {
    render(){
        return (
            <footer className = "footer">
                <div>
                    <div className = "linkDiv">
                        <a href = 'https://github.com/CPEN-291/P2_A_G21'>
                            <Image className = "footerButtons" src = {require("../images/github.png")} fluid/>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;