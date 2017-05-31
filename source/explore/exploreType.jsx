import React, {Component} from 'react';
class Picker extends Component {
    constructor(props) {
        super(props);
		this.state = {
            choose: null
        }
    }
    chooseOne(index) {
        if (this.state.choose != index) {
            this.setState({choose: index});
            this.props.chooseType(index);
        } else {
            this.setState({choose: null});
            this.props.chooseType(-1);
        }
    }
    render() {
        let containerStyle = {
            display: "block",
            width: "100%"
        };
        let contentStyle = {
            display: "inline-block",
            borderRadius: "3px",
            padding: "3px 3px",
            width: this.props.width,
            margin: "10px 5px",
            cursor: "pointer",
            border: "1px solid " + this.props.color
        };
        let pickStyle = {
            backgroundColor: this.props.color,
            border: "1px solid " + this.props.color,
            color: "white",
            display: "inline-block",
            borderRadius: "3px",
            padding: "3px 3px",
            width: this.props.width,
            margin: "10px 5px",
            cursor: "pointer"
        };
        let options = [];
        for (let i = 0; i < this.props.data.length; i++) {
            options[i] = (
                <h6 key={"choose different" + i} style={(this.state.choose===i)?pickStyle:contentStyle} onClick={this.chooseOne.bind(this, i)}>
                    {this.props.data[i]}
                </h6>
            )
        }
		return (
            <div style={containerStyle}>
                {options}
            </div>
        );
	}
}
export default Picker;