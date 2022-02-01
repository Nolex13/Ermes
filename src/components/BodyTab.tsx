import React, { FC } from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
	width: 100%;
	height: 500px;
	padding: 8px;
`;

export const BodyTab: FC = () => <TextArea>Some random content</TextArea>;
