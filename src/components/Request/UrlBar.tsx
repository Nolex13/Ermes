import React, { FC } from 'react';
import { Method, Request } from '../../data/Types';
import { useAppDispatch } from '../../utils/Hooks';
import { update } from '../../data/slices/RequestSlice';
import { Dropdown } from '../Dropdown/Dropdown';
import { Url } from './Url';
import { Button } from '../Button/Button';
import { RequestExecutor } from '../../logic/RequestExecutor';
import { setData, setLoading } from '../../data/slices/ResponseSlice';
import { uuid } from '../../utils/Uuid';

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

	const onSend = () => {
		const executor = new RequestExecutor();
		dispatch(setLoading(true));
		executor.executeUsing(request).then(response => {
			console.log('response', response);
			dispatch(
				setData({
					index: uuid(),
					body: response.json(),
					header: [],
					responseStatus: response.status,
				}),
			);
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
