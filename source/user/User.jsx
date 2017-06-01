import React, {Component} from "react"
import ReactDOM from "react-dom";
import reqwest from "reqwest";
import Header from "../general/Header";
import Footer from "../general/Footer";
import noGetGender from "../js/noGetGender.js";
import noGetType from "../js/noGetType.js";
import processGallery from "../js/processGallery.js";
import processError from "../js/processError.js";
class User extends Component {
	constructor(props) {
        super(props);
		this.state = {
			//store user id
            userId: null,
            //store user name
            userName: null,
            //store user token
            userToken: null,
			//indicate if it is user's homepage
			userHome: false,
			//store user data
			userData: [],
			//store relative data
			relativeData: [],
			//store pets list
			petsData: []
		};
	}
	 //get user data if user logged in
    componentWillMount() {
        if (sessionStorage.getItem("id")) {
            let id = sessionStorage.getItem("id");
            let name = sessionStorage.getItem("name");
            let token = sessionStorage.getItem("token");
			id = parseInt(id);
			let user = window.location.pathname.split("/").pop();
			user = parseInt(user);
			let home = (id === user)?true:false;
            this.setState({userId: id, userName: name, userToken: token, userHome: home});
        }
    }
	//load user data
    componentDidMount() {
        reqwest({
            url: "/user/read?id=" + window.location.pathname.split("/").pop(),
            method: "GET",
            success: function(result) {
				console.log(result);
                result = JSON.parse(result);
				let user = window.location.pathname.split("/").pop();
				let relatives = [], i;
				if (result[1] !== 0) {
					for (i = 0; i < result[1].length; i++) {
						if (result[1][i].relative_id) {
							if (result[1][i].relative_id === user) {
								relatives.push(result[1][i].owner_id);
							} else {
								relatives.push(result[1][i].relative_id);
							}
						}
					}
				}
				relatives = [...new Set(relatives)];
				this.setState({userData: result[0], relativeData: relatives, petsData: result[1]});
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
	render() {
		//relative box
		let relatives = this.state.relativeData.map((relative, index) =>
			<a href={"/user/" + relative}  key={"userRelative" + index}>
				<img src={"/img/user/" + relative + ".jpg"} />
			</a>
        );
		//pets list
		let pets = this.state.petsData.map((pet, index) =>
			<div key={"userPet" + index} className="aside-pet">
				<img alt={pet.pet_name} src={"/img/pet/" + pet.pet_id + "/0.png"} />
				<h5>{pet.pet_name}</h5>
				<div className="aside-pet-info">
					<h6>{noGetGender(pet.pet_gender)}</h6>
					<h6>{noGetType(pet.pet_type)}</h6>
				</div>
			</div>
		);
		return (
			<div id="react-root">
				<Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
				<main id="main">
					<img id="main-profile" alt={this.state.userData.user_name} src={"/img/user/" + this.state.userData.user_id + ".jpg"} />
					<h1 className="main-name">{this.state.userData.user_name}</h1>
                	<h5 className="main-name">{this.state.userData.user_about}</h5>
					<h5 id="main-relative">Relatives:</h5>
					<div id="main-family">
						{relatives}
					</div>
				</main>
				<aside id="aside">
					<div className="aside-header">
						<img alt="pets hub" src="/img/icon/glyphicons-hub.png" />
						<h4>Pets in hub</h4>   
					</div>
					{pets}
					<div className="aside-header">
						<img alt="pets moment" src="/img/icon/glyphicons-moment.png" />
						<h4>Moments</h4>
					</div>
				</aside>
                <Footer />
			</div>
		);
	}
}
ReactDOM.render(<User />, document.getElementById("root"));