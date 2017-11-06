import React, {Component} from "react"
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
import processError from "../js/processError.js";
import Inputbox from "../component/Inputbox";
import Updateprofile from "../component/Updateprofile";
import reqwest from "reqwest";
class Setting extends Component {
    constructor(props) {
        super(props);
		this.state = {
            //store user id
            userId: null,
            //store user name
            userName: "",
            //store user token
            userToken: null,
            //store user data
            userData: [],
            //indicate update result
            update: null,
            //store user about info
            userAbout: ""
		};
	}
    //get user data if user logged in
    componentWillMount() {
        if (localStorage.getItem("id")) {
            let id = localStorage.getItem("id");
            let name = localStorage.getItem("name");
            let token = localStorage.getItem("token");
            this.setState({userId: parseInt(id), userName: name, userToken: token});
            reqwest({
                url: "/setting/read?id=" + id,
                method: "GET",
                success: function(result) {
                    result = JSON.parse(result);
                    this.setState({userData: result, userAbout: result.user_about});
                }.bind(this),
                error: function (err) {
                    processError(err);
                }
            });
        } else {
            window.location.replace("/error/page403");
        }
    }
    //save new profile
    saveProfile(finalUrl) {
        //save user image
        let formData = new FormData();
        formData.append('file', finalUrl, this.state.userData.user_id + ".jpg");
        formData.append("user", this.state.userId);
        formData.append("token", this.state.userToken);
        reqwest({
            url: "/upload/user",
            method: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function(result) {
                this.setState({update: "Avatar Successfully updated !"});
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    //save new user name
    saveName() {
        let userName = this.refs.userName.state.content.trim();
        if (userName != this.state.userName) {
			//update only when name is not empty
			if (userName.length > 0) {
                reqwest({
                    url: "/setting/name",
                    type: "json",
                    contentType: "application/json",
                    method: "POST",
                    data: JSON.stringify({
                        "token": this.state.userToken,
                        "user": this.state.userId,
                        "name": userName
                    }),
					success: function(result) {
                        localStorage.setItem("name", userName);
                        this.setState({userName: userName, update: "Name Successfully updated !"});
					}.bind(this),
					error: function (err) {
                        processError(err);
                    }
                });
            } else {
                //roll back name
				this.refs.userName.setState({content: this.state.userName});
				//show error
				this.setState({update: "Name can't be empty!"});
            }
        }
    }
    //save user about
    saveAbout() {
        let userAbout = this.refs.userAbout.state.content.trim();
        if (userAbout != this.state.userAbout) {
			reqwest({
                url: "/setting/about",
                type: "json",
                contentType: "application/json",
                method: "POST",
                data: JSON.stringify({
                    "token": this.state.userToken,
                    "user": this.state.userId,
                    "about": userAbout
                }),
                success: function(result) {
                    if (!userAbout) {
                        userAbout = "";
                    }
                    this.setState({userAbout: userAbout, update: "Mood Successfully updated !"});
                }.bind(this),
                error: function (err) {
                    processError(err);
                }
            });
        }
    }
    render() {
        //avatar change box
        let profile;
        if (this.state.userData.user_id) {
            profile = <Updateprofile alt="User Profile" src={"/img/user/" + this.state.userData.user_id + ".jpg"} width="200" saveProfile={this.saveProfile.bind(this)} indicate="Update Avatar" fontFamily="'Rubik', sans-serif" />
        }
        //about input box
        let about;
        if (this.state.userAbout) {
            about = <Inputbox ref="userAbout" key="about1" content={this.state.userAbout} max="30" width="250px" fontFamily="'Rubik', sans-serif" />
        } else {
            about = <Inputbox ref="userAbout" key="about2" content={""} max="30" width="250px" fontFamily="'Rubik', sans-serif" />
        }
        return (
            <div id="react-root">
                <Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
                <main id="main">
                    <h3>Update your profile:</h3>
                    <h6>{this.state.update}</h6>
                    <section id="main-contain">
                        {profile}
                        <div className="main-contain-holder">
                            <Inputbox ref="userName" content={this.state.userName} max="10" width="250px" fontFamily="'Rubik', sans-serif" />
                            <input id="main-contain-holder-name" className="main-contain-holder-button" type="button" value="Update Name" onClick={this.saveName.bind(this)} />
                            {about}
                            <input className="main-contain-holder-button" type="button" value="Update Mood" onClick={this.saveAbout.bind(this)} />
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<Setting />, document.getElementById("root"));