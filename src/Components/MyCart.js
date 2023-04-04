import React, { Component } from 'react'
import axios from "axios";
import CartUTable from "./CartUTable";

export default class MyCart extends Component {
    //initialize an object's state in a class
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
    componentDidMount() {
        //get request
        const id = localStorage.getItem('token');
        axios.get("http://localhost/php%20projects/homemade/getCommande.php?id=" + id).then(res => {

            console.log(res.data);
            console.log(res.data.id);
            this.setState({ data: res.data });
        });
    }
    render() {
        /* const renderData = this.state.data.map(data => {
             return (
                 <CartUTable data={data} key={data.id} refresh={this.componentDidMount} />
             )
         })*/
        return (
            <div class="container">
                <h2 className="h2About">All my commande</h2>
                <div class="d-flex justify-content-center row">
                    <div class="col-md-10">
                        {this.state.data.map((result) => {
                            return (
                                <div class="row p-2 bg-white border rounded">
                                    <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={`${process.env.PUBLIC_URL}/assets/images/` + this.props.data.image} /></div>
                                    <div class="col-md-6 mt-1">

                                        <h5 className="h5-cart"> <span class="dot"></span>Title:</h5>
                                        <h6 className="h6-cart">{result.title}</h6>

                                        <h5 className="h5-cart"> <span class="dot"></span>Discription:</h5>
                                        <h6 className="h6-cart">{result.disc}</h6>

                                        <h5 className="h5-prop">BY:</h5>
                                        <h6 className="h6-prop">{result.proprietor}</h6>
                                    </div>
                                    <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                        <div class="d-flex flex-row align-items-center">
                                            <h4 class="mr-1">{result.prix} DT</h4>
                                        </div>


                                        <div class="d-flex flex-column mt-4">
                                            <button class="btn btn-outline-info" type="button" ><i class="fas fa-cart-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        )
    }
}
