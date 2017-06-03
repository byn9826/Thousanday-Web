import React, {Component} from 'react';
class Confirmdel extends Component {
    constructor(props) {
		super(props);
		this.state = {
      		content: "",
            fontFamily: this.props.fontFamily || "Times New Roman",
            focus: false
		};
	}
    editInput(event) {
        this.setState({content: event.target.value});
    }
    inType() {
        this.setState({focus: true});
    }
    outType() {
        this.setState({focus: false});
    }
    render() {
        let containerStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            width: "96%",
            padding: "0 2%"
        };
        let inputStyle = {
            display: "block",
			width: "96%",
			border: "1px dashed #d68419",
			borderRadius: "3px",
            height: "25px",
			fontFamily: this.state.fontFamily,
			fontSize: "14px",
            padding: "3px 2%",
			outline: "none",
            marginBottom: "17px",
            color: "#af200a"
        };
        let focusStyle = {
            display: "block",
			width: "96%",
			border: "2px solid #d68419",
			borderRadius: "3px",
            height: "25px",
			fontFamily: this.state.fontFamily,
			fontSize: "14px",
            padding: "3px 2%",
			outline: "none",
            marginBottom: "15px",
            color: "#af200a"
        };
        let buttonStyle = {
            display: "block",
			width: "100%",
			border: "1px solid #afaea1",
            backgroundColor: "#f7f6ed",
            color: "#777665",
			borderRadius: "3px",
			fontFamily: this.state.fontFamily,
			fontSize: "13px",
            padding: "5px 0",
			outline: "none"
        };
        let confirmStyle = {
            display: "block",
			width: "100%",
			border: "1px solid black",
            backgroundColor: "white",
            color: "black",
			borderRadius: "3px",
			fontFamily: this.state.fontFamily,
			fontSize: "13px",
            padding: "5px 0",
			outline: "none",
            cursor: "pointer"
        };
        let requireStyle = {
			display: "block",
			textAlign: "center",
			marginTop: "15px",
			marginBottom: "15px",
            fontFamily: this.state.fontFamily,
            fontSize: "14px",
		};
        let input;
        if (!this.state.focus) {
            input = (
                <input type="text" style={inputStyle} value={this.state.content} onFocus={this.inType.bind(this)} />
            );
        } else {
            input = (
                <input type="text" style={focusStyle} value={this.state.content} onBlur={this.outType.bind(this)} onChange={this.editInput.bind(this)} />
            );
        }
        let button;
        if (this.props.message == this.state.content) {
            button = (
                <input type="button" style={confirmStyle} onClick={this.props.confirmDel.bind(null)} value="Confirm Delete" />
            );
        } else {
            button = (
                <input type="button" style={buttonStyle} value="Confirm" />
            );
        }
		return (
            <div style={containerStyle}>
                <p style={requireStyle}>Please type in <b>{this.props.message}</b></p>
                {input}
                {button}
            </div>
		);
	}
}
export default Confirmdel;