import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

import data from '../constants/doctors';

function App() {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);

	// 1. Set classes of active/last/next
	// 2. Translate slides
	// 3. Add arrow button function
	// 4. Add auto interval function with auto-clean on re-render
	// X. Prevent moving out of the indexes range
	// X. prevent idxs out of range

	// ======= PREVENT IDXS OUT OF RANGE ========
	useEffect(() => {
		const lastIndex = people.length - 1;
		if (index < 0) setIndex(lastIndex);
		else if (index > lastIndex) setIndex(0);
	}, [index, people]);

	// ======= AUTO-SLIDE =======
	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index - 1);
		}, 10000);
		return () => clearInterval(slider);
		//prevent summing intervals
	}, [index]); // even if idx forced change

	const peopleList = people.map((person, personIdx) => {
		const { id, image, name, title, quote } = person;

		// ======= CLASSES ===========
		// 1. set classes
		// 2. translate slides (css)
		let position = 'nextSlide'; // default
		if (personIdx === index) position = 'activeSlide';
		// if is after current
		// or if is at last idx and displayed is first person
		if (
			personIdx === index - 1 ||
			(index === 0 && personIdx === people.length - 1)
		) {
			position = 'lastSlide';
		}

		//======= RETURN ========
		return (
			<article key={id} className={position}>
				<img src={image} alt={name} className='person-img' />
				<h4>{name}</h4>
				<p className='title'>{title}</p>
				<p className='text'>{quote}</p>
				<Link to='/' className='btn'>
					Read more
				</Link>
			</article>
		);
	});

	return (
		<StyledSection className='section'>
			<h2>Doctors</h2>
			<div className='section-center'>
				{peopleList}
				{/* 4. Arrow button function */}
				<button className='prev' onClick={() => setIndex(index - 1)}>
					<FiChevronLeft />
				</button>
				<button className='next' onClick={() => setIndex(index + 1)}>
					<FiChevronRight />
				</button>
			</div>
		</StyledSection>
	);
}

// ===== STYLES =======
const StyledSection = styled.section`
	grid-column: col-start 1 / col-end 12;

	h2 {
		display: flex;
		justify-content: center;
		align-items: center;

		margin-bottom: 2rem;
		text-align: center;
	}

	// ===== CARD CONTAINER =====
	.section-center {
		position: relative;
		display: flex;

		margin: 0 auto;
		margin-top: 4rem;
		margin-bottom: 2rem;
		max-width: 800px;
		width: 80vw;
		/* have to have a height */
		height: 450px;

		text-align: center;
		overflow: hidden;
	}

	.person-img {
		border-radius: 50%;
		margin-bottom: 1rem;
		width: 150px;
		height: 150px;
		object-fit: cover;
		border: 4px solid var(--clr-grey-8);
		box-shadow: var(--dark-shadow);
	}

	article h4 {
		margin-bottom: 0.25rem;
	}

	.title {
		text-transform: capitalize;
		margin-bottom: 0.75rem;
		color: var(--clr-grey-3);
	}

	.text {
		max-width: 35em;
		margin: 0 auto;
		margin-top: 2rem;
		margin-bottom: 4rem;
		line-height: 2;
		color: var(--clr-grey-5);
	}

	.btn {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
	}

	// ====== CHEVRONS ======
	.prev,
	.next {
		display: grid;
		place-items: center;
		position: absolute;
		top: 200px;
		width: 2rem;
		height: 2rem;
		transform: translateY(-50%);

		background: var(--clr-grey-5);
		color: var(--clr-white);
		border-color: transparent;
		border-radius: var(--radius);
		font-size: 1rem;

		cursor: pointer;
		transition: var(--transition);
	}

	.prev:hover,
	.next:hover {
		background: var(--clr-primary-dark);
	}

	.prev {
		left: 0;
	}

	.next {
		right: 0;
	}

	@media (min-width: 800px) {
		.text {
			max-width: 45em;
		}

		.prev,
		.next {
			width: 2rem;
			height: 2rem;
			font-size: 1.5rem;
		}
	}

	article {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: var(--transition);
	}

	/* ==== Slides movement  =====*/
	article.activeSlide {
		opacity: 1;
		transform: translateX(0);
	}

	article.lastSlide {
		transform: translateX(-100%);
	}

	article.nextSlide {
		transform: translateX(100%);
	}
`;

export default App;
