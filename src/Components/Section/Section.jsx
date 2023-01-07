import PropTypes from "prop-types";

import { Inner, Title } from "./Section.styled";

export const Section = ({ title, children }) => {
	return (
		<Inner>
			<Title>{title}</Title>
			{children}
		</Inner>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
};