import React from 'react';
import styled from 'styled-components';
import perks from '../constants/perks';

const Perks = () => {
	const perksList = perks.map(perk => {
		const { id, icon, title, desc } = perk;
		return (
			<div className='perk-box mb-sm' key={id}>
				{icon}
				<h4>{title}</h4>
				<p>{desc}</p>
			</div>
		);
	});

	return (
		<StyledSection>
			<svg
				className='wave-next'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'>
				<path
					fill='#ddd'
					fill-opacity='1'
					d='M0,160L120,160C240,160,480,160,720,170.7C960,181,1200,203,1320,213.3L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
			</svg>
			<div className='center'>
				<h2 className='title-right mb-md'>Why us?</h2>
				<div className='perks-container mb-md'>{perksList}</div>
			</div>
		</StyledSection>
	);
};

const StyledSection = styled.section`
	grid-column: col-start 1 / col-end 12;
	position: relative;

	min-height: 50vh;

	.title-right {
		margin-top: 12vh;
		text-align: right;
	}

	.perks-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	}

	.perk-box {
		display: grid;
		grid-template-columns: min-content 1fr;
		grid-row-gap: 1.5rem;
		grid-column-gap: 2.5rem;

		margin-top: 2rem;
		svg {
			color: var(--clr-primary-dark);
			grid-row: 1 / span 2;
			width: 4.5rem;
			height: 4.5rem;
			transform: translateY(-1.5rem);
		}
	}

	.wave-next {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: -1;
	}
`;
export default Perks;
