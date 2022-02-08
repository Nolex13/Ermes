import React, { FC } from 'react';
import { MdAddCircleOutline, MdOutlineDeleteOutline } from 'react-icons/md';
import { KeyValueRow } from './KeyValueRow';
import { KeyValueMap } from '../../data/Types';
import styled from 'styled-components';

const ParamsControlHeader = styled.div`
	font-size: 20px;
	padding-bottom: 16px;
	display: flex;
	justify-content: flex-end;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;

	td,
	th {
		border: thin solid ${p => p.theme.light2};
		padding: 8px;
	}
`;

interface Props {
	rows: KeyValueMap[];
	onCreateNewRow: () => void;
	onDeleteRow: (index: string) => void;
	onDeleteAll: () => void;
	onUpdate: (row: KeyValueMap) => void;
}

export const KeyValueTable: FC<Props> = ({
	rows,
	onCreateNewRow,
	onDeleteRow,
	onDeleteAll,
	onUpdate,
}) => (
	<>
		<ParamsControlHeader>
			<MdOutlineDeleteOutline onClick={onDeleteAll} title="Delete all rows" />
			<MdAddCircleOutline onClick={onCreateNewRow} title="Add new row" />
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
				{rows.map(row => (
					<KeyValueRow
						key={`${row.index}`}
						param={row}
						onDelete={() => onDeleteRow(row.index)}
						onChange={onUpdate}
					/>
				))}
			</tbody>
		</Table>
	</>
);
