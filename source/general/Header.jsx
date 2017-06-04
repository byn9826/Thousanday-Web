import React, {Component} from "react";
import reqwest from "reqwest";
import Googlelogin from '../component/Googlelogin';
import Facebooklogin from '../component/Facebooklogin';
import processError from "../js/processError.js";
class Header extends Component {
	constructor(props) {
        super(props);
		this.state = {
			//indicate active login function or not
			restrict: this.props.restrict || false,
			//indicate show loginbox or not
			showDrop: false,
		};
	}
	//user click google login button
	gLogin(user) {
		FB.logout();
		let auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut();
		//works only when user not login
		if (!this.props.userId) {
			//check google user token
			reqwest({
				url: "/account/google",
				type: "json",
				contentType: "application/json",
				method: "POST",
				data: JSON.stringify({"token": user.token, "platform": "website"}),
				//{"avatar": user.imageUrl},
				success: function(result) {
					localStorage.setItem("id", result[0]);
                    localStorage.setItem("name", result[1]);
                    localStorage.setItem("token", result[2]);
					//login success, go to homepage
					window.location.replace("/user/" + result[0]);
				},
				error: function (err) {
					processError(err);
				}
			});
		}
    }
	//user click facebook login button
	fLogin(response, token) {
		FB.logout();
		let auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut();
		//works only when user not login
		if (!this.props.userId) {
			//check google user token
			reqwest({
				url: "/account/facebook",
				type: "json",
				contentType: "application/json",
				method: "POST",
				data: JSON.stringify({"token": token, "platform": "website"}),
				success: function(result) {
					localStorage.setItem("id", result[0]);
                    localStorage.setItem("name", result[1]);
                    localStorage.setItem("token", result[2]);
					//login success, go to homepage
					window.location.replace("/user/" + result[0]);
				},
				error: function (err) {
					processError(err);
				}
			});
		}
	}
	logOut() {
		let token = localStorage.getItem("token");
		if (FB) {
			FB.logout();
		}
		if (gapi) {
			let auth2 = gapi.auth2.getAuthInstance();
			auth2.signOut();
		}
		localStorage.clear();
		reqwest({
			url: "/account/logout",
			type: "json",
			contentType: "application/json",
			method: "POST",
			data: JSON.stringify({"token": token, "id": this.props.userId}),
			success: function(result) {
				window.location.replace("/");
			},
			error: function (err) {
				processError(err);
			}
		});
	}
	//show and close drop box
	showDrop() {
		this.setState({showDrop: !this.state.showDrop});
	}
	render () {
		//Define login area, style, login dropdown, logout dropdown
		let user, loginStyle, login, logout;
		//show login box when login function is active
		if (!this.state.restrict) {
			user = (
				<div id="header-login" onClick={this.showDrop.bind(this)}>
					<h5>{this.props.userName}</h5>
					<img src="/img/icon/glyphicons-dropdown.png" />
				</div>
			)
			if (this.state.showDrop && !this.props.userId) {
				//show login dropdown for not logined user after click login button
				loginStyle = "header-drop";
			} else {
				//hide login box by default
				loginStyle = "header-drop-hide";
			}
			login = (
				<section className={loginStyle}>
					<h5 id="header-drop-notice">Click to sign in or sign up</h5>
					<Googlelogin gLogin={this.gLogin.bind(this)} clientId="168098850234-fsq84pk4cae97mlj0k464joc21cgqjvv.apps.googleusercontent.com" width="200px" />
					<Facebooklogin fLogin={this.fLogin.bind(this)} clientId="1894566737467263" width="194px" />
				</section>
			)
			if (this.state.showDrop && this.props.userId) {
				logout = (
					<section className="header-drop">
						<a href={"/user/" + this.props.userId}><h5>Home</h5></a>
						<a href={"/setting"}><h5>Setting</h5></a>
						<h6 id="header-drop-logout" onClick={this.logOut.bind(this)}>Log Out</h6>
					</section>
				)
			}
		}
		return (
			<header id="header">
				<a href="/">
					<img id="header-logo" src="/img/logo.png" alt="logo" />
				</a>
				<h5 id="header-desc">Homepage for pets</h5>
				{user}
				<a className="header-navi" href="/explore">
					<h5>Explore</h5>
				</a>
				<a className="header-navi" href="/">
					<h5>Public</h5>
				</a>
				{login}
				{logout}
			</header>
		);
	}
}
export default Header;