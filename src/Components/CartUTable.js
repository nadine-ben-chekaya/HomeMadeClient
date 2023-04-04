import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class CartUTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgBUY: "Add to wishlist",
            userid: undefined,
            productid: this.props.data.id,
            redirect: false
        }
    }
    deleteproduct = async => {
        let datacommande = {
            userid: localStorage.getItem('token'),
            productid: this.props.data.id,
            prix: this.props.data.prix,
            quantité: 1
        };
        console.log(datacommande)
        axios.post("http://localhost/php%20projects/homemade/commandeDelete.php?id=" + this.props.data.id)
            .then(response => {
                this.setState({ redirect: true })
                console.log(response.data);


            })
            .catch(err =>
                console.log(err)
            )
    }

    deleteConfirm = () => {
        console.log("deleteCommmande")
        confirmAlert({
            title: ' Add to wishlist',
            message: 'are you sure to buy product ' + this.props.data.title + " ? ",
            buttons: [
                {
                    label: "YES",
                    onClick: this.deleteproduct
                },

                {
                    label: "NO",
                    onClick: () => { }
                }
            ]
        })
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/CartView' />
        }
        return (

            <tr>
                <td>{this.props.data.userid}</td>
                <td>{this.props.data.productid}</td>
                <td>{this.props.data.prix}</td>
                <td>{this.props.data.quantité}</td>
                <td><button onClick={this.deleteConfirm} class="btn btn-outline-danger"><i class="far fa-trash-alt"></i> </button></td>


            </tr>


        )
    }
}
