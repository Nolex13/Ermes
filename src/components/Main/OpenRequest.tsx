import React, { FC } from 'react';
import styled from 'styled-components';
import img from '../../images/increase-productivity.png';

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
		overflow: hidden;
		border-right: 0.15em solid orange;
		white-space: nowrap;
		margin: 0 auto;
		letter-spacing: 0.15em;
		animation: typing 3.5s steps(26, end), blink-caret 0.75s step-end infinite;
	}

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 600px;
		}
	}

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

export const OpenRequest: FC = () => (
	<OpenRequestContainer>
		<h3>Increase your productivity</h3>
		<h4>Create or open (double click) a request to start</h4>
		<Img />
	</OpenRequestContainer>
);
