import React from "react";

const QuakesList = (props) => {
	const quakesList = props.quakes.map((quake, i) => {
		return (
			<li key={quake.id}>
				Quake - {i}: {quake.properties.title}
			</li>
		);
	});
	return (
		<React.Fragment>
			<ul>{quakesList}</ul>
		</React.Fragment>
	);
};

export default QuakesList;
