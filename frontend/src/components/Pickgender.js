import React, {Component} from 'react';
class Pickgender extends Component {
    constructor(props) {
        super(props);
		this.state = {
            fontFamily: this.props.fontFamily || "Times New Roman",
            hoverMale: false,
            hoverFemale: false,
            setMale: false,
            setFemale: false
        };
	}
    enterMale() {
        this.setState({hoverMale: true});
    }
    leaveMale() {
        this.setState({hoverMale: false});
    }
    enterFemale() {
        this.setState({hoverFemale: true});
    }
    leaveFemale() {
        this.setState({hoverFemale: false});
    }
    clickMale() {
        if (!this.state.setMale) {
            this.setState({setMale: true, setFemale: false});
            this.props.chooseGender(0);
        } else {
            this.setState({setMale: false});
            this.props.chooseGender(2);
        }
    }
    clickFemale() {
        if (!this.state.setFemale) {
            this.setState({setFemale: true, setMale: false});
            this.props.chooseGender(1);
        } else {
            this.setState({setFemale: false});
            this.props.chooseGender(2);
        }
    }
    render() {
        let containerStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            borderRadius: "5px",
            padding: "5px 3px"
        };
        let genderStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            textAlign: "center",
            fontSize: "16px",
            fontFamily: this.state.fontFamily,
            width: "25px",
            height: "25px",
            lineHeight: "25px",
            cursor: "pointer",
            backgroundColor: "white",
            borderRadius: "50%",
            marginLeft: "5px",
            marginRight: "5px"
        };
        let hoverStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            textAlign: "center",
            fontSize: "16px",
            lineHeight: "25px",
            fontFamily: this.state.fontFamily,
            backgroundColor: "orange",
            color: "white",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            cursor: "pointer",
            marginLeft: "5px",
            marginRight: "5px"
        };
        let male, female;
        if (this.state.setMale || (!this.state.setMale && this.state.hoverMale)) {
            male = (<span style={hoverStyle} onMouseOut={this.leaveMale.bind(this)} onClick={this.clickMale.bind(this)}>♂</span>);
        } else {
            male = (<span style={genderStyle} onMouseEnter={this.enterMale.bind(this)}>♂</span>);
        }
        if (this.state.setFemale || (!this.state.setFemale && this.state.hoverFemale)) {
            female = (<span style={hoverStyle} onMouseOut={this.leaveFemale.bind(this)} onClick={this.clickFemale.bind(this)}>♀</span>);
        } else {
            female = (<span style={genderStyle} onMouseEnter={this.enterFemale.bind(this)}>♀</span>);
        }
        return (
            <div style={containerStyle}>
                {male}
                {female}
            </div>
		);
	}
}
export default Pickgender;