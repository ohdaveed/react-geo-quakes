import React, { Component } from "react";
import QuakeContainer from "./QuakeContainer";
import MapContainer from "./MapContainer";

class App extends Component {
	constructor() {
		super();

		this.state = {
			quakes: []
		};
	}

	getQuakes = async () => {
		try {
			const quakes = await fetch(
				"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
			);

			const parsedQuakes = await quakes.json();

			console.log(parsedQuakes.features);

			this.setState({
				quakes: parsedQuakes.features
			});
		} catch (err) {
			console.log(err, "err in catch block");
			return err;
		}
	};

	componentDidMount() {
		this.getQuakes();
	}

	render() {
		return (
			<div className="app">
				<div className="mapContainer">
					<MapContainer quakes={this.state.quakes} />
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
