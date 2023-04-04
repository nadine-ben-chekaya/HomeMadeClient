import { Component } from "react";
import { Redirect } from 'react-router';
import axios from "axios";

class Login extends Component {
    state = {}
    constructor(props) {
        super(props);

        this.state = {
            username: undefined,
            password: undefined,
            loggedIn: false,
            error: ''
        };
    }

    inputChange = async e => {
        await this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {

        const { username, password } = this.state;
        if (username && password) {
            let data = {
                username: this.state.username,
                password: this.state.password
            };
            axios.post("http://localhost/php%20projects/homemade/login.php", data)
                .then(response => {
                    // console.log(response.data);
                    if (response.data.success === 1) {
                        console.log(response.data.user.id);
                        this.setState({ loggedIn: true });

                        //n3adiw el current user mta3na lel app.js
                        //this.props.setUser(response.data.user);
                        if (response.data.user.id === "35") {
                            console.log("admin")
                            this.props.setUser(response.data.user, true, false);
                            //this.props.setUser(null);

                        } else {
                            console.log("mech admin")
                            this.props.setUser(response.data.user, false, true);
                            //this.props.setUserAdmin(null);


                        }

                        localStorage.setItem("token", response.data.user.id);

                    } else {
                        this.setState({ error: "please verify your information", });
                    }

                })
                .catch((error) => {
                    console.log(error.data);
                    //if (error.response && error.response.status === 403) {
                    this.setState({
                        error: 'please thabet melli da5altou',

                    });
                    //localStorage.setItem("token", false);
                    // }

                });
        } else {
            this.setState({
                error: 'please fill in everything',
            });
            //localStorage.setItem("token", false);

        }

        setTimeout(() => {
            this.setState({
                error: '',
            });
        }, 2000);
        e.preventDefault();
        e.target.reset();

    }


    render() {

        const { error } = this.state;
        if (this.state.loggedIn) {
            //redirect to the home page
            return <Redirect to={'/Home'} />;
        }

        return (
            <div className="container">
                <form className="contactus" onSubmit={this.handleSubmit}>
                    <h2 className="h2About">LOGIN</h2>
                    <div className="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-user"></i>
                        </div>
                        <input type="text" class="input-fieldcontactus" name="username" placeholder="username" onChange={this.inputChange} />
                    </div>

                    <div class="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-key"></i>
                        </div>
                        <input type="password" class="input-fieldcontactus" name="password" placeholder="password" onChange={this.inputChange} />
                    </div>

                    <button type="submit" class="btncontactus" >Submit</button>
                    {
                        error && (
                            <h5 className="error">{error}</h5>
                        )
                    }
                </form>

            </div>
        )
    }
}
export default Login;