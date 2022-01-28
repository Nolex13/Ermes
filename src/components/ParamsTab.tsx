import { FC } from 'react';
import { Table } from 'react-bootstrap';

export const ParamsTab: FC = () => (
	<Table striped bordered hover>
		<thead>
			<tr>
				<th></th>
				<th>Key</th>
				<th>Value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td></td>
				<td>orderId</td>
				<td>69</td>
			</tr>
			<tr>
				<td></td>
				<td>documentId</td>
				<td>90</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<input type="text" />
				</td>
				<td>
					<input type="text" />
				</td>
			</tr>
		</tbody>
	</Table>
);
