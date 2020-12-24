import styled from 'styled-components';

export const Nav = styled.div`
	display: flex;
	width: 100vw;
	margin: 0 auto;
	margin-top: 30px;
	justify-content: center;
`;
export const NavItem = styled.div`
	color: #fff;
	box-shadow: 5px 5px 5px #121212, -5px -5px 5px #717171;
	border-radius: 10px;
	padding: 10px 15px;
	margin: 0px 15px;
	border: none;
	cursor: pointer;
	transition: all 0.2s linear;
	&:hover {
		box-shadow: none;
	}
`;
