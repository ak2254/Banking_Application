import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Form from 'react-bootstrap/Form'


import button from 'react-bootstrap/Form'

import  {removeAcct} from '../actions'
import {connect} from "react-redux";



class DeleteAccount extends React.Component {
    state = { accountID: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.removeAcct(this.state._id);
        this.setState({ accountID: ''});
    };
    render() {
        return (
            <div>
                <div className="requirement">
                    <h3>Requirement </h3>
                    <h2>delete account</h2>


                </div>
                <div class="form-style">
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label > Enter Id</Form.Label>
                        <Form.Control  placeholder="Enter ID"  value={this.state._id}
                                       onChange={(e) => this.setState({ accountID: e.target.value })}/>

                    </Form.Group>



                    <input type="submit" style={{  textAlign:'center', padding: '7px 12px', background:'cadetblue', border:'1px solid cadetblue',color: '#fff', letterSpacing: '1px',fontSize:'10px', boxShadow: '0 2px 20px rgba(0,0,0, 0.4)',
                        textTransform: 'uppercase', textDecoration: 'none' }}  className="btn btn-success" value={ `Delete Account ` } />
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

        );
    }


}



export default connect(null, { removeAcct })(DeleteAccount);

