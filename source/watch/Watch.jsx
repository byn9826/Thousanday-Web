import React, {Component} from "react"
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
import reqwest from "reqwest";
import processGallery from "../js/processGallery.js";
import processError from "../js/processError.js";
import Waterfall from "../component/Waterfall";
class Watch extends Component {
    constructor(props) {
        super(props);
		this.state = {
            //store user id
            userId: null,
            //store user name
            userName: null,
            //store user token
            userToken: null,
            //store pets data on watch list
            petsList: [],
            //store pet has been unwatched
            unwatch: [],
            //indicate load pet list for how many times
            loadPets: 1,
            //store pets id on watch list
            watchList: null,
            //store list moments to show
            galleryData: [],
            //indicate which list to show
            loadList: "watch",
            //indicate could load more images or not
            locker: false,
            //indicate click load for how many times
            loader: 1
        }
    }
    //get user data if user logged in
    componentWillMount() {
        if (localStorage.getItem("id")) {
            let id = localStorage.getItem("id");
            let name = localStorage.getItem("name");
            let token = localStorage.getItem("token");
            this.setState({userId: parseInt(id), userName: name, userToken: token});
            reqwest({
                url: "/watch/read?id=" + id,
                method: "GET",
                success: function(result) {
                    result = JSON.parse(result);
                    //get data for images
                    let images, locker;
                    if (result[1].length === 0) {
                        images = [];
                        locker = true;
                    } else if (result[1].length === 20) {
                        images = processGallery(result[1]);
                        locker = false;
                    } else {
                        images = processGallery(result[1]);
                        locker = true;
                    }
                    this.setState({
                        petsList: result[2], watchList: result[0], galleryData: images, locker: locker
                    });
                }.bind(this),
                error: function (err) {
                    processError(err);
                }
            });
        } else {
            window.location.replace("/error/page403");
        }
    }
    //load mor pet on watch list
    loadPet() {
        this.setState({loadPets: this.state.loadPets + 1});
    }
    //unwatch a pet
    unWatch(id) {
        reqwest({
            url: "/watch/remove",
            type: "json",
            contentType: "application/json",
            method: "POST",
            data: JSON.stringify({
                "token": this.state.userToken,
                "user": this.state.userId,
                "pet": id
            }),
            success: function(result) {
                this.state.unwatch.push(id);
                this.setState({unwatch: this.state.unwatch});
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    //re-watch a pet
    reWatch(id) {
        reqwest({
            url: "/watch/add",
            type: "json",
            contentType: "application/json",
            method: "POST",
            data: JSON.stringify({
                "token": this.state.userToken,
                "user": this.state.userId,
                "pet": id
            }),
            success: function(result) {
                this.state.unwatch.splice(this.state.unwatch.indexOf(id), 1);
                this.setState({unwatch: this.state.unwatch});
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    //load more images
    loadMore() {
        if (!this.state.locker) {
            let lists;
            if (this.state.loadList === "watch") {
                lists = this.state.watchList;
            } else {
                lists = null;
            }
            reqwest({
                url: "/watch/load",
                type: "json",
                contentType: "application/json",
                method: "POST",
                data: JSON.stringify({
                    "list": lists,
                    "load": this.state.loader,
                    "route": this.state.loadList,
                    "user": this.state.userId
                }),
                success: function(result) {
                    let add = processGallery(result);
                    let combine = this.state.galleryData.concat(add);
                    if (result.length === 20) {
                        this.setState({galleryData: combine, loader: this.state.loader + 1});
                    } else {
                        this.setState({galleryData: combine, loader: this.state.loader + 1, locker: true});
                    }
                }.bind(this),
                error: function (err) {
                    processError(err);
                }
            });
        }
    }
    //change list to display
    changeList(value) {
        if (value !== this.state.loadList) {
            let choice;
            if (value === "watch") {
                choice = this.state.watchList;
            } else {
                choice = null;
            }
            reqwest({
                url: "/watch/load",
                type: "json",
                contentType: "application/json",
                method: "POST",
                data: JSON.stringify({
                    "list": choice,
                    "load": 0,
                    "route": value,
                    "user": this.state.userId
                }),
                success: function(result) {
                    let all = processGallery(result);
                    if (result.length === 20) {
                        this.setState({galleryData: all, loader: 1, loadList: value, locker: false});
                    } else {
                        this.setState({galleryData: all, loader: 1, loadList: value, locker: true});
                    }
                }.bind(this),
                error: function (err) {
                    processError(err);
                }
            });
        }
    }
    render() {
        //load 5 watch per time
        let watchs = [], total, i, load;
        if ((this.state.loadPets * 5) >= this.state.petsList.length) {
            total = this.state.petsList.length;
        } else {
            total = this.state.loadPets * 5;
            load = (<h6 id="aside-load" onClick={this.loadPet.bind(this)}>Load More ...</h6>);
        }
        for (i = 0; i < total; i ++) {
            watchs[i] = (
                <div key={"petwatch" + i} className={(this.state.unwatch.indexOf(this.state.petsList[i].pet_id) === -1)?"aside-list":"aside-remove"}>
                    <a href={"/pet/" + this.state.petsList[i].pet_id}>
                        <img alt={this.state.petsList[i].pet_name} src={"/img/pet/" + this.state.petsList[i].pet_id + "/0.png"} />
                        <h5>{this.state.petsList[i].pet_name}</h5>
                    </a>
                    {
                        (this.state.unwatch.indexOf(this.state.petsList[i].pet_id) === -1)?(
                            <h6 onClick={this.unWatch.bind(this, this.state.petsList[i].pet_id)}>Unwatch</h6>
                        ):(
                            <h6 onClick={this.reWatch.bind(this, this.state.petsList[i].pet_id)}>Watch</h6>
                        )
                    }
                </div>
            );
        }
        //load more images button
        let loader;
        if (!this.state.locker) {
            loader = (
                <h6 id="load-button" onClick={this.loadMore.bind(this)}>
                    Load more ...
                </h6>
            );
        }
        let gallery;
		if (window.innerWidth > 900) {
            gallery = <Waterfall column="3" image={this.state.galleryData} fontFamily="'Rubik', sans-serif" />
        } else if (window.innerWidth > 450) {
			gallery = <Waterfall column="2" image={this.state.galleryData} fontFamily="'Rubik', sans-serif" />
		} else {
            gallery = <Waterfall column="1" image={this.state.galleryData} fontFamily="'Rubik', sans-serif" />
        }
        return (
            <div id="react-root">
                <Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
                <aside id="aside">
                    <h4 id="aside-header">Watch List</h4>
                    {watchs}
                    {load}
                </aside>
                <main id="main">
                    <header id="main-header">
                        <div onClick={this.changeList.bind(this, "watch")} className="main-header-section" style={this.state.loadList === "watch"? {backgroundColor: "#ef8513"}: {backgroundColor: "#e5e5e5"}}>
							<img alt="Watch" src="/img/icon/glyphicons-watch.png" />
							<h7>On Watch List</h7>
                        </div>
                        <div onClick={this.changeList.bind(this, "love")} className="main-header-section" style={this.state.loadList === "love"? {backgroundColor: "#ef8513"}: {backgroundColor: "#e5e5e5"}}>
							<img alt="Love" src="/img/icon/glyphicons-love.png" />
							<h7>Moments Liked</h7>
						</div>
						<div onClick={this.changeList.bind(this, "comment")} className="main-header-section" style={this.state.loadList === "comment"? {backgroundColor: "#ef8513"}: {backgroundColor: "#e5e5e5"}}>
							<img alt="Comment" src="/img/icon/glyphicons-comment.png" />
							<h7>Comments List</h7>
						</div>
                    </header>
                    {gallery}
                    {loader}
                </main>
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<Watch />, document.getElementById("root"));