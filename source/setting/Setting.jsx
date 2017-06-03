import React, {Component} from "react"
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
import processError from "../js/processError.js";
import Updateprofile from "../component/Updateprofile";
import reqwest from "reqwest";
class Setting extends Component {
    constructor(props) {
        super(props);
		this.state = {
            //store user id
            userId: null,
            //store user name
            userName: null,
            //store user token
            userToken: null,
            //store user data
            userData: [],
            //indicate update result
            update: null
		};
	}
    //get user data if user logged in
    componentWillMount() {
        if (sessionStorage.getItem("id")) {
            let id = sessionStorage.getItem("id");
            let name = sessionStorage.getItem("name");
            let token = sessionStorage.getItem("token");
            this.setState({userId: parseInt(id), userName: name, userToken: token});
        } else {
            window.location.replace("/error/page403");
        }
    }
    //load user data
    componentDidMount() {
        reqwest({
            url: "/setting/read?id=" + this.state.userId,
            method: "GET",
            success: function(result) {
                result = JSON.parse(result);
                this.setState({userData: result});
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    //save new profile
    saveProfile(finalUrl) {
        //save user image
        console.log(finalUrl);
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
                if (result == 1) {
                    this.setState({update: "Update Success !"});
                }
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    render() {
        let profile;
        if (this.state.userData.user_id) {
            profile = <Updateprofile alt="User Profile" src={"/img/user/" + this.state.userData.user_id + ".jpg"} width="200" saveProfile={this.saveProfile.bind(this)} indicate="Update Avatar" fontFamily="'Rubik', sans-serif" />
        }
        return (
            <div id="react-root">
                <Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
                <main id="main">
                    <h3>Update your profile:</h3>
                    <h6>{this.state.update}</h6>
                    <section id="main-contain">
                        {profile}
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<Setting />, document.getElementById("root"));