import React, {Component} from 'react';
import {Getlocation} from 'thousanday-react';
class GetlocationEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            coordinator: null
		};
	}
    saveLocation(coor) {
        this.setState({coordinator: "Success"});
    }
    render() {
        let locationDisplay = {
            display: "inline-block",
            verticalAlign: "top",
            marginRight: "20px"
        };
        return (
            <section id="getlocation" className="example">
                <header className="example-header">
                    <h2>Getlocation</h2>
                    <h3>Display/get geolocation from user</h3>
                </header>
                <span className="example-span">
                    {"<Getlocation center={[-79, 43]} />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. zoom in, zoom out, get location by GPS<br/>
                    2. Preset zoom level for display<br/>
                    3. Return coordinate ([lon, lat]) stand for user's location<br/>
                </h4>
                <h4>
                    <b>Notice:</b><br/>
                    The map service is depend on <a href="http://openlayers.org/" target="__blank">openlayers under BSD License</a><br/>
                    Chrome and android require https for GPS locate feature<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                    Update your location: {this.state.coordinator}
                </h4>
                <div style={locationDisplay}>
                    <Getlocation id="getlocationexample1" center={[-79.4293129, 43.8641194]} zoom="1" saveLocation={this.saveLocation.bind(this)} fontFamily="'Rubik', sans-serif" />
                </div>
                {/*
                <div style={locationDisplay}>
                    <Getlocation id="getlocationexample2" center={[-19.4293129, 23.8641194]} zoom="1" display="true" fontFamily="'Rubik', sans-serif" />
                </div>
                */}
                <h4>
                    <a href = "https://github.com/byn9826/Thousanday-React#getlocation" target = "__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default GetlocationEG;