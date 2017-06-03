import React, {Component} from "react";
import ReactDOM from "react-dom";
import reqwest from "reqwest";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Picker from "./exploreType";
import Waterfall from "../component/Waterfall";
import processGallery from "../js/processGallery.js";
import processError from "../js/processError.js";
class Explore extends Component {
	constructor(props) {
        super(props);
		this.state = {
			userId: null,
			userName: null,
            type: null,
			nature: null,
			moment: [],
			//indicate load moment for how many time
			loader: 1,
			//indicate can't load more or not
			locker: false,
			//indicate more moment to load or not
			more: true
        }
    }
	//get user data if user logged in
    componentWillMount() {
        if (localStorage.getItem("id")) {
            let id = localStorage.getItem("id");
            let name = localStorage.getItem("name");
            this.setState({userId: id, userName: name});
        }
    }
	//user pick pet type
	pickType(type) {
		if (type != -1) {
			this.setState({type: type.toString()});
			if (this.state.nature) {
				reqwest({
					url: "/explore/read?load=0&type=" + type + "&nature=" + this.state.nature,
            		method: "GET",
					success: function(result) {
						result = JSON.parse(result);
						let moment = processGallery(result);
						let locker;
						if (result.length === 20) {
							locker = false;
						} else {
							locker = true;
						}
						this.setState({moment: moment, locker: locker, loader: 1});
					}.bind(this),
					error: function (err) {
						processError(err);
					}
				});
			}
		} else {
			this.setState({type: null});
		}
	}
	//user pick pet nature
	pickNature(nature) {
		if (nature != -1) {
			this.setState({nature: nature.toString()});
			if (this.state.type) {
				reqwest({
					url: "/explore/read?load=0&nature=" + nature + "&type=" + this.state.type,
            		method: "GET",
					success: function(result) {
						result = JSON.parse(result);
						let moment = processGallery(result);
						let locker;
						if (result.length === 20) {
							locker = false;
						} else {
							locker = true;
						}
						this.setState({moment: moment, locker: locker, loader: 1});
					}.bind(this),
					error: function (err) {
						processError(err);
					}
				});
			}
		} else {
			this.setState({nature: null});
		}
	}
	//load more moment
	loadMore() {
		if (!this.state.locker) {
			reqwest({
				url: "/explore/read?load=" + this.state.loader + "&nature=" + this.state.nature + "&type=" + this.state.type,
				method: "GET",
				success: function(result) {
					result = JSON.parse(result);
					let add = processGallery(result);
					let moments = this.state.moment.concat(add);
					let locker;
					if (result.length === 20) {
						locker = false;
					} else {
						locker = true;
					}
					this.setState({moment: moments, locker: locker, loader: this.state.loader + 1});
				}.bind(this),
				error: function (err) {
					processError(err);
				}
			});
		}
	}
	render() {
		//load button
		let load;
		if (this.state.moment.length !== 0 && !this.state.locker) {
			load = (
				<h6 id="load-button" onClick={this.loadMore.bind(this)}>
					Load more ...
				</h6>
			)
			
		}
		return (
			<div id="react-root">
				<Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
				<main id="main">
					<section className="main-filter">
						<div className="main-filter-title">
							<img alt="type" src="/img/icon/glyphicons-type.png" />
							<h4>Filter Type</h4>
						</div>
						<Picker data={["Dog", "Cat", "Bird", "Fish", "Other"]} color="#052456" width="35px" chooseType={this.pickType.bind(this)} />
					</section>
					<section className="main-filter">
						<div className="main-filter-title">
							<img alt="type" src="/img/icon/glyphicons-nature.png" />
							<h4>Filter Nature</h4>
						</div>
						<Picker data={["Cute", "Strong", "Smart", "Beauty"]} color="#052456" width="40px" chooseType={this.pickNature.bind(this)} />
					</section>
					<div id="main-title">
						<img alt="Moment" src="/img/icon/glyphicons-moment.png" />
						<h3>Explore cutes around the world</h3>
					</div>
					<Waterfall column="4" image={this.state.moment} fontFamily="'Rubik', sans-serif" />
					{load}
				</main>
				<Footer />
			</div>
		);
	}
}
ReactDOM.render(<Explore />, document.getElementById("root"));