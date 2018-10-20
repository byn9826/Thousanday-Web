import React, {Component} from 'react';
class Droplist extends Component {
    constructor(props) {
        super(props);
		this.state = {
            width: this.props.width || "100%",
            fontFamily: this.props.fontFamily || "Times New Roman",
            title: this.props.title || "Please choose",
            showTitle: this.props.showTitle || "false",
            id: this.props.id || null,
            value: this.props.default || this.props.title || "Please choose"
		};
	}
    changeValue(event) {
        this.setState({value: event.target.value});
        this.props.changeValue(event.target.value);
    }
    render() {
        let rootStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            width: this.state.width,
            outline: "none",
            border: "1px solid #052456",
            borderRadius: "5px",
            padding: "4px 0",
            fontFamily: this.state.fontFamily,
            fontSize: "13px"
        };
        let showTitle;
        if (this.state.showTitle == "true") {
            showTitle = (
                <option disabled value={this.state.title}>{this.state.title}</option>
            );
        }
        let options = [];
        for (let i = 0; i < this.props.options.length; i++) {
            options.push(
                <option key={"thousanday-droplist" + i} value={i}>{this.props.options[i]}</option>
            );
        }
		return (
            <select id={this.state.id} style={rootStyle} value={this.state.value} onChange={this.changeValue.bind(this)}>
                {showTitle}
                {options}
            </select>
		);
	}
}
export default Droplist;