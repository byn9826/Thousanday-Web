import React, {Component} from "react";
import ReactDOM from "react-dom";
import reqwest from "reqwest";
import Header from "../general/Header";
import Waterfall from "../component/Waterfall";
import processGallery from "../js/processGallery.js";
import processError from "../js/processError.js";
class Public extends Component {
	constructor(props) {
        super(props);
		this.state = {
            //store images for public moments
            images: []
		};
	}
    componentDidMount() {
        //load 20 most recent images
        reqwest({
            url: "index/init",
            type: "json",
            method: "POST",
            success: function(result) {
                let images = processGallery(result);
                this.setState({images: images});
            }.bind(this),
            error: function (err) {
                processError(err);
            }
        });
    }
	render() {
		return (
			<div  id="react-root">
                <Header />
				<Waterfall column="4" image={this.state.images} fontFamily="'Rubik', sans-serif" />
			</div>
		);
	}
}

ReactDOM.render(<Public />, document.getElementById("root"));