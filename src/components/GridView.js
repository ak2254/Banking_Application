import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../css/gridview.css';

import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Container'
import  {removeAcct} from '../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class GirdView extends React.Component {
  state = { currentPage: '/' }

  isActiveTab(tabName) {
    return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
  }
  onTabClick(event, tabName) {

    this.setState({ currentPage: tabName })
  }

  renderList(){
    let accts  = this.props.accounts;
    return accts.map(char => {
      return (
          <Card  style={{ marginBottom: '20px' ,marginTop: '20px', boxShadow: '0 2px 15px rgba(0,0,0, 0.2)', borderRadius: '10px'}}>
            <Card.Body>
              <Card.Title style={{marginBottom: '30px', color: 'cadetblue',fontSize: '15px',
                lineHeight: '15px',
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textAlign: 'center'}}> Account Holder: { char.name }</Card.Title>
              <Card.Subtitle style={{textAlign:'center'}} className="mb-2 text-muted"> ID: {char._id }</Card.Subtitle>
              <Card.Text style={{color: 'black',
                fontSize: '12px',
                lineHeight: '17px',
                letterSpacing: '1px',
                textAlign: 'center'}}>
                Balance: ${char.balance }
              </Card.Text>

              <div class='viewAcct'style={{alignContent:'center', display:'flex', justifyContent:'center'}}>

              <Link className={this.isActiveTab('/~ak2254/banking/build/account/:id')} to={"/~ak2254/banking/build/account/"+ char._id} onClick={event => this.onTabClick(event, '/~ak2254/banking/build/account/:id')}>
                <button class="view" style={{  textAlign:'center', padding: '7px 12px', background:'cadetblue', border:'1px solid cadetblue',color: '#fff', letterSpacing: '1px',fontSize:'10px', boxShadow: '0 2px 20px rgba(0,0,0, 0.4)',
                  textTransform: 'uppercase' }} type="button" >View Account</button>
              </Link>
              </div>
              <div style={{alignContent:'center', display:'flex', justifyContent:'center'}}>
              <button type='button'
                      onClick={() => { this.props.removeAcct(char._id) }}
                      className='btn btn-danger'
                      style={{  textAlign:'center',padding: '7px 12px', color: '#fff', fontSize:'10px', letterSpacing: '1px', textTransform: 'uppercase', background:'grey' ,borderColor:'grey',boxShadow: '0 2px 20px rgba(0,0,0, 0.4)'  }}>
                Delete
              </button>
              </div>

            </Card.Body>
          </Card>
      );
    })

  }
  render(){
    const accts= this.renderList();
    return(

        <div>
      <header className="hero-1">
        <div className="banner-1">
          <h1 className="banner-title">PROJECT</h1>
          <h1 className="banner-title2" >BANKING APPLICATION</h1>


        </div>
      </header>
          <section class="discription">
            <div class="header-discription">

            <h2>Description</h2>



              <p>This project requires you to make a basic banking application that follows these requirements. It should
                have a list of accounts and their current balance (stored in Redux). A list of transactions for all
                modifications made to the balance of each account (also stored in redux). Then ways to deposit and
                withdraw money, as well as add and delete existing accounts. </p>
            </div>

            <div class ='details'>
              <h3>Requirements</h3>
              <div class ='requinment'>
                <p>1. Display a list of all accounts and their current balance on the home page. </p>

              </div>
              <div className='requinment'>
                <p>2. Keep a record of all transactions for each account. These should be displayed on a transactions
                  page.</p>

              </div>
              <div className='requinment'>
                <p>3. An account page that should:</p>

              </div>
              <div className='requinment'>
                <p>4. Add Account Page </p>

              </div>
              <div className='requinment' style={{marginBottom:'5rem'}}>
                <p>5. Edit Account Page</p>

              </div>

            </div>


          </section>






<section class="gridTras">

      <p class="trasaction-tittle">Accounts overview</p>
      <Container style={{display: 'flex', justifyContent:'center', alignContent:'center'}}>
        <Row  style={{
          width: '90vw',
          margin: '0 auto',
          maxWidth: '1170px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gridColumnGap: '1.5rem',
          gridRowGap: '2rem'}}>
          {accts}
        </Row>
      </Container>
</section>

          <div className="contact-us" id="contact">
            <div className="inner">
              <h1> THANK YOU FOR VISITING THE SITE!</h1>
              <h3> PLEASE CONTACT US FOR MORE INFORMATION!</h3>
              <a style={{  textAlign:'center', padding: '7px 12px', background:'cadetblue', border:'1px solid cadetblue',color: '#fff', letterSpacing: '1px',fontSize:'10px', boxShadow: '0 2px 20px rgba(0,0,0, 0.4)',
                textTransform: 'uppercase', textDecoration: 'none' }} href="mailto:ak2254@njit.edu" class="banner-btn"> contact us</a>

            </div>
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




      const mapStateToProps = state => {
        return {
          accounts: state.accounts.accounts,

        };



  };




export default connect(mapStateToProps, {removeAcct})(GirdView);



