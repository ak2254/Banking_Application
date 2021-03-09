import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../css/addacct.css';
import Form from 'react-bootstrap/Form'


import button from 'react-bootstrap/Form'

import  {addAccount} from '../actions'
import {connect} from "react-redux";

class AddAccount extends React.Component {
    state = { name: '', balance: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.addAccount(this.state.name, this.state.balance);
        this.setState({ name: '', balance: '' });
    }

    render() {
        return (
            <div>

                    <div className="requirement">
                        <h3>Requirement 4</h3>
                        <h2>Add New Account</h2>


                    </div>
            <div class="form-style">

                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label class='p-style'>Name</Form.Label>
                        <Form.Control  placeholder="Enter Name"  value={this.state.name}
                                       onChange={(e) => this.setState({ name: e.target.value })}/>

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label class='p-style'>Balance</Form.Label>
                        <Form.Control placeholder="Enter Balance" value={this.state.balance}
                                      onChange={(e) => this.setState({ balance: e.target.value })} />
                    </Form.Group>


                    <input type="submit" style={{  textAlign:'center', padding: '7px 12px', background:'cadetblue', border:'1px solid cadetblue',color: '#fff', letterSpacing: '1px',fontSize:'10px', boxShadow: '0 2px 20px rgba(0,0,0, 0.4)',
                        textTransform: 'uppercase', textDecoration: 'none' }} className="btn btn-success" value={ `Add Account ` } />
                </Form>
            </div>
                <footer>
                    <div className="fotter">
                        <div>Anjali Kumari</div>
                        <div>(732)-797-8419</div>
                        <div>ak2254@njit.edu</div>


                    </div>
                </footer>




            </div>

        )
    }

}
export default connect(null, { addAccount})(AddAccount);


