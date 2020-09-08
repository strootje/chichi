import { Table } from 'chichi-base';
import { h } from 'preact';

export default {
	title: 'Base/Elements/Table',
	component: Table
};

export const Basic = () => (
	<Table>
		<Table.Head>
			<Table.Row>
				<Table.CellHeader>col 1</Table.CellHeader>
				<Table.CellHeader>col 2</Table.CellHeader>
			</Table.Row>
		</Table.Head>

		<Table.Body>
			<Table.Row>
				<Table.Cell>val 1</Table.Cell>
				<Table.Cell>val 2</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table>
);
