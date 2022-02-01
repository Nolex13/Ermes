import React, { FC, ReactElement } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import styled from 'styled-components';

interface BadgeProps {
	color: string;
}

const Badge = styled.span<BadgeProps>`
	font-size: 0.8em;
	width: 65px;
	text-align: center;
	padding: 2px 4px;
	border-radius: 2px;
	background-color: ${props => props.color};
`;

const UrlWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export enum Method {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',
	OPTION = 'OPTION',
}

interface Props {
	method: Method;
}

const methodToBadge: Map<Method, ReactElement> = new Map<Method, ReactElement>([
	[Method.POST, <Badge color="#f77f00">POST</Badge>],
	[Method.GET, <Badge color="#55a630">GET</Badge>],
	[Method.PUT, <Badge color="#3a86ff">PUT</Badge>],
	[Method.DELETE, <Badge color="#d62828">DELETE</Badge>],
	[Method.OPTION, <Badge color="#6c757d">OPTION</Badge>],
]);

export const Url: FC<Props> = ({ method }) => (
	<UrlWrapper>
		{methodToBadge.get(method)} get orders by id <HiMenuAlt1 />
	</UrlWrapper>
);
