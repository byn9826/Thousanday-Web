import React, {Component} from "react"
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
import processError from "../js/processError.js";
import reqwest from "reqwest";
class Request extends Component {
    constructor(props) {
        super(props);
		this.state = {
            //store user id
            userId: null,
            //store user name
            userName: "",
            //store user token
            userToken: null,
            //store request list
            requestData: []
		};
	}
    //get user data if user logged in
    componentWillMount() {
        if (localStorage.getItem("id")) {
            let id = localStorage.getItem("id");
            let name = localStorage.getItem("name");
            let token = localStorage.getItem("token");
            this.setState({userId: parseInt(id), userName: name, userToken: token});
            reqwest({
                url: "/request/read?id=" + id,
                method: "GET",
                success: function(result) {
                    console.log(result);
                    result = JSON.parse(result);
                    this.setState({requestData: result});
                }.bind(this),
                error: function (err) {
                    processError(err);
                }
            });
        } else {
            window.location.replace("/error/page403");
        }
    }
    render() {
        let requests;
        requests = this.state.requestData.map((request, index) =>
            <div key={"requestlist" + index} className="main-contain">
                <img alt="Sender" src={"/img/user/" + request.sender_id + ".jpg"} />
                <h5>wants to add you as</h5>
                <img alt="Sender" src={"/img/pet/" + request.pet_id + "/0.png"} />
                <h5>'s relative.</h5>
                <h6>{request.request_time}</h6>
            </div>
        )
        return (
            <div id="react-root">
                <Header userId={this.state.userId?this.state.userId:null} userName={this.state.userName?this.state.userName:"Login"} />
                <main id="main">
                    <h3>All Requests:</h3>
                    {requests}
                </main>
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<Request />, document.getElementById("root"));