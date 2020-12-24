import styled from 'styled-components';

export const Homepage = styled.div`
	min-height: 100vh;
`;

export const HomeBody = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 200px;
`;

export const AvatarFrame = styled.div`
	border-radius: 50%;
	padding: 5px;
	box-shadow: 10px 10px 5px #121212, -10px -10px 10px #717171;
	&:hover {
		box-shadow: none;
	}
`;

export const HomeContent = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	color: #fff;
`;

export const SocialIcons = styled.div`
	display: flex;
	& > * {
		margin: 20px 15px;
		cursor: pointer;
	}
`;
