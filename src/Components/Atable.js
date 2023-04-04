<div className="middle-content">
    <div className="container">
        <h2 className="h2About">Manage Product</h2>
        <div className="container mb-5 mt-5 text-left">

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>userid</th>
                        <th>productid</th>
                        <th>prix</th>
                        <th>Quantité</th>
                        <th>Delete</th>


                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>




        </div>
    </div>
</div>