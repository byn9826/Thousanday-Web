import React, {Component} from "react";
import ReactDOM from "react-dom";
import reqwest from "reqwest";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Like from "../component/Like";
import processError from "../js/processError.js";
class Moment extends Component {
    constructor(props) {
        super(props);
		this.state = {
            //store user id
            userId: null,
            //store user name
            userName: null,
            //store user token
            userToken: null,
            //store moment data
            momentData: [],
            //store pet family ids
            familyData: [],
            //indicate show confirm delete or not
            showConfirm: false,
            //store user id list who like this moment
            likeData: []
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
    //read moment image
    componentDidMount() {
        reqwest({
            url: "/moment/read?id=" + window.location.pathname.split("/").pop(),
            method: "GET",
            success: function(result) {
                result = JSON.parse(result);
                let family = [parseInt(result[1].owner_id), parseInt(result[1].relative_id)];
                let i, lists = [];
                for (i = 0; i < result[2].length; i++) {
                    lists[i] = parseInt(result[2][i].user_id);
                }
                this.setState({momentData: result[0], familyData: family, likeData: lists});
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    //user click delete moment
    showDel() {
        this.setState({showConfirm: !this.state.showConfirm});
    }
    //user confirm delete moment
    confirmDel() {
        reqwest({
            url: "/moment/delete",
            type: "json",
            contentType: "application/json",
            method: "POST",
            data: JSON.stringify({
                "token": this.state.userToken,
                "user": this.state.userId,
                "moment": window.location.pathname.split("/").pop(),
                "pet": this.state.momentData.pet_id
            }),
            success: function(result) {
                if (parseInt(result) === 1) {
                    window.location.replace("/user/" + this.state.userId);
                }
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    //user click like moment
    changeAgree(action) {
        reqwest({
            url: "/moment/like",
            type: "json",
            contentType: "application/json",
            method: "POST",
            data: JSON.stringify({
                "token": this.state.userToken,
                "user": this.state.userId,
                "action": action,
                "moment": window.location.pathname.split("/").pop()
            }),
            success: function(result) {
                if (result === 1) {
                    if (action === 1) {
                        this.state.likeData.push(this.state.userId);
                    } else {
                        this.state.likeData.splice(this.state.likeData.indexOf(this.state.userId), 1);
                    }
                    this.setState({likeData: this.state.likeData});
                }
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    render() {
        //delete button
        let del;
        if (this.state.userId && (this.state.familyData.indexOf(this.state.userId) !== -1)) {
            del = (<h6 onClick={this.showDel.bind(this)}>Delete</h6>);
        }
        //confirm delete button
        let confirm;
        if (this.state.showConfirm) {
            confirm = (
                <input type="button" value="Confirm ?" onClick={this.confirmDel.bind(this)} />
            );
        }
        //like button
        let like;
        if (this.state.userId) {
            if (this.state.likeData.indexOf(this.state.userId) === -1) {
                like = (
                    <Like key="false" interact="true" agree={this.state.likeData.length} liked="false" newTotal={this.changeAgree.bind(this)}/>
                )
            } else {
                like = (
                    <Like key="true" interact="true" agree={this.state.likeData.length} liked="true" newTotal={this.changeAgree.bind(this)}/>
                )
            }
        } else {
            like = (
                <Like interact="false" agree={this.state.likeData.length} liked="false" />
            )
        }
		return (
			<div id="react-root">
                <Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
                <main id="main">
                    <img alt="moment-image" src={"/img/pet/" + this.state.momentData.pet_id + "/moment/" + this.state.momentData.image_name} />
                    <h5>{this.state.momentData.moment_date?new Date(this.state.momentData.moment_date).toISOString().substring(0, 10):null}</h5>
                    {del}
                    {confirm}
                </main>
                <aside id="aside">
                    <section id="aside-talk">
                        <a href={"/pet/" + this.state.momentData.pet_id}>
                            <img alt="Pet" src={"/img/pet/" + this.state.momentData.pet_id + "/0.png"} />
                        </a>
                        <h4>{this.state.momentData.moment_message}</h4>
                    </section>
                    <section id="aside-social">
                        {like}
                    </section>
                </aside>
                <Footer />
			</div>
		);
	}
}

ReactDOM.render(<Moment />, document.getElementById("root"));