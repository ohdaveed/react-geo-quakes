import React from "react";
// eslint-disable-next-line
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
	render() {
		return <Map google={this.props.google} zoom={5}></Map>;
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_MAPS_API
})(MapContainer);

