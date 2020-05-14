import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getAccountsByID} from '../reducers/accountsreducer'
import {removeAcct} from "../actions";
import Table from "react-bootstrap/Table";

class account extends React.Component {
    state = {
        acct: []
    };
    componentDidMount() {
        this.getData();
    }
    getData() {
        let setstate = (this.props.match.params.id)- 1;
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/accounts')
            .then(response => {
                this.setState({ acct: response.data[setstate] });
            });
    }

    renderList() {
        let trans = this.props.transactions;
        let accttrans = [];
        trans.forEach(transaction => {
            if (transaction.accountId === this.props.match.params.id) {
                accttrans.push(transaction)
            }
        });
        return accttrans.map(char => {
            return (
                <tbody>
                <tr style={{ backgroundColor: 'white', fontWeight:'bold'}}  >
                    <td style={{ backgroundColor: '#301592', fontWeight:'bold', color: 'white'}}>{char._id}</td>
                    <td> {char.accountId}</td>
                    <td> {char.type}</td>
                    <td> {char.amount}</td>
                    <td> {char.name}</td>
                </tr>
                </tbody>
            );
        })
    }


    render(){
        const trans= this.renderList();

        return(




            <div>
                <h1 style={{ textAlign: 'center', marginTop:'40px' , color: '#301592', fontWeight:'bold'}} > This is the Acount's full detail</h1>
                <h4 style={{ textAlign: 'center', marginTop:'40px' , color: '#301592', fontWeight:'bold'}}> ID: {this.props.match.params.id}</h4>
                <h5 style={{ textAlign: 'center', marginTop:'40px' , color: '#301592', fontWeight:'bold'}}> Name: {this.state.acct.name} </h5>
                <h1 style={{ textAlign: 'center', margin:'40px' , color: '#301592', fontWeight:'bold'}} > List of All Transactions</h1>

                <Table style={{ margin:'10'}}  striped bordered hover  >

                    <thead >
                    <tr style={{ backgroundColor: '#301592', fontWeight:'bold', color: 'white'}} >
                        <td >ID</td>
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

    }








}
const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
        transactions: state.transactions.transactions

    };
};
export default connect(mapStateToProps)(account);
