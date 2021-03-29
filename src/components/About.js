import React from 'react';
import styled from 'styled-components';
import blob from '../assets/blob.svg';
import aboutData from '../constants/aboutData';

const About = () => {
	return (
		<StyledSection>
			<svg
				className='blob'
				viewBox='0 0 200 200'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					fill='currentColor'
					d='M44.4,-59.4C56.5,-52.4,64.3,-37.9,68.7,-22.7C73,-7.6,73.9,8.4,68,20.7C62.1,33.1,49.5,41.9,37,48.9C24.6,55.9,12.3,60.9,-2.2,64C-16.8,67.1,-33.5,68.1,-46.5,61.3C-59.4,54.5,-68.6,39.9,-73.4,24.1C-78.3,8.3,-78.8,-8.7,-73,-22.9C-67.3,-37.1,-55.4,-48.5,-42.2,-55.1C-29,-61.7,-14.5,-63.4,0.8,-64.6C16.2,-65.7,32.4,-66.3,44.4,-59.4Z'
					transform='translate(100 100)'
				/>
			</svg>
			<div className='center'>
				<h2 className='title mb-lg'>About us</h2>
				<div className='about-container'>
					{aboutData.map(info => {
						const { title, desc, img } = info;
						return (
							<div className='about-card'>
								<h3 className='mb-sm'>{title}</h3>
								<p>{desc}</p>
								<img src={img} alt={title} />
							</div>
						);
					})}
				</div>
			</div>
		</StyledSection>
	);
};

const StyledSection = styled.section`
	padding-top: 5vh;
	padding-bottom: 10vh;
	min-height: 50vh;
	position: relative;
	grid-column: col-start 1 / col-end 12;
	overflow: hidden;

	.center {
		.title {
			text-align: center;
		}

		.about-container {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(min-content, 60rem));
			justify-content: center;
			gap: 6rem;
		}
		.about-card {
			padding: 3rem;

			background-color: white;
			border-radius: var(--radius);
			box-shadow: var(--light-shadow);

			transition: all 0.3s;
			&:hover {
				box-shadow: var(--dark-shadow);
				/* transform: translateY(-2px); */
			}
		}
		img {
			width: 100%;
			border-radius: var(--radius);
		}
		p {
			padding-bottom: 2rem;
		}
	}

	.blob {
		position: absolute;
		top: 0;
		height: 100%;
		left: 50%;
		z-index: -1;
		transform: translateX(-50%) scaleX(3) scaleY(1.5);
		color: var(--clr-primary-light);

		/* width: 100%; */
	}
`;

export default About;
