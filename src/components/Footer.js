import React from 'react';
import styled from 'styled-components';
const Footer = () => {
	return (
		<StyledFooter>
			<h2>footer component</h2>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	grid-column: col-start 1 / col-end 12;

	//temp
	color: var(--clr-white);
	background-color: var(--clr-primary-dark);
`;

export default Footer;
