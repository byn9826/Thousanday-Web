import React, {Component} from "react"
import ReactDOM from "react-dom";
import reqwest from "reqwest";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Inputbox from "../component/Inputbox";
import Updateprofile from "../component/Updateprofile";
import Urltoprofile from "../component/Urltoprofile";
import processError from "../js/processError.js";
class Signup extends Component {
    constructor(props) {
        super(props);
		this.state = {
            //store user id
            id: null,
            //store user platform
            platform: null,
            //store user name
            name: null,
            //store user avatar
            avatar: null,
            //store uploaded avatar
            newAvatar:null,
            //indicate accept term or not
            terms: false,
            //indicate error message
            error: null
		};
	}
    //get user data if user logged in
    componentWillMount() {
        if (localStorage.getItem("newId")) {
            let id = localStorage.getItem("newId");
            let name = localStorage.getItem("newName");
            let platform = localStorage.getItem("newPlatform");
            let avatar = localStorage.getItem("newAvatar");
            this.setState({id: id, name: name, platform: platform, avatar: avatar});
        } else {
            window.location.replace("/error/page403");
        }
    }
    //save new profile
    saveProfile(finalUrl) {
        this.setState({newAvatar: finalUrl});
    }
    //check term
    checkTerm() {
        this.setState({terms: !this.state.terms});
    }
    //click sign up
    signUp() {
        let name = this.refs.userName.state.content.trim();
        if (name == "") {
            //name can't be empty
            this.setState({error: "User Name can't be empty in step one."});
        } else if (!this.state.newAvatar && !this.refs.userAvatar.state.data) {
            //must have a profile image
            this.setState({error: "Please upload an avatar in step two."});    
        } else if (!this.state.terms) {
            //must check terms
            this.setState({error: "Please agree to our terms and privacy policy."});   
        } else {
            let avatar;
            //use uploaded profile file
            if (this.state.newAvatar) {
                avatar = this.state.newAvatar;
            } else {
                //not uploaded use facebook default image
                avatar = this.refs.userAvatar.state.data;
            }
            let fileData = new FormData();
            fileData.append("file", avatar, "0.jpg");
            fileData.append("name", name);
            fileData.append("id", this.state.id);
            fileData.append("platform", this.state.platform);
            fileData.append("method", "website");
            reqwest({
                url: "/upload/create",
                method: "POST",
                data: fileData,
                contentType: false,
                processData: false,
                success: function(result) {
                    result = JSON.parse(result);
                    localStorage.clear();
                    localStorage.setItem("id", result[0]);
                    localStorage.setItem("name", name);
                    localStorage.setItem("token", result[1]);
                    //login success, go to homepage
                    window.location.replace("/user/" + result[0]);
                }.bind(this),
                error: function (err) {
                    processError(err);
                }
            });
        }
    }
    render() {
        //original profile image
        let profile;
        if (this.state.platform === "facebook") {
            profile = <Urltoprofile ref="userAvatar" url={"http://graph.facebook.com/" + this.state.id + "/picture?type=square&w‌​idth=720&height=720"} />
        } else{
            profile = <Urltoprofile ref="userAvatar" url={this.state.avatar} />
        }
        return (
            <div id="react-root">
                <Header restrict={true} />
                <main id="main">
                    <h1>Create Account</h1>
                    <h4>Hello, {unescape(this.state.name)}. Let's start creating a new account for your !</h4>
                    <h4 className="main-title">Step 1: Set up your nickname</h4>
                    <Inputbox ref="userName" content={unescape(this.state.name)} max="10" width="30%" fontFamily="'Rubik', sans-serif" />
                    <h4 className="main-title">Step 2: Choose your avatar</h4>
                    <div className="main-profile">
                        <h5>Use your {this.state.platform} profile</h5>
                        {profile}
                    </div>
                    <div className="main-profile">
                        <h5>Or upload a new avatar</h5>
                        <Updateprofile width="200" saveProfile={this.saveProfile.bind(this)} format="image/jpg" />
                    </div>
                    <h4 className="main-title">Step 3: Agree to our Terms & Privacy Policy</h4>
                    <h5 id="main-terms"><a href="/terms" target="__blank">Terms & Privacy Policy @ Thousanday.com</a></h5>
                    <div id="main-check">
                        <input type="checkbox" checked={this.state.terms} onClick={this.checkTerm.bind(this)}/>
                        <h6>By signing up, you agree to our Terms & Privacy Policy.</h6>
                    </div>
                    <h4 className="main-title">Finally, confirm signup</h4>
                    <h6 id="main-error">{this.state.error}</h6>
                    <input id="main-confirm" type="button" value={(this.state.platform === "google")?"SIGN UP WITH GOOGLE":"SIGN UP WITH FACEBOOK"} onClick={this.signUp.bind(this)} />
                </main>
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<Signup />, document.getElementById("root"));