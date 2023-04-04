import React from 'react';
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


class HeaderUser extends React.Component {

    render() {
        return (

            <Router>
                <div>

                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">HomeMade</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="mr-auto">
                                <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link ><Link to="/registration">Registration</Link></Nav.Link>
                                <Nav.Link ><Link to="/login">Login</Link></Nav.Link>

                            </Nav>

                        </Navbar.Collapse>

                    </Navbar>

                </div>
                <Switch>
                    <Route path="/Home"><Home /></Route>
                    <Route path="/registration"><Registration /></Route>
                    <Route path="/login"><Login /></Route>
                </Switch>
            </Router>


        )
    };
}

export default HeaderUser;