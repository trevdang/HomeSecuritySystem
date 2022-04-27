import React, { Component } from 'react';
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { createHashHistory } from 'history';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

// const Navbar = () => {
//     return (
        // <>
        //     <Nav>
        //         <NavMenu>
        //             <NavLink to="/" activeStyle>
        //                 Home
        //             </NavLink>
        //             <NavLink to="/about" activeStyle>
        //                 About
        //             </NavLink>
        //             <NavLink to="/contact" activeStyle>
        //                 Contact Us
        //             </NavLink>
        //             <NavLink to="/cameras" activeStyle>
        //                 Cameras
        //             </NavLink>
        //             <NavLink to="/sign-up" activeStyle>
        //                 Sign Up
        //             </NavLink>
        //             <NavLink to="/signin" activeStyle>
        //                 Sign In
        //             </NavLink>
        //         </NavMenu>
        //     </Nav>
        // </>
//     );
// };

class Navbar extends Component {
    render() {
        const history = createHashHistory();
        return (
        <>
            <Nav style={{background: "#222222", textAlign: "center"}} expand="lg" variant="dark">
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        <h1>
                            Home Security Systems Inc.
                        </h1>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/cameras" activeStyle>
                        Cameras
                    </NavLink>
                    <NavLink to="/sign-in" activeStyle>
                        Sign In
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
        );
    }
}

export default Navbar;