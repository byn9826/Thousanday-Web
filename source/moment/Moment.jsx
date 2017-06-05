import React, {Component} from "react";
import ReactDOM from "react-dom";
import reqwest from "reqwest";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Like from "../component/Like";
import Commentlist from "../component/Commentlist";
import Inputarea from "../component/Inputarea";
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
            likeData: [],
            //store comment list data
            commentData: [],
            //indicate could load more comment or not
            commentLocker: "off",
            //indicate error in leave a comment
            commentError: null,
            //indicate add how many comment
            commentAdd: 0,
            //indicate load comment for how manytimes
            commentLoad: 0
		};
	}
    //get user data if user logged in
    componentWillMount() {
        if (localStorage.getItem("id")) {
            let id = localStorage.getItem("id");
            let name = localStorage.getItem("name");
            let token = localStorage.getItem("token");
            this.setState({userId: parseInt(id), userName: name, userToken: token});
        }
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
                let comments = [];
                if (result[3].length !== 0) {
                    comments = processComment(result[3]);
                }
                let locker;
                if (result[3].length === 5) {
                    locker = "off";
                } else {
                    locker = "on";
                }
                this.setState({momentData: result[0], familyData: family, likeData: lists, commentData: comments, commentLocker: locker});
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
                if (result == 1) {
                    if (action == 1) {
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
    //share to facebook
    sharePage() {
        FB.ui({
            display: 'popup',
            method: 'share_open_graph',
            action_type: 'og.shares',
            action_properties: JSON.stringify({
                object : {
                    "og:url": location.href,
                    "og:title": '"' + this.state.momentData.moment_message + '"',
                    "og:description": "Thousanday - Homepage for your pets",
                    "og:image": "https://thousanday.com/img/pet/" + this.state.momentData.pet_id + "/moment/" + this.state.momentData.image_name
                }
            })
        });
    }
    //load 10 more comments
    loadComment() {
        if (this.state.commentLocker === "off") {
            reqwest({
                url: "/moment/load?id=" + window.location.pathname.split("/").pop() + "&load=" + this.state.commentLoad + "&add=" + this.state.commentAdd,
                method: "GET",
                success: function(result) {
                    result = JSON.parse(result);
                    let newComments = processComment(result);
                    let lists = this.state.commentData.concat(newComments);
                    if (result.length === 10) {
                        this.setState({commentData: lists, commentLoad: this.state.commentLoad + 1});
                    } else {
                        this.setState({commentData: lists, commentLoad: this.state.commentLoad + 1, commentLocker: "on"});
                    }
                }.bind(this),
                error: function (err) {
                    processError(err);
                }
            });
        }
    }
    //send a comment
    sendComment() {
        //comment content can't be empty
        let content = this.refs.newComment.state.content.trim();
        if (content === "") {
            this.setState({commentError: "Comment can't be empty"});
        } else {
            reqwest({
                url: "/moment/comment",
                type: "json",
                contentType: "application/json",
                method: "POST",
                data: JSON.stringify({
                    "content": content,
                    "token": this.state.userToken,
                    "user": this.state.userId,
                    "moment": window.location.pathname.split("/").pop()
                }),
                success: function(result) {
                    if (result === 1) {
                        let newComment = [
                            content,
                            "/img/user/" + this.state.userId + ".jpg",
                            "/user/" + this.state.userId,
                            new Date().toISOString().substring(0, 10)
                        ];
                        this.state.commentData.unshift(newComment);
                        this.setState({commentData: this.state.commentData, commentError: null, commentAdd: this.state.commentAdd + 1});
                        this.refs.newComment.setState({content: ""});
                    }
                }.bind(this),
                error: function (err) {
                    processError(err);
                }
            });
        }
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
        let like, actions;
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
            actions = (
                <div>
                    <Inputarea ref="newComment" content="" max="150" />
                    <h7>{this.state.commentError}</h7>
                    <h6 id="aside-leave" onClick={this.sendComment.bind(this)}>Comment</h6>
                </div>
            )
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
                        <img id="fb-share-button" onClick={this.sharePage.bind(this)} alt="share" src="/img/icon/fb-share.png" />
                    </section>
                    <Commentlist data={this.state.commentData} locker={this.state.commentLocker} loadMore={this.loadComment.bind(this)} fontFamily="'Rubik', sans-serif" />
                    {actions}
                </aside>
                <Footer />
			</div>
		);
	}
}

ReactDOM.render(<Moment />, document.getElementById("root"));

//process comment list to data could used by commentlist
function processComment(comment) {
    let process = [], i;
    for (i = 0; i < comment.length; i++) {
        process.push([
            comment[i].comment_content,
            "/img/user/" + comment[i].user_id + ".jpg",
            "/user/" + comment[i].user_id,
            new Date(comment[i].comment_time).toISOString().substring(0, 10)
        ])
    }
    return process;
}