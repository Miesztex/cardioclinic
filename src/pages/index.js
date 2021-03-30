import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Perks from '../components/Perks';
import About from '../components/About';
import Slider from '../components/Slider';

export default () => {
	return (
		<Layout>
			<Hero />
			<Perks />
			<About />
			<Slider />
		</Layout>
	);
};
// ...GatsbyImageSharpFluid
