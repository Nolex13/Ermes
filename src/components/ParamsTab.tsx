import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input/Input';
import { MdOutlineDeleteOutline, MdAddCircleOutline } from 'react-icons/md';
import { uuid } from '../utils/Uuid';
import { set } from 'husky';

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;

	td,
	th {
		border: thin solid ${p => p.theme.light2};
		padding: 8px;
	}
`;

const TransparentInput = styled(Input)`
	background-color: ${p => p.theme.dark4};
	border: none;
	height: auto;
	padding: 0;
	width: 100%;

	&:focus {
		outline: none;
	}
`;

type Param = {
	index: string;
	key: string;
	value: string;
};

interface ParamRowProps {
	param: Param;
	onDelete: (index: string) => void;
}

const ParamRow: FC<ParamRowProps> = ({ param, onDelete }) => (
	<tr>
		<td>
			<MdOutlineDeleteOutline
				onClick={() => onDelete(param.index)}
				title="Delete this param"
			/>
		</td>
		<td>
			<TransparentInput defaultValue={param.key} />
		</td>
		<td>
			<TransparentInput defaultValue={param.value} />
		</td>
	</tr>
);

const ParamsControlHeader = styled.div`
	font-size: 20px;
	padding-bottom: 16px;
	display: flex;
	justify-content: flex-end;
`;

export const ParamsTab: FC = () => {
	const [params, setParams] = useState<Param[]>([]);
	const createNewEmptyParam = () => {
		const newParam: Param = {
			index: uuid(),
			key: '',
			value: '',
		};
		setParams([...params, newParam]);
	};
	const onDelete = (index: string) => {
		setParams(params.filter(p => p.index !== index));
	};
	const deleteAllParams = () => {
		setParams([]);
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
						<th></th>
						<th>Key</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					{params.map(param => (
						<ParamRow
							key={`${param.index}-param`}
							param={param}
							onDelete={onDelete}
						/>
					))}
				</tbody>
			</Table>
		</>
	);
};
