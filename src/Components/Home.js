import React from 'react';
import Registration from "./Registration";
import Login from "./Login";
import axios from 'axios';


class Home extends React.Component {



    render() {
        let buttons;

        if (this.props.user && this.props.admin) {
            buttons = (
                <div>

                    <h2 className="h2About">Welcome {this.props.user.username}<i class="fas fa-crown"></i></h2>
                </div>



            )

        } else if (this.props.user && !this.props.admin) {
            buttons = (
                <h2 className="h2About">Welcome {this.props.user.username}<i class="fas fa-heart"></i></h2>



            )

        } else {
            buttons = (
                <h2 className="h2About">Welcome To <i class="fas fa-home"></i>HomeMade </h2>
            )
        }

        return (


            <div className="home">
                {buttons}

            </div>



        )
    };
}

export default Home;