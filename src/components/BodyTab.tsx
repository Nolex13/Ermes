import React, { FC } from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
	background-color: ${p => p.theme.dark4};
	color: ${p => p.theme.light1};
	width: 100%;
	height: 500px;
	padding: 8px;

	&:focus {
		outline: none;
	}
`;

export const BodyTab: FC = () => <TextArea>Some random content</TextArea>;
