import React, {Component} from "react"
import ReactDOM from "react-dom";
import reqwest from "reqwest";
import Header from "../general/Header";
import Footer from "../general/Footer";
import noGetGender from "../js/noGetGender.js";
import noGetType from "../js/noGetType.js";
import Waterfall from "../component/Waterfall";
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
			//indicate if it is user's homepage
			userHome: false,
			//store user data
			userData: [],
			//store relative data
			relativeData: [],
			//store pets list
			petsData: [],
			//store moment images
			momentData: [],
			//indicate load moment how many times
			loader: 1,
			//indicate could load more images or not
			locker: false,
			//store pet list
			belong: []
		};
	}
	//get user data if user logged in
    componentWillMount() {
        if (localStorage.getItem("id")) {
            let id = localStorage.getItem("id");
            let name = localStorage.getItem("name");
			id = parseInt(id);
			let user = window.location.pathname.split("/").pop();
			user = parseInt(user);
			let home = (id === user)?true:false;
            this.setState({userId: id, userName: name, userHome: home});
        }
		reqwest({
            url: "/user/read?id=" + window.location.pathname.split("/").pop(),
            method: "GET",
            success: function(result) {
                result = JSON.parse(result);
				let user = window.location.pathname.split("/").pop();
				let relatives = [], i;
				if (result[1].length !== 0) {
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
				let moment;
				if (result[2].length !== 0) {
					moment = processGallery(result[2]);
				} else {
					moment = [];
				}
				let locker;
				if (result[2].length === 20) {
					locker = false;
				} else {
					locker = true;
				}
				this.setState({userData: result[0], relativeData: relatives, petsData: result[1], momentData: moment, locker: locker, belong: result[3]});
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
	//load more moment
	loadMore() {
		if (!this.state.locker) {
            reqwest({
				url: "/user/load",
				type: "json",
				contentType: "application/json",
				method: "POST",
				data: JSON.stringify({"load": this.state.loader, "belong": this.state.belong}),
                success: function(result) {
                    let images = processGallery(result);
                    let combine = this.state.momentData.concat(images);
                    if (result.length === 20) {
                        this.setState({momentData: combine, loader: this.state.loader + 1});
                    } else {
                        this.setState({momentData: combine, loader: this.state.loader + 1, locker: true});
                    }
                }.bind(this),
                error: function (err) {
                    processError(err);
                }
            });
        }
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
				<a href={"/pet/" + pet.pet_id}>
					<img alt={pet.pet_name} src={"/img/pet/" + pet.pet_id + "/0.png"} />
				</a>
				<h5>{pet.pet_name}</h5>
				<div className="aside-pet-info">
					<h6>{noGetGender(pet.pet_gender)}</h6>
					<h6>{noGetType(pet.pet_type)}</h6>
				</div>
				{
					(this.state.userHome)? (
						<a href={"/edit/" + pet.pet_id}><h6 className="aside-pet-edit">Edit</h6></a>
					):null
				}
			</div>
		);
		if (pets.length === 0) {
			pets = (
				<h7 className="aside-no">Not pets added yet ...</h7>
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
		//show no moment button
		let noMoment;
		if (this.state.momentData.length === 0) {
			noMoment = (
                <h7 className="aside-no">Not moments yet ...</h7>
            );
		}
		//show image gallery
		let gallery;
		if (window.innerWidth > 900) {
            gallery = <Waterfall column="3" image={this.state.momentData} fontFamily="'Rubik', sans-serif" />
        } else if (window.innerWidth > 450) {
			gallery = <Waterfall column="2" image={this.state.momentData} fontFamily="'Rubik', sans-serif" />
		} else {
            gallery = <Waterfall column="1" image={this.state.momentData} fontFamily="'Rubik', sans-serif" />
        }
		return (
			<div id="react-root">
				<Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
				<main id="main">
					<img id="main-profile" alt={this.state.userData.user_name} src={"/img/user/" + this.state.userData.user_id + ".jpg"} />
					<h1 className="main-name">{this.state.userData.user_name}</h1>
                	<h5 className="main-name">{this.state.userData.user_about}</h5>
					<h5 className="main-name">- User Id {this.state.userData.user_id}</h5>
					<h5 id="main-relative">Relatives:</h5>
					<div id="main-family">
						{relatives}
					</div>
				</main>
				<aside id="aside">
					<div className="aside-header">
						<img alt="pets hub" src="/img/icon/glyphicons-hub.png" />
						<h4>Pets in hub</h4>
						{
							(this.state.userHome)? (
								<a href="/add">
									<h5 id="aside-header-add">
										Add Pet
									</h5>
								</a>
							):null
						}
					</div>
					{pets}
					<div className="aside-header">
						<img alt="pets moment" src="/img/icon/glyphicons-moment.png" />
						<h4>Moments</h4>
					</div>
					{noMoment}
					{gallery}
					{load}
				</aside>
                <Footer />
			</div>
		);
	}
}
ReactDOM.render(<User />, document.getElementById("root"));