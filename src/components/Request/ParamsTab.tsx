import React, { FC } from 'react';
import { uuid } from '../../utils/Uuid';
import { KeyValueMap } from '../../data/Types';
import { useAppDispatch, useAppSelector } from '../../utils/Hooks';
import { getRequestBy, update } from '../../data/slices/RequestSlice';
import { KeyValueTable } from './KeyValueTable';

interface Props {
	requestId: string;
}

export const ParamsTab: FC<Props> = ({ requestId }) => {
	const dispatch = useAppDispatch();
	const request = useAppSelector(state => getRequestBy(state, requestId));

	const onCreateNewRow = () => {
		dispatch(
			update({
				index: request.index,
				newValue: {
					...request,
					params: [
						...request.params,
						{
							index: uuid(),
							hidden: false,
							key: '',
							value: '',
						},
					],
				},
			}),
		);
	};
	const onDeleteRow = (index: string) => {
		dispatch(
			update({
				index: request.index,
				newValue: {
					...request,
					params: request.params.filter(p => p.index !== index),
				},
			}),
		);
	};
	const onDeleteAll = () => {
		dispatch(
			update({
				index: request.index,
				newValue: {
					...request,
					params: [],
				},
			}),
		);
	};
	const onUpdate = (newParam: KeyValueMap) => {
		dispatch(
			update({
				index: request.index,
				newValue: {
					...request,
					params: request.params.map(p =>
						p.index === newParam.index ? newParam : p,
					),
				},
			}),
		);
	};
	return (
		<KeyValueTable
			rows={request.params}
			onCreateNewRow={onCreateNewRow}
			onDeleteRow={onDeleteRow}
			onDeleteAll={onDeleteAll}
			onUpdate={onUpdate}
		/>
	);
};
