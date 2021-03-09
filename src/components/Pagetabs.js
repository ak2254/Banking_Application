import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import '../css/nav.css';

import { Link } from 'react-router-dom';

import { Nav,Navbar ,NavDropdown, } from 'react-bootstrap';


class Pagetabs extends React.Component {
    state = { currentPage: '/~ak2254/banking/build/' }

    isActiveTab(tabName) {
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }
    onTabClick(event, tabName) {

        this.setState({ currentPage: tabName })
    }

    render () {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand> <Link style={{color:'black !important'}} className={this.isActiveTab('/~ak2254/banking/build/')} to="/~ak2254/banking/build/" onClick={event => this.onTabClick(event, '/~ak2254/banking/build/')}>Banking App</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <Link className={this.isActiveTab('/~ak2254/banking/build/ListView')} to="/~ak2254/banking/build/ListView" onClick={event => this.onTabClick(event, '/~ak2254/banking/build/ListView')}>Transactions</Link>
                            <NavDropdown title="Add/Delete" id="basic-nav-dropdown">

                                <NavDropdown.Item> <Link className={this.isActiveTab('/~ak2254/banking/build/AddAccount')} to="/~ak2254/banking/build/AddAccount" onClick={event => this.onTabClick(event, "/~ak2254/banking/build/AddAccount")}>Add Account</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className={this.isActiveTab('/~ak2254/build/deleteAccount')} to="/~ak2254/banking/build/deleteAccount" onClick={event => this.onTabClick(event, '/~ak2254/banking/build/deleteAccount')}>Delete Account</Link></NavDropdown.Item>


                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
};
}

export default Pagetabs;
