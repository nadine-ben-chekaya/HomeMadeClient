import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom'

export default class ProductEdit extends Component {
    /*state = {
        data: []
    }*/
    state = {
        id: '',
        title: '',
        proprietor: '',
        type: '',
        disc: '',
        prix: '',
        quantité: '',
        image: '',
        redirect: false
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;
        axios.get("http://localhost/php%20projects/homemade/getProduct.php?id=" + id)
            .then(res => {
                console.log("el data elli f get f did mount");

                console.log(res.data);
                console.log(res.data.id);
                console.log(res.data.title);
                this.setState({
                    id: res.data.id,
                    title: res.data.title,
                    proprietor: res.data.proprietor,
                    type: res.data.type,
                    disc: res.data.disc,
                    prix: res.data.prix,
                    quantité: res.data.quantité,
                    image: res.data.image
                });
            });
    }

    inputChange = async e => {
        await this.setState({
            [e.target.name]: e.target.value
        })
        console.log("fel on change");
        console.log(e.target.value);
    }

    inputChangeimage = async e => {
        await this.setState({
            image: e.target.files[0].name,
        })
        console.log(e.target.files[0].name);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("el data li chtod5l lel edit.php");
        console.log(this.state);
        console.log("*****el data li chtod5l lel edit.php");
        /*const { title, proprietor, type, disc, prix, quantité, image } = this.state;
        let data = {
            title: this.state.title,
            proprietor: this.state.proprietor,
            type: this.state.type,
            disc: this.state.disc,
            prix: this.state.prix,
            quantité: this.state.quantité,
            image: "image"
        };*/
        axios.post("http://localhost/php%20projects/homemade/productEdit.php", this.state)
            .then(response => {
                console.log(response.data);
                this.setState({ redirect: true })



            })
            .catch((error) => {
                console.log(error.data);
            });


    }
    render() {
        const { id, title, proprietor, type, disc, prix, quantité, image } = this.state;
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/productView' />
        }
        return (
            <div>
                <div className="container">
                    <form className="contactus" onSubmit={this.handleSubmit}>
                        <h2 className="h2About">Edit Product</h2>

                        <div className="input-containercontactus">
                            <div className="iconcontactus">
                                <label>ID</label>
                            </div>
                            <input type="text" className="input-fieldcontactus" name="id" value={id} onChange={this.inputChange} disabled />
                        </div>

                        <div className="input-containercontactus">
                            <div className="iconcontactus">
                                <label>Title</label>
                            </div>
                            <input type="text" className="input-fieldcontactus" name="title" defaultValue={title} onChange={this.inputChange} />
                        </div>

                        <div className="input-containercontactus">
                            <div className="iconcontactus">
                                <label>Proprietor</label>
                            </div>
                            <input type="text" className="input-fieldcontactus" name="proprietor" defaultValue={proprietor} onChange={this.inputChange} />
                        </div>

                        <div class="input-containercontactus">
                            <div className="iconcontactus">
                                <label for="exampleFormControlSelect1">Type</label>
                            </div>
                            <select class="input-fieldcontactus" id="exampleFormControlSelect1" name="type" defaultValue={type} onChange={this.inputChange}>

                                <option>Decoration</option>
                                <option>Vetement</option>
                                <option>Soin</option>

                            </select>
                        </div>

                        <div className="input-containercontactusp">
                            <div className="iconcontactus">
                                <label>Description</label>
                            </div>
                            <input type="text" className="input-fieldcontactus" name="disc" defaultValue={disc} onChange={this.inputChange} />
                        </div>

                        <div className="input-containercontactus">
                            <div className="iconcontactus">
                                <label>price</label>
                            </div>
                            <input type="text" className="input-fieldcontactus" name="prix" defaultValue={prix} onChange={this.inputChange} />
                        </div>

                        <div className="input-containercontactus">
                            <div className="iconcontactus">
                                <label>Quantity</label>
                            </div>
                            <input type="text" className="input-fieldcontactus" name="quantité" defaultValue={quantité} onChange={this.inputChange} />
                        </div>

                        <div className="input-containercontactus">
                            <div className="iconcontactus">
                                <label>Image</label>
                            </div>
                            <input type="file" className="input-fieldcontactus" name="image" onChange={this.inputChangeimage} />
                        </div>

                        <button type="submit" className="btncontactus" >Edit product</button>

                    </form>

                </div>


            </div>
        )
    }
}
