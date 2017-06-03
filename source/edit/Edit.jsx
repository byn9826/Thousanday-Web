import React, {Component} from "react"
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Inputbox from "../component/Inputbox";
import Updateprofile from "../component/Updateprofile";
import Confirmdel from "../component/Confirmdel";
import processError from "../js/processError.js";
import reqwest from "reqwest";
class Edit extends Component {
    constructor(props) {
        super(props);
		this.state = {
            //store user id
            userId: null,
            //store user name
            userName: "",
            //store user token
            userToken: null,
            //store pet data
            petData: [],
            //store pet name
            petName: "",
            //indicate update info
            update: null,
            //show end relation box
            showEnd: false,
            //show add relative box
            showAdd: false,
            //content in search bar
            search: "",
            //store search data
            searchData: null,
            //show remove relative box
            showRemove: false,
            //show transfer box
            showTransfer: false
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
    //load pets data
    componentDidMount() {
        reqwest({
            url: "/edit/read?pet=" + window.location.pathname.split("/").pop() + "&user=" + this.state.userId,
            method: "GET",
            success: function(result) {
                result = JSON.parse(result);
                this.setState({petData: result, petName: result.pet_name});
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    //save user profile picture
    saveProfile(finalUrl) {
        //save user image
        let formData = new FormData();
        formData.append('file', finalUrl, this.state.petData.pet_id + ".png");
        formData.append("user", this.state.userId);
        formData.append("token", this.state.userToken);
        formData.append("pet", window.location.pathname.split("/").pop());
        reqwest({
            url: "/upload/pet",
            method: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function(result) {
                if (result == 1) {
                    this.setState({update: "Avatar updated successfully !"});
                }
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    //save user name
    saveName() {
        let petName = this.refs.petName.state.content.trim();
        if (petName != this.state.petName) {
			if (petName.length > 0) {
                reqwest({
                    url: "/edit/name",
                    type: "json",
                    contentType: "application/json",
                    method: "POST",
                    data: JSON.stringify({
                        "token": this.state.userToken,
                        "user": this.state.userId,
                        "pet": window.location.pathname.split("/").pop(),
                        "name": petName
                    }),
					success: function(result) {
						if (result == 1) {
                            this.setState({petName: petName, update: "Name Successfully updated !"});
                        }
					}.bind(this),
					error: function (err) {
                        processError(err);
                    }
                });
            } else {
                //roll back name
				this.refs.petName.setState({content: this.state.petName});
				//show error
				this.setState({update: "Name can't be empty!"});
            }
        }
    }
    //end relation
    endRelation() {
        this.setState({showEnd: true});
    }
    //comfirm end relation
    confirmEnd() {
        reqwest({
			url: "/edit/end",
            type: "json",
            contentType: "application/json",
            method: "POST",
            data: JSON.stringify({
                "token": this.state.userToken,
                "user": this.state.userId,
                "pet": window.location.pathname.split("/").pop(),
            }),
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
    //close end relation box
    closeEnd() {
        this.setState({showEnd: false});
    }
    //add relative
    addRelative() {
        this.setState({showAdd: true});
    }
    //close add relative box
    closeAdd() {
        this.setState({showAdd: false, search: "", searchData: null});
    }
    //search user
    searchUser(event) {
        if (event.target.value.trim() === "") {
            this.setState({search: "", searchData: null});
        } else if (parseInt(event.target.value.trim()) > 0) {
            let id = parseInt(event.target.value.trim());
            this.setState({search: id});
            setTimeout(()=> {
                if (id === this.state.search && id !== this.state.userId) {
                    reqwest({
                        url: "/edit/search?id=" + id,
                        method: "GET",
                        success: function(result) {
                            result = JSON.parse(result);
                            this.setState({searchData: result});
                        }.bind(this),
                        error: function (err) {
                            processError(err);
                        }
                    });
                }
            }, 500);
        }
    }
    //confirm add relative
    confirmAdd() {
        reqwest({
			url: "/edit/add",
            type: "json",
            contentType: "application/json",
            method: "POST",
            data: JSON.stringify({
                "token": this.state.userToken,
                "user": this.state.userId,
                "pet": window.location.pathname.split("/").pop(),
                "add": this.state.searchData.user_id
            }),
			success: function(result) {
                if (result == 1) {
                    this.setState({showAdd: false, search: "", searchData: null, update: "Request sent successfully !"});
                }
			}.bind(this),
			error: function (err) {
                processError(err);
            }
		});
    }
    //remove relative
    removeRelative() {
        this.setState({showRemove: true});
    }
    //confirm remove relative
    confirmRemove() {
        reqwest({
			url: "/edit/remove",
            type: "json",
            contentType: "application/json",
            method: "POST",
            data: JSON.stringify({
                "token": this.state.userToken,
                "user": this.state.userId,
                "pet": window.location.pathname.split("/").pop(),
            }),
			success: function(result) {
                if (result == 1) {
                    let data = this.state.petData;
                    data.relative_id = null;
                    this.setState({petData: data, showRemove: false, update: "Successfully removed relative !"});
                }
			}.bind(this),
			error: function (err) {
                processError(err);
            }
		});
    }
    //close remove relative box
    closeRemove() {
        this.setState({showRemove: false});
    }
    //transfer owner ship to relative
    transferOwnership() {
        this.setState({showTransfer: true});
    }
    //close transfer ownership box
    closeTransfer() {
        this.setState({showTransfer: false});
    }
    //confirm transfer ownership
    confirmTransfer() {
        reqwest({
			url: "/edit/transfer",
            type: "json",
            contentType: "application/json",
            method: "POST",
            data: JSON.stringify({
                "token": this.state.userToken,
                "user": this.state.userId,
                "pet": window.location.pathname.split("/").pop(),
                "relative": this.state.petData.relative_id
            }),
			success: function(result) {
                if (result == 1) {
                    let data = this.state.petData;
                    let ownerId = this.state.petData.owner_id;
                    let relativeId = this.state.petData.relative_id;
                    data.relative_id = ownerId;
                    data.owner_id = relativeId;
                    this.setState({petData: data, showTransfer: false, update: "Successfully transferred ownership !"});
                }
			}.bind(this),
			error: function (err) {
                processError(err);
            }
		});
    }
    render() {
        //show profile image
        let profile, relation;
        if (this.state.petData.pet_id) {
            if (this.state.userId === parseInt(this.state.petData.owner_id)) {
                if (this.state.petData.relative_id) {
                    relation = (
                        <div id="main-contain-holder-relation">
                            <h6>You are the owner</h6>
                            <h7 onClick={this.removeRelative.bind(this)}>Remove Relative</h7>
                            <h7 onClick={this.transferOwnership.bind(this)}>Transfer Ownership</h7>
                        </div> 
                    )
                } else {
                    relation = (
                        <div id="main-contain-holder-relation">
                            <h6>You are the owner</h6>
                            <h7 onClick={this.addRelative.bind(this)}>Add Relative</h7>
                        </div> 
                    )
                }
            } else if (this.state.userId === parseInt(this.state.petData.relative_id)) {
                 relation = (
                    <div id="main-contain-holder-relation">
                        <h6>You are the relative</h6>
                        <h7 onClick={this.endRelation.bind(this)}>End Relation</h7>
                    </div> 
                )
            }
            profile = (
                <section id="main-contain">
                    <Updateprofile alt="Pet Profile" src={"/img/pet/" + this.state.petData.pet_id + "/0.png"} width="200" saveProfile={this.saveProfile.bind(this)} indicate="Update Avatar" fontFamily="'Rubik', sans-serif" format="image/png" />  
                    <div className="main-contain-holder">
                        <Inputbox ref="petName" content={this.state.petName} max="10" width="250px" fontFamily="'Rubik', sans-serif" />
                        <input id="main-contain-holder-name" className="main-contain-holder-button" type="button" value="Update Name" onClick={this.saveName.bind(this)} />
                        {relation}
                    </div>
                </section>
            );
        }
        //show end relation box
        let popContainer, popAction;
        if (this.state.showEnd) {
			popContainer = (<div id="pop-back"></div>);
			popAction = (
				<section id="pop-action">
					<h5 id="pop-action-close" onClick={this.closeEnd.bind(this)}>✗</h5>
					<h4 id="pop-action-title">Are you sure you want to end this relationship?</h4>
					<h5 id="pop-action-warn">Once you end the relationship, you won't be able to resume it yourself.</h5>
					<Confirmdel message="End Relationship" confirmDel={this.confirmEnd.bind(this)} fontFamily="'Rubik', sans-serif"/>
				</section>
			);
		} else if (this.state.showAdd) {
            popContainer = (<div id="pop-back"></div>);
			popAction = (
				<section id="pop-action">
					<h5 id="pop-action-close" onClick={this.closeAdd.bind(this)}>✗</h5>
					<h5 id="pop-action-warn">Add relative for {this.state.petName} by user id</h5>
                    <input id="pop-action-search" value={this.state.search} placeholder="Search user by id" onChange={this.searchUser.bind(this)} />
                    {
                        (this.state.searchData)? (
                            <div id="pop-action-show">
                                <img alt="user" src={"/img/user/" + this.state.searchData.user_id + ".jpg"} />
                                <h5>{this.state.searchData.user_name}</h5>
                                <h6 onClick={this.confirmAdd.bind(this)}>Send Request</h6>
                            </div>
                        ): null
                    }
                </section>
			);
        } else if (this.state.showRemove) {
            popContainer = (<div id="pop-back"></div>);
			popAction = (
				<section id="pop-action">
					<h5 id="pop-action-close" onClick={this.closeRemove.bind(this)}>✗</h5>
					<h4 id="pop-action-title">Are you sure you want to remove the relative?</h4>
					<h5 id="pop-action-warn">Once you remove a relative, you won't be able to resume it yourself.</h5>
					<Confirmdel message="Remove Relative" confirmDel={this.confirmRemove.bind(this)} fontFamily="'Rubik', sans-serif"/>
				</section>
			);
        } else if (this.state.showTransfer) {
            popContainer = (<div id="pop-back"></div>);
			popAction = (
				<section id="pop-action">
					<h5 id="pop-action-close" onClick={this.closeTransfer.bind(this)}>✗</h5>
					<h4 id="pop-action-title">Are you sure you want to transfer ownership?</h4>
					<h5 id="pop-action-warn">Once you transfer ownership to relative, you won't be able to resume it yourself.</h5>
					<Confirmdel message="Transfer Ownership" confirmDel={this.confirmTransfer.bind(this)} fontFamily="'Rubik', sans-serif"/>
				</section>
			);
        }
        return (
            <div id="react-root">
                <Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
                <main id="main">
                    <h3>Update {this.state.petName}'s profile:</h3>
                    <h6>{this.state.update}</h6>
                    {profile}
                </main>
                <Footer />
                {popContainer}
				{popAction}
            </div>
        );
    }
}
ReactDOM.render(<Edit />, document.getElementById("root"));