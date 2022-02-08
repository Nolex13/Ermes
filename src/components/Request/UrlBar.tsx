import React, { FC } from 'react';
import { Method, Request } from '../../data/Types';
import { useAppDispatch } from '../../utils/Hooks';
import { update } from '../../data/slices/RequestSlice';
import { Dropdown } from '../Dropdown/Dropdown';
import { Url } from './Url';
import { Button } from '../Button/Button';

interface Props {
	request: Request;
}

export const UrlBar: FC<Props> = ({ request }) => {
	const dispatch = useAppDispatch();

	const onMethodChange = (newMethod: string) => {
		const updatedRequest: Request = {
			...request,
			method: newMethod as Method,
		};
		dispatch(
			update({
				index: request.index,
				newValue: updatedRequest,
			}),
		);
	};
	return (
		<>
			<Dropdown
				initialValue={request.method.valueOf()}
				items={['POST', 'GET', 'PUT', 'DELETE', 'OPTION']}
				onChange={onMethodChange}
			/>
			<Url requestId={request.index} />
			<Button> Send </Button>
		</>
	);
};
