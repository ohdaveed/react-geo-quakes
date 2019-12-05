import React from "react";
// eslint-disable-next-line
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
	width: "40%",
	height: "100%"
};

export class MapContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			quakes: []
		};
	}

	displayMarkers = () => {
		return this.props.quakes.map((quake, i) => {
			console.log("this is lat");
			console.log(quake.geometry.coordinates[1]);
			console.log("this is long");
			console.log(quake.geometry.coordinates[0]);
			return (
				<Marker
					key={i}
					position={{
						lat: quake.geometry.coordinates[1],
						lng: quake.geometry.coordinates[0]
					}}
				/>
			);
		});
	};
	render() {
		console.log("this is props", this.props);
		console.log("this is display", this.displayMarkers());
		return (
			<Map
				google={this.props.google}
				zoom={2}
				style={mapStyles}
				initialCenter={{ lat: 37, lng: -150 }}>
				{this.displayMarkers()}
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_MAPS_API
})(MapContainer);
