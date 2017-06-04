import React, {Component} from "react"
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Inputbox from "../component/Inputbox";
import Updateprofile from "../component/Updateprofile";
import Pickgender from "../component/Pickgender";
import Droplist from "../component/Droplist";
import processError from "../js/processError.js";
import reqwest from "reqwest";
class Add extends Component {
    constructor(props) {
        super(props);
		this.state = {
            //store user id
            userId: null,
            //store user name
            userName: null,
            //store user token
            userToken: null,
            //indicate update info
            update: null,
            //store avatar image
            createAvatar: null,
            //store pet gender
            createGender: null,
            //store create type
            createType: null,
            //store create nature
            createNature: null,
		};
	}
    //get user data if user logged in
    componentWillMount() {
        if (localStorage.getItem("id")) {
            let id = localStorage.getItem("id");
            let name = localStorage.getItem("name");
            let token = localStorage.getItem("token");
            this.setState({userId: parseInt(id), userName: name, userToken: token});
        } else {
            window.location.replace("/error/page403");
        }
    }
    //choose avatar image
    chooseProfile(value) {
        this.setState({createAvatar: value});
    }
    //result of choose gender
    chooseGender(value) {
        this.setState({createGender: value});
    }
    //result of choose type
    chooseType(value) {
        this.setState({createType: value});
    }
    //result of choose nature
    chooseNature(value) {
        this.setState({createNature: value});
    }
    //create one pet
    createPet() {
        let petName = this.refs.newName.state.content.trim();
        let petGender = parseInt(this.state.createGender);
        let petType = parseInt(this.state.createType);
        let petNature = parseInt(this.state.createNature);
        let petAvatar = this.state.createAvatar;
        if (petName.length === 0) {
            this.setState({update: "Pet name can't be empty !"});
        } else if (petGender !== 0 && petGender !== 1) {
            this.setState({update: "Please choose pet's gender !"});
        } else if (petType !== 0 && petType !== 1 && petType !== 2 && petType !== 3 && petType !== 4) {
            this.setState({update: "Please choose pet's type !"});
        } else if (petNature !== 0 && petNature !== 1 && petNature !== 2 && petNature !== 3) {
            this.setState({update: "Please choose pet's nature !"});
        } else if (!petAvatar) {
            this.setState({update: "Please upload pet's avatar !"});
        } else {
            let fileData = new FormData();
            fileData.append("name", petName);
            fileData.append("gender", petGender);
            fileData.append("type", petType);
            fileData.append("nature", petNature);
            fileData.append("file", petAvatar, ".png");
            fileData.append("user", this.state.userId);
            fileData.append("token", this.state.userToken);
            reqwest({
                url: "/upload/add",
                method: "POST",
                data: fileData,
                contentType: false,
                processData: false,
                success: function(result) {
                    if (result == 1) {
                        window.location.replace("/user/" + this.state.userId);
                    }
                }.bind(this),
                error: function (err) {
                    processError(err);
                }
            });
        }
    }
    render() {
        return (
            <div id="react-root">
                <Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
                <main id="main">
                    <h3>Add new pet:</h3>
                    <h6>{this.state.update}</h6>
                    <section id="main-contain">
                        <Updateprofile alt="Pet Profile" format="image/png" width="200" saveProfile={this.chooseProfile.bind(this)} indicate="Upload Avatar" fontFamily="'Rubik', sans-serif" />
                        <div className="main-contain-holder">
                            <label htmlFor="new-name">His/Her name:</label>
                            <Inputbox id="new-name" ref="newName" content="" max="10" width="200px" fontFamily="'Rubik', sans-serif" />
                            <label className="main-contain-holder-lable">Choose gender:</label>
                            <h7>You can't change gender after creation</h7>
                            <Pickgender chooseGender={this.chooseGender.bind(this)} fontFamily="'Rubik', sans-serif" />
                            <label className="main-contain-holder-lable">Choose Type:</label>
                            <h7>You can't change type after creation</h7>
                            <Droplist id="new-type" width="80%" options={["dog", "cat", "bird", "fish", "other"]} title="His/Her type" showTitle="true" changeValue={this.chooseType.bind(this)} fontFamily="'Rubik', sans-serif" />
                            <label className="main-contain-holder-lable">Choose Nature:</label>
                            <h7>You can't change nature after creation</h7>
                            <Droplist id="new-nature" width="80%" options={["cute", "strong", "smart", "beauty"]} title="His/Her nature" showTitle="true" changeValue={this.chooseNature.bind(this)} fontFamily="'Rubik', sans-serif" />             
                        </div>
                        <h5 onClick={this.createPet.bind(this)} id="main-add">Add</h5>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<Add />, document.getElementById("root"));