import React from 'react';
//import HeaderAdmin from "./Components/HeaderAdmin";
//import HeaderUser from "./Components/HeaderUser";
//import FooterAdmin from "./Components/FooterAdmin";
import FooterUser from "./Components/FooterUser";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Home from "./Components/Home";
import About from "./Components/About";
import Decoration from "./Components/Decoration";
import Soin from "./Components/Soin";
import Clothes from "./Components/Clothes";
import Contactus from "./Components/Contactus";
import ProductAdd from "./Components/ProductAdd";
import ProductView from "./Components/ProductView";
import ProductEdit from "./Components/ProductEdit";
import MyCart from "./Components/MyCart";
import CartView from "./Components/CartView";
import Nav from "./Components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


class App extends React.Component {
  state = {};

  componentDidMount = () => {
    const config = {

      id: localStorage.getItem('token')

    };

    axios.get('getuser', config).then(
      res => {
        //this.setUser(res.data);
        if (res.data.user.id === "35") {
          console.log("admin")
          this.setUser(res.data.user, true, false);
          // this.setUser(null);

        } else {
          console.log("mech admin")
          this.setUser(res.data.user, false, true);
          // this.setUserAdmin(null);


        }

      },
      err => {
        console.log(err);
      }
    )
  };

  setUser = (user, admin, simpleuser) => {
    this.setState({
      user: user,
      admin: admin,
      simpleuser: simpleuser
    });
  }

  render() {
    return (

      <Router >
        <div className="App">
          <div className="allcontent">
            <Nav setUser={this.setUser} user={this.state.user} admin={this.state.admin} simpleuser={this.state.simpleuser} />

            <div className="auth-wrapper" style={{ backgroundImage: "url(/assets/images/homemade_background11.jpg)" }}>
              <div className="auth-inner" >
                <Switch>
                  <Route exact path={["/", "/home"]} component={() => <Home user={this.state.user} admin={this.state.admin} simpleuser={this.state.simpleuser} />} />
                  <Route exact path="/login" component={() => <Login setUser={this.setUser} />} />
                  <Route exact path="/register" component={Registration} />
                  <Route exact path="/productadd" component={ProductAdd} />
                  <Route exact path="/productView" component={ProductView} />

                  <Route exact path="/productEdit/:id" component={ProductEdit} />


                  <Route exact path="/decoration" component={Decoration} />
                  <Route exact path="/soin" component={Soin} />
                  <Route exact path="/clothes" component={Clothes} />
                  <Route exact path="/mycart" component={MyCart} />
                  <Route exact path="/CartView" component={CartView} />

                </Switch>
              </div>

              <About />
              <Contactus />
            </div>
          </div>

          <div className="footer">
            <div className="footer-div">
              <h1><i class="fab fa-facebook-square"></i> <i class="fab fa-twitter-square"></i> <i class="fab fa-linkedin"></i> </h1>
              <h4>Copyright © <i class="fas fa-home"></i>HomeMade 2020</h4>
            </div>
          </div>




        </div>
      </Router >
    )
  }
}
export default App;
