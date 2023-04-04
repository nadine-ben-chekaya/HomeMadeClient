import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'
class Signin extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        this.state = {
            email: '',
            password: '',
            loggedIn
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitForm(e) {
        e.preventDefault();
        // const { email, password } = this.state

        // if(email === "admin@123" && password === "admin")
        // {
        //     localStorage.setItem("token", "loggedIn")
        //     this.setState({
        //         loggedIn: true
        //     })
        //     console.log("Logged In!")
        // }
        // else
        // {
        //     alert("Invalid email or password!");
        //     console.log("Invalid email or password!")
        // }


        $.post("http://localhost/php-react-rest-api-crud/login_check.php", function (data) {
            if (data === "1") {
                localStorage.setItem("token", "loggedIn")
                console.log("success!");
            }
            else if (data === "0") {
                console.log("sorry!");
            }
        })

    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/admin" />
        }
        return (

            <div>
                <h1>Login</h1>

                <form onSubmit={this.submitForm}>
                    <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange} />
                    <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Signin;
//another test
import React from 'react';
import { Redirect } from 'react-router';
import './connexion.css';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: null,
            email: null,
            loggedIn: false,
            error: '',

        };
    }

    change = async e => {
        await this.setState({
            [e.target.id]: e.target.value,
        });
    }

    handleSubmitLogIn = e => {
        const { email, password } = this.state;

        if (password && email) {

            console.log(this.state);
            let formData = new FormData();
            formData.append("email", this.state.email);
            formData.append("password", this.state.password);
            const url = "http://localhost:8888/API/Connexion/login.php";
            axios.post(url, formData)

                .then(function (response) {
                    this.setState({ loggedIn: true });
                    console.log("success");
                }.bind(this))

                .catch((error) => {
                    if (error.response && error.response.status === 403) {
                        this.setState({
                            error: error.response.data,
                        });
                    }
                });

        } else {
            this.setState({
                error: 'please fill in everything',
            });
        }

        setTimeout(() => {
            this.setState({
                error: '',
            });
        }, 2000);

        e.preventDefault();
    }


    render() {
        const { error } = this.state;
        const { loggedIn } = this.state;

        if (loggedIn) {
            //redirect to the home page
            return <Redirect to="/accueil" />;
        }

        return (
            <div>
                <form onSubmit={this.handleSubmitLogIn}>
                    <div className="text-center">
                        <h2 className="dark-grey-text mb-5">
                            Log In
                    </h2>
                    </div>
                    <label htmlFor="email" className="grey-text">
                        email
                    <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            onChange={this.change}
                        />
                    </label>

                    <br />
                    <label htmlFor="password" className="grey-text">
                        password
                    <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            onChange={this.change}
                        />
                    </label>

                    <div className="text-center mb-3">
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmitLogIn}>validate</button>
                        {
                            error && (
                                <p className="error">{error}</p>
                            )
                        }
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
//redirect
// https://stackoverflow.com/questions/46081597/redirect-page-after-axios-success-login-reactjs