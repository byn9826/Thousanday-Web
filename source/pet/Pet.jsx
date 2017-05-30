import React, {Component} from "react";
import ReactDOM from "react-dom";
import reqwest from "reqwest";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Waterfall from "../component/Waterfall";
import noGetGender from "../js/noGetGender.js";
import noGetType from "../js/noGetType.js";
import noGetNature from "../js/noGetNature.js";
import processGallery from "../js/processGallery.js";
import processError from "../js/processError.js";
class Pet extends Component {
	constructor(props) {
        super(props);
		this.state = {
            //store user id
            userId: null,
            //store user name
            userName: null,
            //store user token
            userToken: null,
            //store data for one pet
            petData: [],
            //store data for pet's family
            familyData: []
		};
	}
    //get user data if user logged in
    componentWillMount() {
        if (sessionStorage.getItem("id")) {
            let id = sessionStorage.getItem("id");
            let name = sessionStorage.getItem("name");
            let token = sessionStorage.getItem("token");
            this.setState({userId: parseInt(id), userName: name, userToken: token});
        }
    }
    //load 20 most recent images
    componentDidMount() {
        reqwest({
            url: "/pet/read?id=" + window.location.pathname.split("/").pop(),
            method: "GET",
            success: function(result) {
                result = JSON.parse(result);
                console.log(result);
                this.setState({petData: result[0], familyData: result[1]});
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    watchPet() {

    }
	render() {
        //watch pet button
        let watchPet;
        let families = this.state.familyData.map((family, index) =>
            <div key={"petfamily" + index} className="main-owner">
                <a href={"/user/" + family.user_id}>
                    <img src = {"/img/user/" + family.user_id + ".jpg"} />
                    <h5>{family.user_name}</h5>
                </a>
            </div>
        );
		return (
			<div  id="react-root">
                <Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
                <main id="main">
                    <img id="main-profile" alt={this.state.petData.pet_name} src={"/img/pet/" + this.state.petData.pet_id + "/0.png"} />
                    <div id="main-name">
                        <h1>{this.state.petData.pet_name}</h1>
                        <h4>{noGetGender(this.state.petData.pet_gender)}</h4>
                    </div>
                    <h5 id="main-watch" onClick={this.watchPet.bind(this)}>{watchPet}</h5>
                    <h5 id="main-nature">Nature: {noGetNature(this.state.petData.pet_nature)}</h5>
                    <h5 className="main-title">Type: {noGetType(this.state.petData.pet_type)}</h5>
                    <h5 className="main-title">Reg in hub: {this.state.petData.pet_reg?new Date(this.state.petData.pet_reg).toISOString().substring(0, 10):null}</h5>    
                    <div id="main-family">
                        <img alt="skill-icon" src="/img/icon/glyphicons-hub.png" />
                        <h5>Family</h5>
                    </div>
                    {families}
                </main>
                <aside id="aside">
                </aside>
                <Footer />
			</div>
		);
	}
}

ReactDOM.render(<Pet />, document.getElementById("root"));