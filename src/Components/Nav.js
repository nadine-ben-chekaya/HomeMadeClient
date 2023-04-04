import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link
} from 'react-router-dom';

export default class Nav extends Component {


    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null);

        //this.props.setUserAdmin(null);

    }
    render() {
        let buttons;

        if (this.props.user && this.props.admin) {
            buttons = (
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <Link className="navbar-brand" to={'/productadd'} >Productadd</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="navbar-brand" to={'/productView'} >ProductView</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="navbar-brand" to={'/CartView'} >Commands</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="navbar-brand" to={'/'} onClick={this.handleLogout}><i class="fas fa-lock"></i></Link>
                    </li>


                </ul>



            )

        } else if (this.props.user && !this.props.admin) {
            buttons = (
                <ul className="navbar-nav ml-auto">


                    <li className="nav-item">
                        <Link className="navbar-brand" to={'/decoration'} >Decoration</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="navbar-brand" to={'/soin'} >cosmetic</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="navbar-brand" to={'/clothes'} >Clothes</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="navbar-brand" to={'/'} onClick={this.handleLogout}><i class="fas fa-lock"></i></Link>
                    </li>



                </ul>



            )

        } else {
            buttons = (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="navbar-brand" to={'/login'}>Login</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="navbar-brand" to={'/register'}>Sign Up</Link>
                    </li>

                </ul>
            )
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to={"/"}><i class="fas fa-home"></i>HomeMade</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>Home</Link>
                    <div className="collapse navbar-collapse">
                        {buttons}

                    </div>
                </div>
            </nav>
        )
    }
}
