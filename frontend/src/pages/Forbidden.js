import React, { Component } from "react"
import { connect } from 'react-redux';
import { readAccountData } from '../redux/actions/account';
import Googlelogin from '../components/Googlelogin';
import Facebooklogin from '../components/Facebooklogin';
import '../styles/error.css';

class Forbidden extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectHome: false
		};
	}
	gLogin(detail) {
		this.props.readAccountData('google', detail);
	}
	fLogin(response, token) {
		this.props.readAccountData('facebook', { response, token });
	}
  render() {
    return (
      <main id="main">
				<section id="main-section">
					<h2>Forbidden !</h2>
					<h4>
						We can't verify your privilege<br />
						Please login again!
					</h4>
					<Googlelogin 
						gLogin={ this.gLogin.bind(this) } 
						clientId="168098850234-fsq84pk4cae97mlj0k464joc21cgqjvv.apps.googleusercontent.com" 
						width="200px" 
					/>
					<Facebooklogin 
						fLogin={ this.fLogin.bind(this) } 
						clientId="447688265576125" 
						width="194px"
					/>
				</section>
				<img alt="Forbidden" src="/public/img/403.jpg" />
			</main>
    );
  }
}

export default connect(
  (state) => ({ account: state.account }),
  { readAccountData }
)(Forbidden);