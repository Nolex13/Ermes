import styled from 'styled-components';
import { IoMdCloseCircleOutline } from 'react-icons/io';

export const Pages = styled.ul`
	display: flex;
	background-color: ${p => p.theme.dark6};
	color: ${p => p.theme.light1};
	list-style-type: none;
	align-items: center;
`;

export const Page = styled.li`
	display: flex;
	align-items: center;
	padding: 16px;
	border-right: thin solid ${p => p.theme.light2};

	&.active {
		background-color: ${p => p.theme.dark3};
	}
`;

export const PageDescription = styled.span`
	cursor: pointer;
	margin-right: 8px;
`;

export const PageCloseButton = styled(IoMdCloseCircleOutline)`
	cursor: pointer;
	font-size: 16px;
`;
