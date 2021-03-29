import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Perks from '../components/Perks';
import About from '../components/About';

export default () => {
	return (
		<Layout>
			<Hero />
			<Perks />
			<About />
		</Layout>
	);
};
// ...GatsbyImageSharpFluid
