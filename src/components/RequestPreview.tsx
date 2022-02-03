import React, { ChangeEvent, FC, ReactElement } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import styled from 'styled-components';
import { IconDropdownElement, IconWithDropdown } from './Icon/IconWithDropdown';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { Method, Request } from '../data/Types';
import { TransparentInput } from './Input/TransparentInput';
import { useAppDispatch } from '../data/Hooks';
import { duplicate, remove, update } from '../data/slices/RequestSlice';
import { add } from '../data/slices/PagesSlice';

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

const methodToBadge: Map<Method, ReactElement> = new Map<Method, ReactElement>([
	[Method.POST, <Badge color="#f77f00">POST</Badge>],
	[Method.GET, <Badge color="#55a630">GET</Badge>],
	[Method.PUT, <Badge color="#3a86ff">PUT</Badge>],
	[Method.DELETE, <Badge color="#d62828">DELETE</Badge>],
	[Method.OPTION, <Badge color="#6c757d">OPTION</Badge>],
]);

interface Props {
	request: Request;
}

const Description = styled(TransparentInput)`
	margin: 0 16px;
`;

export const RequestPreview: FC<Props> = ({ request }) => {
	const dispatch = useAppDispatch();

	const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
		const updatedRequest = {
			...request,
			description: e.target.value,
		};
		dispatch(
			update({
				index: request.index,
				newValue: updatedRequest,
			}),
		);
	};
	const duplicateRequest = () => {
		dispatch(
			duplicate({
				index: request.index,
			}),
		);
	};
	const deleteRequest = () => {
		dispatch(remove({ index: request.index }));
	};
	const onSelect = () => {
		dispatch(add(request));
	};

	return (
		<UrlWrapper onClick={() => onSelect()}>
			{methodToBadge.get(request.method)}
			<Description
				value={request.description}
				onChange={e => onDescriptionChange(e)}
			/>
			<IconWithDropdown icon={<HiMenuAlt1 />}>
				<IconDropdownElement
					icon={<MdOutlineDeleteOutline />}
					onClick={() => duplicateRequest()}
				>
					Duplicate
				</IconDropdownElement>
				<IconDropdownElement
					icon={<MdOutlineDeleteOutline />}
					onClick={() => deleteRequest()}
				>
					Remove
				</IconDropdownElement>
			</IconWithDropdown>
		</UrlWrapper>
	);
};
