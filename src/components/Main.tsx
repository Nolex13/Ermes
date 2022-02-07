import styled from 'styled-components';
import React, { FC } from 'react';
import { useAppSelector } from '../data/Hooks';
import { getActivePage } from '../data/slices/PagesSlice';
import { Paginator } from './Paginator/Paginator';
import { RequestBody } from './RequestBody';
import img from '../images/increase-productivity.png';

const Container = styled.div`
	background: ${props => props.theme.dark4};
	color: ${props => props.theme.light1};
	flex: 1 1;
	padding: 16px;
`;

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

const Img = styled.div`
	background-image: url(${img});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	height: 45%;
	width: 45%;
`;

const OpenRequestContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	align-items: center;
	justify-content: center;

	& h3,
	& h4 {
		font-weight: 300;
		font-size: 2.5em;
	}

	& h4 {
		margin-top: 16px;
		font-size: 2em;
	}

	& h3 {
		overflow: hidden; /* Ensures the content is not revealed until the animation */
		border-right: 0.15em solid orange; /* The typwriter cursor */
		white-space: nowrap; /* Keeps the content on a single line */
		margin: 0 auto; /* Gives that scrolling effect as the typing happens */
		letter-spacing: 0.15em; /* Adjust as needed */
		animation: typing 3.5s steps(26, end), blink-caret 0.75s step-end infinite;
	}

	/* The typing effect */
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 600px;
		}
	}

	/* The typewriter cursor effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: orange;
		}
	}
`;

const OpenRequest: FC = () => (
	<OpenRequestContainer>
		<h3>Increase your productivity</h3>
		<h4>Create or open a request to start</h4>
		<Img />
	</OpenRequestContainer>
);

export const Main: FC = () => {
	const pagination = useAppSelector(state => state.pagination);

	return (
		<Wrapper>
			<Paginator />
			<Container>
				{pagination.pages.length > 0 && (
					<RequestBody request={getActivePage(pagination)} />
				)}
				{pagination.pages.length === 0 && <OpenRequest />}
			</Container>
		</Wrapper>
	);
};
