import React, {Component} from "react";
import ReactDOM from "react-dom";
import reqwest from "reqwest";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Waterfall from "../component/Waterfall";
import Googlelogin from "../component/Googlelogin";
import Facebooklogin from "../component/Facebooklogin";
import processGallery from "../js/processGallery.js";
import processError from "../js/processError.js";
class Public extends Component {
	constructor(props) {
        super(props);
		this.state = {
            //store images for public moments
            images: [],
            //store user id
            userId: null,
            //store user name
            userName: null,
            //store load images for how many times
            loader: 1,
            //indicate lock load more button or not
            locker: false
		};
	}
    //get user data if user logged in
    componentWillMount() {
        if (localStorage.getItem("id")) {
            let id = localStorage.getItem("id");
            let name = localStorage.getItem("name");
            this.setState({userId: id, userName: name});
        }
        reqwest({
            url: "/index/read?load=0",
            method: "GET",
            success: function(result) {
                result = JSON.parse(result);
                let images = processGallery(result);
                this.setState({images: images});
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    loadMore() {
        if (!this.state.locker) {
            reqwest({
                url: "/index/read?load=" + this.state.loader,
                method: "GET",
                success: function(result) {
                    result = JSON.parse(result);
                    let images = processGallery(result);
                    let combine = this.state.images.concat(images);
                    if (result.length === 20) {
                        this.setState({images: combine, loader: this.state.loader + 1});
                    } else {
                        this.setState({images: combine, loader: this.state.loader + 1, locker: true});
                    }
                }.bind(this),
                error: function (err) {
                    processError(err);
                }
            });
        }
    }
    //user click google login button
	gLogin(user) {
		//works only when user not login
		if (!this.state.userId) {
			//check google user token
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
    }
	//user click facebook login button
	fLogin(response, token) {
		if (!this.state.userId) {
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
	render() {
        //show login box if users didn't logged in
        let login;
        if (!this.state.userId) {
            login = (
                <section id="main-login">
                    <h6>Sign in or sign up</h6>
                    <h6>by your Facebook or Google account:</h6>
                    <Googlelogin gLogin={this.gLogin.bind(this)} clientId="168098850234-fsq84pk4cae97mlj0k464joc21cgqjvv.apps.googleusercontent.com" width="200px" />
					<Facebooklogin fLogin={this.fLogin.bind(this)} clientId="1894566737467263" width="194px" />
                </section>
            )
        } else {
            login = (
                <section id="main-welcome">
                    <a href={"/user/" + this.state.userId}>
                        <img alt="User Avatar" src={"/img/user/" + this.state.userId + ".jpg"} />
                    </a>
                    <h4>Welcome back! {this.state.userName}</h4>
                </section>
            )
        }
        //load more button
        let load;
        if (!this.state.locker) {
            load = (
                <h6 id="load-button" onClick={this.loadMore.bind(this)}>
                    Load more ...
                </h6>
            );
        }
		return (
			<div id="react-root">
                <Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
                <main id="main">
                    <h1>Meet with pets</h1>
                    <h2>around the world everyday!</h2>
                    {login}
                    <h6 id="main-app">Get the mobile app</h6>
                    <a href="https://play.google.com/store/apps/details?id=com.thousanday" target="_blank" >
                        <img className="main-mobile" alt="Google Play" src="/img/icon/google-play.png" />
                    </a>
                </main>
                <aside id="aside">
                    <Waterfall column="3" image={this.state.images} fontFamily="'Rubik', sans-serif" />
                    {load}
                </aside>
                <Footer />
			</div>
		);
	}
}

ReactDOM.render(<Public />, document.getElementById("root"));