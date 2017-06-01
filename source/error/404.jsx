import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
class NotFound extends Component {
	render() {
		return (
			<div id="react-root">
				<Header restrict={false}/>
				<main id="main">
					<section id="main-section">
						<h2>Page not Found !</h2>
						<h4>
							We can't find anything you want ! <br />
							<a href="/">Please explore somewhere else</a>
						</h4>
					</section>
					<img alt="Page Not Found" src="/img/icon/404.jpg" />
				</main>
				<Footer />
			</div>
		);
	}
}
//get defaultdata
ReactDOM.render(<NotFound />, document.getElementById("root"));