import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getAccountsByID} from '../reducers/accountsreducer'
import {addAccount, addMoney, widhraw} from "../actions";
import Form from 'react-bootstrap/Form'
import Table from "react-bootstrap/Table";


class account extends React.Component {




    onAddMoneySubmit = (event) => {
        event.preventDefault();

        this.props.addMoney(this.props.match.params.id, this.state.amount);
        this.setState({id: this.props.match.params.id, amount: ''});
    }
    onwidMoneySubmit = (event) => {
        event.preventDefault();
        this.props.widhraw(this.props.match.params.id, this.state.amount);
        this.setState({id: this.props.match.params.id, amount: ''});
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
                <tr style={{backgroundColor: 'white', fontWeight: 'bold'}}>
                    <td style={{backgroundColor: '#301592', fontWeight: 'bold', color: 'white'}}>{char._id}</td>
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

        return acct.map(char => (


                <div>
                    <h2 style={{textAlign: 'center', marginTop: '40px', color: '#301592', fontWeight: 'bold'}}> This is the
                        Acount's full detail</h2>
                    <h3 style={{
                        textAlign: 'center',
                        marginTop: '40px',
                        color: '#301592',
                        fontWeight: 'bold'
                    }}> ID: {this.props.match.params.id}</h3>
                    <h3 style={{
                        textAlign: 'center',
                        marginTop: '40px',
                        color: '#301592',
                        fontWeight: 'bold'
                    }}> Name: {char.name} </h3>
                    <h3 style={{textAlign: 'center', marginTop: '40px', color: '#301592', fontWeight: 'bold'}}> Acount
                        Balance: {char.balance} </h3>
                    <h4 style={{textAlign: 'center', marginTop: '100px', color: '#301592', fontWeight: 'bold'}}> Deposit
                        Money</h4>

                    <Form onSubmit={this.onAddMoneySubmit}>
                        <Form.Group>
                            <h4 style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'left'}}> Enter Amount</h4>
                            <Form.Control placeholder="Enter the Amount to Deposit" id="balance"
                                          onChange={(e) => this.setState({amount: e.target.value})}/>


                        </Form.Group>


                        <input type="submit" style={{
                            float: 'center',
                            alignContent: 'center',
                            padding: '10px',
                            color: 'white',
                            borderRadius: '35px',
                            background: '#301592',
                            border: '3px solid white'
                        }} className="btn btn-success" value={`Add Deposit`}/>
                    </Form>



                    <h4 style={{textAlign: 'center', marginTop: '100px', color: '#301592', fontWeight: 'bold'}}> Withdraw
                        Money</h4>

                    <Form onSubmit={this.onwidMoneySubmit}>
                        <Form.Group>
                            <h4 style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'left'}}> Enter Amount</h4>
                            <Form.Control placeholder="Enter the Amount to Deposit" id="amount"
                                          onChange={(e) => this.setState({amount: e.target.value})}/>


                        </Form.Group>


                        <input type="submit" style={{
                            float: 'center',
                            alignContent: 'center',
                            padding: '10px',
                            color: 'white',
                            borderRadius: '35px',
                            background: '#301592',
                            border: '3px solid white'
                        }} className="btn btn-success" value={`Withdraw Money`}/>
                    </Form>

                    <h1 style={{textAlign: 'center', margin: '40px', color: '#301592', fontWeight: 'bold'}}> List of All
                        Transactions</h1>


                    <Table style={{margin: '10'}} striped bordered hover>

                        <thead>
                        <tr style={{backgroundColor: '#301592', fontWeight: 'bold', color: 'white'}}>
                            <td>ID</td>
                            <td>Account ID</td>
                            <td>Type of Transaction</td>
                            <td>Amount</td>
                            <td>Name</td>

                        </tr>
                        </thead>
                        {trans}
                    </Table>
                </div>
            )
        )


    }








}
const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
        transactions: state.transactions.transactions

    };
};
export default connect(mapStateToProps, { addMoney, widhraw})(account);

