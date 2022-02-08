import React, { FC } from 'react';
import 'jsoneditor/dist/jsoneditor.css';
import { useAppDispatch, useAppSelector } from '../../utils/Hooks';
import { getRequestBy, update } from '../../data/slices/RequestSlice';
import { JsonEditor } from './JsonEditor';

interface Props {
	requestId: string;
}

export const BodyTab: FC<Props> = ({ requestId }) => {
	const dispatch = useAppDispatch();
	const request = useAppSelector(state => getRequestBy(state, requestId));

	const onChange = (value: object | null) => {
		dispatch(
			update({
				index: request.index,
				newValue: {
					...request,
					body: value,
				},
			}),
		);
	};
	return <JsonEditor initialValue={request.body} onChange={onChange} />;
};
