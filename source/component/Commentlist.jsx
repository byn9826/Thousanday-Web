import React, {Component} from 'react';
class Commentlist extends Component {
    constructor(props) {
        super(props);
		this.state = {
            width: this.props.width || "100%",
            fontFamily: this.props.fontFamily || "Times New Roman"
		};
	}
    render() {
        let containerStyle = {
            display: "inline-block",
            marginTop: "20px",
            padding: "20px 0",
            borderTopStyle: "ridge",
            width: this.state.width
        };
        let singleStyle = {
            display: "block",
            width: "96%",
            backgroundColor: "#f7f9fc",
            borderRadius: "3px",
            marginBottom: "15px",
            marginLeft: "2%",
            marginRight: "2%"
        };
        let contentStyle = {
            display: "block",
            width: "96%",
            padding: "6px 2%",
            fontFamily: this.state.fontFamily,
            fontSize: "14px"
        };
        let aboutStyle = {
            display: "block",
            width: "100%",
            borderRadius: "3px",
            backgroundColor: "#f7d7b4"
        };
        let profileStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            width: "8%",
            borderRadius: "50%",
            margin: "3px 2%"
        };
        let dateStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            fontFamily: this.state.fontFamily,
            fontSize: "9px"
        };
        let loadStyle = {
            display: "block",
            textAlign: "center",
            fontFamily: this.state.fontFamily,
            fontSize: "9px",
            padding: "4px 2%",
            outline: "none",
            backgroundColor: "white",
            cursor: "pointer",
            color: "#052456"
        };
        let lockerStyle = {
            display: "block",
            textAlign: "center",
            fontFamily: this.state.fontFamily,
            fontSize: "9px",
            padding: "4px 2%",
            outline: "none",
            backgroundColor: "white",
            color: "#052456"
        };
        let comments = this.props.data.map((comment, index) =>
            <div key={"thousanday-moment-comment" + index} style={singleStyle}>
                <div style={contentStyle}>
                    {comment[0]}
                </div>
                <div style={aboutStyle}>
                    <a href={comment[2]}>
                        <img style={profileStyle} alt="User Profile" src={comment[1]} />
                    </a>
                    <div style={dateStyle}>{comment[3]}</div>
                </div>
            </div>
        );
        let load;
        if (this.props.locker == "off") {
            load = (
                <span style={loadStyle} onClick={this.props.loadMore.bind(null)}>Load More ...</span>
            )
        } else if (this.props.locker == "on") {
            load = (
                <span style={lockerStyle}>No more ...</span>
            )
        }
		return (
            <div style={containerStyle}>
                {comments}
                {load}
            </div>
		);
	}
}
export default Commentlist;