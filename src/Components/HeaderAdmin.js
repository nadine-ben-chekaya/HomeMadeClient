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
    Link,
    Redirect
} from 'react-router-dom';


class HeaderAdmin extends React.Component {
    logout = () => {
        localStorage.setItem("token", false);
        localStorage.removeItem("user");

    }

    render() {
        return (

            <Router>
                <div>

                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">HomeMade</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="mr-auto">
                                <Nav.Link ><Link to="/Home">Home</Link></Nav.Link>
                                <Nav.Link ><Link to="/registration">profile</Link></Nav.Link>
                                <Nav.Link ><Link onClick={this.logout}>logout</Link></Nav.Link>
                            </Nav>

                        </Navbar.Collapse>

                    </Navbar>

                </div>
                <Switch>
                    <Route path="/Home"><Home /></Route>
                    <Route path="/registration"><Registration /></Route>

                </Switch>
            </Router>


        )
    };
}

export default HeaderAdmin;