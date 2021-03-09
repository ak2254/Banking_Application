import React from 'react';
import { connect } from 'react-redux';
import Card from "react-bootstrap/Card";
import '../css/tanslist.css';
import Table from "react-bootstrap/Table";

class ListView extends React.Component {
    renderList() {
        let trans = this.props.transactions;
        return trans.map(char => {
            return (
                <tbody>
                <tr class="font-style"  >
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
    render(){
        const trans= this.renderList();
        return(

            <div>
                <div class="requirement">
                    <h3>Requirement 1</h3>
                    <h2>List Of All Transactions</h2>





                </div>




<div class="table-outer">
                <Table style={{ margin:'10'}}  striped bordered hover  >

                    <thead >
                    <tr class= 'text-style'>
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
        transactions: state.transactions.transactions

    };
};

export default connect(mapStateToProps)(ListView);