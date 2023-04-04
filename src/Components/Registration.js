import { Component } from "react";
import axios from "axios";

class Registration extends Component {
    state = {}
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            password: "",
            rpassword: "",
            error: ''

        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            rpassword: this.state.rpassword
        };

        axios.post("http://localhost/php%20projects/homemade/register.php", data)
            .then(response => {
                console.log(response.data)

                this.setState({ error: response.data, });

            })
            .catch((error) => {
                console.log(error.data);

            });
        setTimeout(() => {
            this.setState({
                error: '',
            });
        }, 2000);
        e.target.reset();
    }

    render() {
        const { error } = this.state;
        return (
            <div className="container">
                <form className="contactus" onSubmit={this.handleSubmit}>
                    <h2 className="h2About">SIGN UP</h2>

                    <div className="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-user"></i>
                        </div>
                        <input type="text" className="form-control" name="firstname" placeholder="First Name" onChange={this.inputChange} />
                    </div>

                    <div className="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-user"></i>
                        </div>
                        <input type="text" class="input-fieldcontactus" name="lastname" placeholder="Last Name" onChange={this.inputChange} />
                    </div>

                    <div className="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-user"></i>
                        </div>
                        <input type="text" class="input-fieldcontactus" name="username" placeholder="Username" onChange={this.inputChange} />
                    </div>

                    <div className="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-at"></i>
                        </div>
                        <input type="email" class="input-fieldcontactus" name="email" placeholder="email" onChange={this.inputChange} />
                    </div>

                    <div className="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-phone"></i>
                        </div>
                        <input type="tel" class="input-fieldcontactus" name="phone" placeholder="99-999-999"
                            pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}" required onChange={this.inputChange} />
                    </div>

                    <div className="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-key"></i>
                        </div>
                        <input type="password" class="input-fieldcontactus" name="password" placeholder="password" onChange={this.inputChange} />
                    </div>

                    <div className="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-key"></i>
                        </div>
                        <input type="password" class="input-fieldcontactus" name="rpassword" placeholder="confirm password" onChange={this.inputChange} />
                    </div>

                    <button type="submit" class="btncontactus">Submit</button>
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

export default Registration;