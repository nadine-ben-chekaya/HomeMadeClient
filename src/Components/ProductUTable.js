import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class ProductUTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgBUY: "Add to wishlist",
            userid: undefined,
            productid: this.props.data.id,
            redirect: false
        }
    }
    AddCommande = async => {
        let datacommande = {
            userid: localStorage.getItem('token'),
            productid: this.props.data.id,
            prix: this.props.data.prix,
            quantité: 1
        };
        console.log(datacommande)
        axios.post("http://localhost/php%20projects/homemade/addCommand.php", datacommande)
            .then(response => {
                this.setState({
                    msgBUY: "Add more",
                    // redirect: true
                })
                console.log(response.data);


            })
            .catch(err =>
                console.log(err)
            )
    }

    BUYConfirm = () => {
        console.log("BUYconfirm")
        confirmAlert({
            title: ' Add to wishlist',
            message: 'are you sure to buy product ' + this.props.data.title + " ? ",
            buttons: [
                {
                    label: "YES",
                    onClick: this.AddCommande
                },

                {
                    label: "NO",
                    onClick: () => { }
                }
            ]
        })
    }
    render() {
        // const { redirect } = this.state;
        /// if (redirect) {
        //  return <Redirect to='/decoration' />
        // }

        return (

            <div class="row p-2 bg-white border rounded">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={`${process.env.PUBLIC_URL}/assets/images/` + this.props.data.image} /></div>
                <div class="col-md-6 mt-1">

                    <h5 className="h5-cart"> <span class="dot"></span>Title:</h5>
                    <h6 className="h6-cart">{this.props.data.title}</h6>

                    <h5 className="h5-cart"> <span class="dot"></span>Discription:</h5>
                    <h6 className="h6-cart">{this.props.data.disc}</h6>

                    <h5 className="h5-prop">BY:</h5>
                    <h6 className="h6-prop">{this.props.data.proprietor}</h6>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">{this.props.data.prix} DT</h4>
                    </div>


                    <div class="d-flex flex-column mt-4">
                        <button class="btn btn-outline-info" type="button" onClick={this.BUYConfirm}><i class="fas fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>


        )
    }
}
