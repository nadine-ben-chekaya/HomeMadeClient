import React, { Component } from 'react'
import axios from "axios";
import ProductUTable from "./ProductUTable";
export default class Decoration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
    componentDidMount() {
        //get request
        axios.get("http://localhost/php%20projects/homemade/Decoration.php").then(res => {

            console.log(res.data);
            console.log(res.data.id);
            this.setState({ data: res.data });
        });
    }
    render() {
        const renderData = this.state.data.map(data => {
            return (
                <ProductUTable data={data} key={data.id} refresh={this.componentDidMount} />
            )
        })
        return (
            <div class="container">
                <h2 className="h2About">All Decoration Products</h2>
                <div class="d-flex justify-content-center row">
                    <div class="col-md-10">
                        {renderData}
                    </div>
                </div>
            </div>
        )
    };
}
