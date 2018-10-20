import React, {Component} from "react"
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { 
	changeAccountData, deleteAccountToken, readAccountData, clearAccountSignup
} from '../redux/actions/account';
import { googleClientId, facebookClientId } from '../helpers/config';
import Googlelogin from '../components/Googlelogin';
import Facebooklogin from '../components/Facebooklogin';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDrop: false,
			redirectHome: false
		};
	}
	componentWillMount() {
		this.props.changeAccountData(
			[
				localStorage.getItem('id'), 
				localStorage.getItem('name'),
				localStorage.getItem('token')
			]
		);
	}
	componentDidUpdate() {
		if (this.state.redirectHome) {
			this.setState({ redirectHome: false });
		} else if (this.props.account.redirectSignup) {
			this.props.clearAccountSignup();
		}
	}
	gLogin(detail) {
		if (this.props.account.id === null) {
			this.props.readAccountData('google', detail);
		}
	}
	fLogin(response, token) {
		if (this.props.account.id === null) {
			this.props.readAccountData('facebook', { response, token });
		}
	}
	showDrop() {
		this.setState({ showDrop: !this.state.showDrop });
	}
	logOut() {
		if (FB) {
			FB.logout();
		}
		if (gapi) {
			let auth2 = gapi.auth2.getAuthInstance();
			auth2.signOut();
		}
		this.props.deleteAccountToken(
			this.props.account.id,
			this.props.account.token
		);
		this.setState({ redirectHome: true });
	}
  render() {
		if (this.state.redirectHome) {
      return <Redirect to={ '/' } />;
    } else if (this.props.account.redirectSignup) {
			return <Redirect to={ '/signup' } />;
		}
		const loginStyle = this.state.showDrop ? "header-drop" : "header-drop-hide";
		const userInfo = (
			<div id="header-login" onClick={ this.showDrop.bind(this) }>
				<h5>
					{ this.props.account.id === null ? 'Login' : this.props.account.name }
				</h5>
				<img src="/public/icon/glyphicons-dropdown.png" />
			</div>
		);
		let logoutBoard;
		if (this.state.showDrop && this.props.account.id !== null) {
			logoutBoard = (
				<section className="header-drop">
					<a href={ "/user/" + this.props.account.id }><h5>Home</h5></a>
					<a href={ "/watch" }><h5>Watch List</h5></a>
					<a href={ "/request" }><h5>Requests</h5></a>
					<a href={ "/setting" }><h5>Setting</h5></a>
					<h6 id="header-drop-logout" onClick={ this.logOut.bind(this) }>Log Out</h6>
				</section>
			);
		}
    return (
			<header id="header">
				<a href="/">
					<img id="header-logo" src="/public/logo.png" alt="logo" />
				</a>
				<h5 id="header-desc">Homepage for pets</h5>
				{ userInfo }
				<a className="header-navi" href="/explore">
					<h5>Explore</h5>
				</a>
				<a className="header-navi" href="/">
					<h5>Public</h5>
				</a>
				<section className={ loginStyle }>
					<h5 id="header-drop-notice">Click to sign in or sign up</h5>
					<Googlelogin 
						clientId={ googleClientId } 
						width="200px"
						gLogin={ this.gLogin.bind(this) } 
					/>
					<Facebooklogin 
						clientId={ facebookClientId }
						width="194px"
						fLogin={ this.fLogin.bind(this) } 
					/>
				</section>
				{ logoutBoard }
			</header>
		);
  }
}

export default connect(
  (state) => ({ account: state.account }),
  { changeAccountData, deleteAccountToken, readAccountData, clearAccountSignup }
)(Header);