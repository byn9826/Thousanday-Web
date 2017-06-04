import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Googlelogin from "../component/Googlelogin";
import Facebooklogin from "../component/Facebooklogin";
import reqwest from "reqwest";
class NeedLogin extends Component {
	constructor(props) {
        super(props);
		this.state = {
            //store user id
            userId: null,
            //store user name
            userName: null,
		};
	}
	//get user data if user logged in
    componentWillMount() {
        if (localStorage.getItem("id")) {
            let id = localStorage.getItem("id");
            let name = localStorage.getItem("name");
            this.setState({userId: id, userName: name});
        }
    }
	//user click google login button
	gLogin(user) {
		if (FB) {
			FB.logout();
		}
		if (gapi) {
			let auth2 = gapi.auth2.getAuthInstance();
			auth2.signOut();
		}
		reqwest({
			url: "/account/google",
			type: "json",
			contentType: "application/json",
			method: "POST",
			data: JSON.stringify({"token": user.token, "platform": "website"}),
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
	//user click facebook login button
	fLogin(response, token) {
		if (FB) {
			FB.logout();
		}
		if (gapi) {
			let auth2 = gapi.auth2.getAuthInstance();
			auth2.signOut();
		}
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
	render() {
		return (
			<div id="react-root">
				<Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
				<main id="main">
					<section id="main-section">
						<h2>Forbidden !</h2>
						<h4>
							We can't verify your privilege ! <br />
							<a href="/">Please login again</a>
						</h4>
						<Googlelogin gLogin={this.gLogin.bind(this)} clientId="168098850234-fsq84pk4cae97mlj0k464joc21cgqjvv.apps.googleusercontent.com" width="200px" />
						<Facebooklogin fLogin={this.fLogin.bind(this)} clientId="1894566737467263" width="194px" />
					</section>
					<img alt="Forbidden" src="/img/icon/403.jpg" />
				</main>
				<Footer />
			</div>
		);
	}
}
//get defaultdata
ReactDOM.render(<NeedLogin />, document.getElementById("root"));