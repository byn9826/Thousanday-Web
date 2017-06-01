import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
class InnerError extends Component {
	render() {
		return (
			<div id="react-root">
				<Header loginSuccess={null} logOut={null} hideName={true}/>
				<main id="main">
					<section id="main-section">
						<h2>Internal Server Error</h2>
						<h4>
							Something Wrong happens ! <br />
							Please try later
						</h4>
					</section>
					<img alt="Internal Server Error" src="/img/icon/500.jpg" />
				</main>
				<Footer />
			</div>
		);
	}
}
//get defaultdata
ReactDOM.render(<InnerError />, document.getElementById("root"));