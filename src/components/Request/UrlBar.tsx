import React, { FC } from 'react';
import { Method, Request } from '../../data/Types';
import { useAppDispatch, useAppSelector } from '../../utils/Hooks';
import { getRequestBy, update } from '../../data/slices/RequestSlice';
import { Dropdown } from '../Dropdown/Dropdown';
import { Url } from './Url';
import { Button } from '../Button/Button';
import { RequestExecutor } from '../../logic/RequestExecutor';
import { setData, setLoading } from '../../data/slices/ResponseSlice';

interface Props {
	requestId: string;
}

export const UrlBar: FC<Props> = ({ requestId }) => {
	const dispatch = useAppDispatch();
	const request = useAppSelector(state => getRequestBy(state, requestId));

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

	const onSend = () => {
		const executor = new RequestExecutor();
		dispatch(setLoading(true));
		executor.executeUsing(request).then(response => {
			dispatch(setData(response));
		});
	};

	return (
		<>
			<Dropdown
				initialValue={request.method.valueOf()}
				items={['POST', 'GET', 'PUT', 'DELETE', 'OPTION']}
				onChange={onMethodChange}
			/>
			<Url requestId={request.index} />
			<Button onClick={onSend}> Send </Button>
		</>
	);
};
