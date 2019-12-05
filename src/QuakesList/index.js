import React from "react";

function QuakesList(props) {
	const quakesList = props.quakes.map((quake, i) => {
		return (
			<li key={quake.id}>
				Quake - {i}: {quake.properties.title}
				<br />
				Long: {quake.geometry.coordinates[0]}
				<br />
				Lat: {quake.geometry.coordinates[1]}
				<br />
			</li>
		);
	});
	return (
		<React.Fragment>
			<ul>{quakesList}</ul>
		</React.Fragment>
	);
}

export default QuakesList;
