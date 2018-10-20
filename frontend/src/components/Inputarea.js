import React, {Component} from 'react';

export default class Inputarea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: this.props.width || "100%",
			border: this.props.border || "2px solid #f7d7b4",
			height: this.props.height || "50px",
			fontSize: this.props.fontSize || "14px",
			content: this.props.content || "",
			count: parseInt(this.props.max) - this.props.content.length,
			length: parseInt(this.props.max),
			fontFamily: this.props.fontFamily || "Times New Roman"
		};
	}
	editInput(event) {
		let changedInput = event.target.value.substr(0, this.state.length);
		this.setState({ content: changedInput });
		this.setState({ count: this.state.length - changedInput.length });
	}
	render() {
		let spanStyle = {
			width: this.state.width,
			display: "inline-block",
			verticalAlign: "top"
		};
		let inputStyle = {
			display: "block",
			width: "98%",
			paddingTop: "5px",
			paddingBottom: "5px",
			border: this.state.border,
			height: this.state.height,
			fontFamily: this.state.fontFamily,
			fontSize: this.state.fontSize,
			paddingLeft: "1%",
			outline: "none",
			borderRadius: "5px",
			resize: "none"
		};
		let countStyle = {
			display: "block",
			fontFamily: this.state.fontFamily,
			fontSize: "11px",
			width: "99%",
			marginLeft: "1%",
			marginTop: "5px"
		};
		return (
			<span style={spanStyle}>
				<textarea style={inputStyle} value={this.state.content} onChange={this.editInput.bind(this)} />
				<span style={countStyle}>{this.state.count} / {this.state.length}</span>
			</span>
		);
	}
}
