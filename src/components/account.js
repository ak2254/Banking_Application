import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/account-page.css';
import '../css/tanslist.css';

import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getAccountsByID} from '../reducers/accountsreducer'
import {addAccount, addMoney, widhraw, addmoney2, widraw2, editAccount, removeAcct} from "../actions";
import Form from 'react-bootstrap/Form'
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";


class account extends React.Component {


    onAddMoneySubmit = (event) => {

        event.preventDefault();

        this.props.addMoney(this.props.match.params.id, this.state.amount);
        this.props.addmoney2(this.state.accountId, this.state.amount);
        this.setState({accountId:'' , amount: ''});

    }
    onwidMoneySubmit = (event) => {
        event.preventDefault();
        this.props.widhraw(this.props.match.params.id, this.state.amount);
        this.props.widraw2(this.state.accountId, this.state.amount);
        this.setState({accountId:'' , amount: ''});
    }
    onNameSubmit = (event) => {
        event.preventDefault();
        this.props.editAccount(this.state.NewAccountName, this.props.match.params.id);
        this.setState({ NewAccountName: '' });
    }


    renderList() {
        let trans = this.props.transactions;
        let accttrans = [];
        trans.forEach(transaction => {
            if (transaction.accountId == this.props.match.params.id) {
                accttrans.push(transaction)
            }
        });
        return accttrans.map(char => {
            return (
                <tbody>
                <tr  >
                    <td class="text-style">{char._id}</td>
                    <td> {char.accountId}</td>
                    <td> {char.type}</td>
                    <td> {char.amount}</td>
                    <td> {char.name}</td>
                </tr>
                </tbody>
            );
        })
    }


    render() {
        const trans = this.renderList();
        let a = this.props.accounts;
        let acct = [];
        a.forEach(account => {
            if (account._id == this.props.match.params.id) {
                acct.push(account)
            }
        });

        return(


                <div>
                    <div className="requirement">
                        <h3>Requirement 3</h3>
                        <h2>the Account's detail</h2>


                    </div>




                    <h2 class="account-detail"> ID: {this.props.match.params.id}</h2>
                    <h2 class="account-detail"> Name: {acct[0].name} </h2>
                    <h2 class="account-detail"> Acount
                        Balance: {acct[0].balance} </h2>
                    <Container>
                    <h3 class='money' > Deposit
                        Money</h3>
                        <div className="Form-edit">

                    <Form onSubmit={this.onAddMoneySubmit} style={{marginLeft: '20px', marginTop:'50px'}}>
                        <Form.Group>
                            <h4 class="id-name"> Enter ID</h4>
                            <input placeholder="Enter the Account ID" id="accountId"
                                          onChange={(e) => this.setState({accountId: e.target.value})}/>
                            <h4 class="id-name"> Enter Amount</h4>
                            <input placeholder="Enter the Amount" id="balance"
                                          onChange={(e) => this.setState({amount: e.target.value})}/>


                        </Form.Group>


                        <input type="submit" style={{  textAlign:'center', padding: '7px 12px', background:'cadetblue', border:'1px solid cadetblue',color: '#fff', letterSpacing: '1px',fontSize:'10px', boxShadow: '0 2px 20px rgba(0,0,0, 0.4)',
                            textTransform: 'uppercase', textDecoration: 'none' }} className="btn btn-success" value={`Add Deposit`}/>
                    </Form>
                        </div>
                    </Container>
                    <Container  >

                    <h3 class='money'> Withdraw
                        Money</h3>
                        <div class="Form-edit">

                    <Form onSubmit={this.onwidMoneySubmit} >
                        <Form.Group>
                            <h4 class="id-name"> Enter ID</h4>
                            <input placeholder="Enter the Acount ID" id="accountId"
                                          onChange={(e) => this.setState({accountId: e.target.value})}/>
                            <h4 class="id-name"> Enter Amount</h4>
                            <input placeholder="Enter the Amount" id="balance"
                                          onChange={(e) => this.setState({amount: e.target.value})}/>


                        </Form.Group>


                        <input type="submit" style={{  textAlign:'center', padding: '7px 12px', background:'cadetblue', border:'1px solid cadetblue',color: '#fff', letterSpacing: '1px',fontSize:'10px', boxShadow: '0 2px 20px rgba(0,0,0, 0.4)',
                            textTransform: 'uppercase', textDecoration: 'none' }} className="btn btn-success" value={`Withdraw Money`}/>
                    </Form>
                        </div>
                    </Container>
                    <Container  >

                        <h3 class='money'> Edit Account Name</h3>
                        <div className="Form-edit">
                        <Form onSubmit={this.onNameSubmit} >
                            <Form.Group>

                                <h4 class="id-name"> Enter Name</h4>
                                <input placeholder="Enter name" id="name"
                                       onChange={(e) => this.setState({NewAccountName: e.target.value})}/>


                            </Form.Group>


                            <input type="submit" style={{  textAlign:'center', padding: '7px 12px', background:'cadetblue', border:'1px solid cadetblue',color: '#fff', letterSpacing: '1px',fontSize:'10px', boxShadow: '0 2px 20px rgba(0,0,0, 0.4)',
                                textTransform: 'uppercase', textDecoration: 'none' }} className="btn btn-success" value={`Edit Name`}/>
                        </Form>
                        </div>
                    </Container>


                    <div className="delete-bt">
                        <button type='button'
                                onClick={() => {
                                    this.props.removeAcct(this.props.match.params.id)
                                }}
                                className='btn btn-danger'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    textAlign: 'center',
                                    padding: '7px 12px',
                                    color: '#fff',
                                    fontSize: '10px',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    background: 'grey',
                                    borderColor: 'grey',
                                    boxShadow: '0 2px 20px rgba(0,0,0, 0.4)',
                                    marginLeft: '45%',
                                    marginTop:'4rem'
                                }}>

                            Delete
                        </button>
                    </div>


                    <h2 class="trans-list"> List of All
                        Transactions</h2>


                    <Table style={{marginTop:'30px', marginBottom:'40px'}} striped bordered hover>

                        <thead>
                        <tr class="text-style">
                            <td >ID</td>
                            <td class="text-style">Account ID</td>
                            <td class="text-style">Type of Transaction</td>
                            <td class="text-style">Amount</td>
                            <td class="text-style">Name</td>

                        </tr>
                        </thead>
                        {trans}
                    </Table>
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
const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
        transactions: state.transactions.transactions

    };
};
export default connect(mapStateToProps, { addMoney, widraw2, addmoney2, editAccount,widhraw, removeAcct})(account);

