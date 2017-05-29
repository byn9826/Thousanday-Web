import React, {Component} from "react";
import reqwest from "reqwest";
import Googlelogin from '../component/Googlelogin';
import Facebooklogin from '../component/Facebooklogin';
class Header extends Component {
	constructor(props) {
        super(props);
		this.state = {
			//indicate active login function or not
			restrict: this.props.restrict || false,
			//indicate show loginbox or not
			showDrop: false,
			//store username or login
            loginName: this.props.visitorName || "Login",
			//store user id
			loginId: this.props.visitorId || null,
		};
	}
	//user click google login button
	googleLogin(user) {
		FB.logout();
		let auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut();
		//works only when user not login
		if (this.state.loginName === "Login") {
			//check google user token
			reqwest({
				url: "account/google",
				type: "json",
				method: "POST",
				contentType: "application/json",
				body: {"token": user.token, "avatar": user.imageUrl},
				success: function(result) {
					console.log(result);
					/*
					switch (result) {
						case "0":
							console.log("DB error");
							break;
						case "1":
							console.log("Account not exist");
							window.location.replace("/signup/" + user.firstname);
							break;
						case "2":
							console.log("Can't validate Google account");
							break;
						case "3":
							console.log("Please logout first");
							break;
						default:
							if (this.state.loginName == "Login") {
								//get username, close dropdown box
								this.setState({loginName: result[1], loginId:result[0], newNum: result[2], showDrop: false});
								//pass user id back to parent
								this.props.loginSuccess(result[0]);
							}
					}*/
				}.bind(this),
				error: function (err) {
					console.log("Can't connect to the server");
				}
			});
		}
    }
	fLogin(response, token) {
		FB.logout();
		let auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut();
		//works only when user not login
		if (this.state.loginName === "Login") {
			//check google user token
			reqwest({
				url: "account/facebook",
				type: "json",
				contentType: "application/json",
				method: "POST",
				data: JSON.stringify({"token": token}),
				success: function(result) {
					console.log(result);
					/*
					switch (result) {
						case "0":
							console.log("DB error");
							break;
						case "1":
							console.log("Account not exist");
							//redirect to account create page
							window.location.replace("/signup/" + response.name);
							break;
						case "2":
							console.log("Can't validate Facebook account");
							break;
						case "3":
							console.log("Please logout first");
							break;
						default:
							if (this.state.loginName == "Login") {
								//get username, close dropdown box
								this.setState({loginName: result[1], loginId: result[0], newNum: result[2], showDrop: false});
								//pass user id back to parent
								this.props.loginSuccess(result[0]);
							}
					}
					*/
				}.bind(this),
				error: function (err) {
					console.log(err);
				}
			});
		}
	}
	logOut() {
		FB.logout();
		let auth2 = gapi.auth2.getAuthInstance();
		let self = this;
		auth2.signOut();
		reqwest({
			url: "/account/logOut",
			method: "POST",
			success: function(result) {
				switch (result) {
					case "0":
						self.setState({loginName: "Login", showDrop: false});
						self.props.logOut();
						break;
					case "1":
						console.log("Please try again");
						break;
				}
			},
			error: function (err) {
				console.log("Can't connect to the server");
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
					<h5>{this.state.loginName}</h5>
					<img src="img/icon/glyphicons-dropdown.png" />
				</div>
			)
			if (this.state.showDrop && this.state.loginName === "Login" ) {
				//show login dropdown for not logined user after click login button
				loginStyle = "header-drop";
			} else {
				//hide login box by default
				loginStyle = "header-drop-hide";
			}
			login = (
				<div className={loginStyle}>
					<h5 id="header-drop-notice">Click to sign in or sign up</h5>
					<Googlelogin gLogin={this.googleLogin.bind(this)} clientId="168098850234-fsq84pk4cae97mlj0k464joc21cgqjvv.apps.googleusercontent.com" width="200px" />
					<Facebooklogin clientId="1894566737467263" fLogin={this.fLogin.bind(this)} width="194px" />
				</div>
			)
			if (this.state.showDrop && this.state.loginName !== "Login") {
				logout = (
					<div className="header-drop">
						<a href={"/user/" + this.state.loginId}><h5>Home</h5></a>
						<input type="button" value="Log Out" onClick={this.logOut.bind(this)} />
					</div>
				)
			}
		}
		return (
			<header id="header">
				<a href="/">
					<img id="header-logo" src="img/logo.png" alt="logo" />
				</a>
				<h5 id="header-desc">Homepage for pets</h5>
				{user}
				<a className="header-navi" href="./explore">
					<h5>Explore</h5>
				</a>
				<a className="header-navi" href="./">
					<h5>Public</h5>
				</a>
				{login}
				{logout}
			</header>
		);
	}
}
export default Header;