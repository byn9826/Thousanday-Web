import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
class NotFound extends Component {
	constructor(props) {
        super(props);
		this.state = {
            //store user id
            userId: null,
            //store user name
            userName: null,
		};
	}
	//get user data if user logged in
    componentWillMount() {
        if (localStorage.getItem("id")) {
            let id = localStorage.getItem("id");
            let name = localStorage.getItem("name");
            this.setState({userId: id, userName: name});
        }
    }
	render() {
		return (
			<div id="react-root">
				<Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
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