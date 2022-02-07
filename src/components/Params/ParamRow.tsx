import React, { ChangeEvent, FC } from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { TransparentInput } from '../Input/TransparentInput';
import { Param } from '../../data/Types';

interface Props {
	param: Param;
	onDelete: (index: string) => void;
	onChange: (param: Param) => void;
}

export const ParamRow: FC<Props> = ({ param, onDelete, onChange }) => {
	const onKeyChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange({
			...param,
			key: e.target.value,
		});
	};
	const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange({
			...param,
			value: e.target.value,
		});
	};
	return (
		<tr>
			<td>
				<MdOutlineDeleteOutline
					onClick={() => onDelete(param.index)}
					title="Delete this param"
				/>
			</td>
			<td>
				<TransparentInput
					value={param.key}
					onChange={(e: ChangeEvent<HTMLInputElement>) => onKeyChange(e)}
				/>
			</td>
			<td>
				<TransparentInput
					value={param.value}
					onChange={(e: ChangeEvent<HTMLInputElement>) => onValueChange(e)}
				/>
			</td>
		</tr>
	);
};
