import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
export default class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    deleteproduct = async => {
        axios.delete("http://localhost/php%20projects/homemade/productDelete.php?id=" + this.props.data.id)
            .then(response => {
                this.setState({ redirect: true })
                console.log(response.data.success)


            })
            .catch(err =>
                console.log(err)
            )
    }

    deleteConfirm = () => {
        console.log("deleteconfirm")
        confirmAlert({
            title: 'Delete Product',
            message: 'are you sure to delete product ' + this.props.data.title + " ? ",
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
            return <Redirect to='/productView' />
        }
        return (

            <tr>


                <td>{this.props.data.id}</td>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.proprietor}</td>
                <td>{this.props.data.type}</td>
                <td>{this.props.data.disc}</td>
                <td>{this.props.data.prix}</td>
                <td>{this.props.data.quantité}</td>
                <td> <img src={`${process.env.PUBLIC_URL}/assets/images/` + this.props.data.image} width="100" height="50" /></td>

                <td><Link to={"/productEdit/" + this.props.data.id} class="btn btn-outline-primary"><i class="far fa-edit"></i> </Link></td>

                <td><button onClick={this.deleteConfirm} class="btn btn-outline-danger"><i class="far fa-trash-alt"></i> </button></td>


            </tr>


        )
    }
}
