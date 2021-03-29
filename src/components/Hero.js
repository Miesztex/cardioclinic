import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

import styled from 'styled-components';
// ...GatsbyImageSharpFluid

const Hero = () => {
	return (
		<StyledHeader>
			<div className='waves'>
				<svg
					className='wave-top-lower'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1440 320'>
					<path
						fill='#FFE6D9'
						fill-opacity='1'
						d='M0,128L120,122.7C240,117,480,107,720,128C960,149,1200,203,1320,229.3L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
				</svg>
				<svg
					className='wave-top-upper'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1440 320'>
					<path
						fill='#ECA796'
						fill-opacity='1'
						d='M0,32L120,53.3C240,75,480,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
				</svg>
				<svg
					className='wave-bottom-upper'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1440 320'>
					<path
						fill='#ECA796'
						fill-opacity='1'
						d='M0,64L80,74.7C160,85,320,107,480,138.7C640,171,800,213,960,197.3C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path>
				</svg>
				<svg
					className='wave-bottom-lower'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1440 320'>
					<path
						fill='#ddd'
						fill-opacity='1'
						d='M0,192L80,208C160,224,320,256,480,266.7C640,277,800,267,960,245.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path>
				</svg>
			</div>
			<section className='center'>
				<article className='typography'>
					<h3 className='clr-main'>Best class</h3>
					<h1>healthcare professionals</h1>
					<button className='cta btn'>Book an appointment</button>
				</article>
			</section>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	grid-column: col-start 1 / col-end 12;
	position: relative;
	overflow: hidden;

	padding-top: 10rem;
	width: 100%;

	.typography {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		margin-top: 20vh;
		height: 100%;

		h1 {
			margin-top: 2rem;
			margin-bottom: 5rem;
		}

		h2 {
			margin-top: 4rem;
		}
	}
	.wave {
		&-top-lower {
			position: absolute;
			top: 0;
			left: 0;
			transform: scale(3);
			transform-origin: top;
			z-index: -2;
		}
		&-top-upper {
			position: absolute;
			top: 0;
			left: 0;
			transform: translate(10%, -10%);
			z-index: -1;
		}
		&-bottom-upper {
			position: absolute;
			bottom: 0;
			left: 0;
			transform: scale(3);
			transform-origin: bottom;
			z-index: -2;
		}
		&-bottom-lower {
			position: absolute;
			bottom: 0;
			left: 0;
			transform: translateY(0%);
			z-index: -1;
		}
	}
`;

export default Hero;
