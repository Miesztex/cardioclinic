import React from 'react';
import styled from 'styled-components';
//logo
import logo from '../assets/logo-inline.png';
import { BiMenu } from 'react-icons/bi';
const Navbar = () => {
	return (
		<StyledNav>
			<div className='center'>
				<div className='content'>
					<img src={logo} alt='cardioclinic logo' className='logo' />
					<button className='toggle-btn'>
						<BiMenu />
					</button>
				</div>
			</div>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	display: flex;
	align-items: center;

	position: absolute;
	top: 2vh;
	left: 0;
	width: 100%;
	height: 10vh;
	z-index: 200;

	background: transparent;

	.content {
		flex-grow: 1; // chi

		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}

	.logo {
		height: 60%;
	}

	.toggle-btn {
		font-size: 4rem;
		background: transparent;
		border-color: transparent;
		color: var(--clr-grey-1);

		cursor: pointer;
		transition: var(--transition);
	}
`;
export default Navbar;
