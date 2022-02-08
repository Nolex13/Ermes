import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/Hooks';
import { getRequestBy, update } from '../../data/slices/RequestSlice';
import { Input } from '../Input/Input';

interface Props {
	requestId: string;
}

export const Url: FC<Props> = ({ requestId }) => {
	const request = useAppSelector(state => getRequestBy(state, requestId));
	const dispatch = useAppDispatch();

	const onUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedRequest = {
			...request,
			url: e.target.value,
		};
		dispatch(
			update({
				index: request.index,
				newValue: updatedRequest,
			}),
		);
	};

	return <Input value={request.url} onChange={e => onUrlChange(e)} />;
};
