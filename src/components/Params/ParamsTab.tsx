import React, { FC } from 'react';
import styled from 'styled-components';
import { MdAddCircleOutline, MdOutlineDeleteOutline } from 'react-icons/md';
import { uuid } from '../../utils/Uuid';
import { Param } from '../../data/Types';
import { useAppDispatch, useAppSelector } from '../../data/Hooks';
import { getRequestBy, update } from '../../data/slices/RequestSlice';
import { ParamRow } from './ParamRow';

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;

	td,
	th {
		border: thin solid ${p => p.theme.light2};
		padding: 8px;
	}
`;

const ParamsControlHeader = styled.div`
	font-size: 20px;
	padding-bottom: 16px;
	display: flex;
	justify-content: flex-end;
`;

interface Props {
	requestId: string;
}

export const ParamsTab: FC<Props> = ({ requestId }) => {
	const dispatch = useAppDispatch();
	const request = useAppSelector(state => getRequestBy(state, requestId));

	const createNewEmptyParam = () => {
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
	const onDelete = (index: string) => {
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
	const deleteAllParams = () => {
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
	const onParamChange = (newParam: Param) => {
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
		<>
			<ParamsControlHeader>
				<MdOutlineDeleteOutline
					onClick={() => deleteAllParams()}
					title="Delete all params"
				/>
				<MdAddCircleOutline
					onClick={() => createNewEmptyParam()}
					title="Add new param"
				/>
			</ParamsControlHeader>
			<Table>
				<thead>
					<tr>
						<th />
						<th>Key</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					{request.params.map(param => (
						<ParamRow
							key={`${param.index}-param`}
							param={param}
							onDelete={onDelete}
							onChange={onParamChange}
						/>
					))}
				</tbody>
			</Table>
		</>
	);
};
