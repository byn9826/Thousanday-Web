import React, {Component} from "react"
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
import reqwest from "reqwest";
import processGallery from "../js/processGallery.js";
import processError from "../js/processError.js";
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
            watchList: [],
            //store moments on wathc list
            watchMoment: []
        }
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
    componentDidMount() {
        reqwest({
            url: "/watch/read?id=" + this.state.userId,
            method: "GET",
            success: function(result) {
                result = JSON.parse(result);
                console.log(result);
                this.setState({petsList: result[2], watchList: result[0], watchMoment: result[1]});
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
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
                if (result == 1) {
                    this.state.unwatch.push(id);
                    this.setState({unwatch: this.state.unwatch});
                }
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
    //re watch a pet
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
                if (result == 1) {
                    this.state.unwatch.splice(this.state.unwatch.indexOf(id), 1);
                    this.setState({unwatch: this.state.unwatch});
                }
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
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
        return (
            <div id="react-root">
                <Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
                <aside id="aside">
                    <h4 id="aside-header">Watch List</h4>
                    {watchs}
                    {load}
                </aside>
                <main id="main">
                </main>
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<Watch />, document.getElementById("root"));