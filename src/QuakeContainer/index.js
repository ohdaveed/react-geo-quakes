import React from "react";
import "semantic-ui-css/semantic.min.css";
import QuakesList from "../QuakesList";

class QuakeContainer extends React.Component {
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
			<div id="info">
				{this.state.quakes === [] ? (
					"Hell"
				) : (
					<QuakesList quakes={this.state.quakes} />
				)}
			</div>
		);
	}
}

export default QuakeContainer;
