import React, {Component} from "react"
import { connect } from 'react-redux';
import '../styles/signup.css';

class Signup extends Component {
	
	render() {
		return (
			<main id="main">
				<h1>Create Account</h1>
			</main>
		);
	}
}

export default connect(
  (state) => ({ account: state.account }),
  { 
		
	}
)(Signup);