import React, { Component } from "react";
import QuakeContainer from "./QuakeContainer";
import MapContainer from "./MapContainer";

class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="mapContainer">
					<MapContainer />
				</div>
				<div className="quakeContainer">
					<h1>Significant Earthquakes This Month: </h1>
					<QuakeContainer />
				</div>
			</div>
		);
	}
}

export default App;
