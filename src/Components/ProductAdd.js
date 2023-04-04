import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default class ProductAdd extends Component {
    //state = {}
    constructor(props) {
        super(props);

        this.state = {
            title: undefined,
            proprietor: undefined,
            type: "Decoration",
            disc: undefined,
            prix: undefined,
            quantité: undefined,
            image: '',
            error: ''
        };
    }
    inputChange = async e => {
        await this.setState({
            [e.target.name]: e.target.value
        })
    }

    inputChangeimage = async e => {
        await this.setState({
            image: e.target.files[0].name,
        })
        console.log(e.target.files[0].name);
    }

    handleSubmit = (e) => {

        const { title, proprietor, type, disc, prix, quantité, image } = this.state;
        if (title && proprietor && type && disc && prix && quantité && image) {
            let data = {
                title: this.state.title,
                proprietor: this.state.proprietor,
                type: this.state.type,
                disc: this.state.disc,
                prix: this.state.prix,
                quantité: this.state.quantité,
                image: this.state.image
            };
            console.log(this.state.image);
            axios.post("http://localhost/php%20projects/homemade/productAdd.php", data)
                .then(response => {
                    console.log(response.data);


                })
                .catch((error) => {
                    this.setState({
                        error: "erreur d'insertion ",

                    });
                });
        } else {
            this.setState({
                error: 'please fill in everything',
            });
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
        return (
            <div className="middle-content" >
                <div className="container">
                    <form className="contactus" onSubmit={this.handleSubmit}>
                        <h2 className="h2About">ADD Product</h2>
                        <div className="input-containercontactus">
                            <div className="iconcontactus">
                                <label>Title</label>
                            </div>
                            <input type="text" className="input-fieldcontactus" name="title" onChange={this.inputChange} />
                        </div>

                        <div className="input-containercontactus">
                            <div className="iconcontactus">
                                <label>Proprietor</label>
                            </div>
                            <input type="text" className="input-fieldcontactus" name="proprietor" onChange={this.inputChange} />
                        </div>

                        <div class="input-containercontactus">
                            <div className="iconcontactus">
                                <label for="exampleFormControlSelect1">Type</label>
                            </div>

                            <select class="input-fieldcontactus" id="exampleFormControlSelect1" name="type" onChange={this.inputChange}>

                                <option>Decoration</option>
                                <option>clothes</option>
                                <option>soin</option>

                            </select>
                        </div>

                        <div className="input-containercontactus">
                            <div className="iconcontactus">
                                <label>Description</label>
                            </div>
                            <input type="text" className="input-fieldcontactus" name="disc" onChange={this.inputChange} />
                        </div>

                        <div className="input-containercontactus">
                            <div className="iconcontactus">
                                <label>price</label>
                            </div>
                            <input type="text" className="input-fieldcontactus" name="prix" onChange={this.inputChange} />
                        </div>

                        <div className="input-containercontactus">
                            <div className="iconcontactus">
                                <label>Quantity</label>
                            </div>
                            <input type="text" className="input-fieldcontactus" name="quantité" onChange={this.inputChange} />
                        </div>

                        <div className="input-containercontactus">
                            <div className="iconcontactus">
                                <label>Image</label>
                            </div>
                            <input type="file" className="input-fieldcontactus" name="image" onChange={this.inputChangeimage} />

                        </div>

                        <button type="submit" className="btncontactus" >Add product</button>
                        {
                            error && (
                                <p className="error">{error}</p>
                            )
                        }

                    </form>

                </div>

            </div>
        )
    }
}
