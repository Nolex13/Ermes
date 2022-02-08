import React, { FC } from 'react';
import { uuid } from '../../utils/Uuid';
import { KeyValueMap } from '../../data/Types';
import { useAppDispatch, useAppSelector } from '../../utils/Hooks';
import { getRequestBy, update } from '../../data/slices/RequestSlice';
import { KeyValueTable } from './KeyValueTable';

interface Props {
	requestId: string;
}

export const HeadersTab: FC<Props> = ({ requestId }) => {
	const dispatch = useAppDispatch();
	const request = useAppSelector(state => getRequestBy(state, requestId));

	const onCreateNewRow = () => {
		dispatch(
			update({
				index: request.index,
				newValue: {
					...request,
					header: [
						...request.header,
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
					header: request.header.filter(p => p.index !== index),
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
					header: [],
				},
			}),
		);
	};
	const onUpdate = (newHeader: KeyValueMap) => {
		dispatch(
			update({
				index: request.index,
				newValue: {
					...request,
					header: request.header.map(p =>
						p.index === newHeader.index ? newHeader : p,
					),
				},
			}),
		);
	};
	return (
		<KeyValueTable
			rows={request.header}
			onCreateNewRow={onCreateNewRow}
			onDeleteRow={onDeleteRow}
			onDeleteAll={onDeleteAll}
			onUpdate={onUpdate}
		/>
	);
};
