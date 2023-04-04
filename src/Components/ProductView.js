import React, { Component } from 'react'
import axios from "axios";
import DataTable from "./DataTable";


export default class Productview extends Component {
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
        axios.get("http://localhost/php%20projects/homemade/productview.php").then(res => {

            console.log(res.data);
            console.log(res.data.id);
            this.setState({ data: res.data });
        });
    }

    render() {
        const renderData = this.state.data.map(data => {
            return (
                <DataTable data={data} key={data.id} refresh={this.componentDidMount} />
            )
        })
        return (
            <div className="middle-content">
                <div className="container">
                    <h2 className="h2About">Manage Product</h2>
                    <div className="container mb-5 mt-5 text-left">

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Proprietor</th>
                                    <th>Type</th>
                                    <th>Discription</th>
                                    <th>prix</th>
                                    <th>Quantité</th>
                                    <th>Image</th>
                                    <th>Edit</th>
                                    <th>Delete</th>


                                </tr>
                            </thead>
                            <tbody>
                                {renderData}
                            </tbody>
                        </table>




                    </div>
                </div>
            </div>

        )
    };
}
