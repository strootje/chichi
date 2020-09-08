import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface TableProps extends JSX.DOMAttributes<HTMLTableElement> {
	bordered?: boolean;
	striped?: boolean;
	narrow?: boolean;
	hoverable?: boolean;
	fullwidth?: boolean;
}

export interface TableHeadProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export interface TableFootProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export interface TableBodyProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export interface TableRowProps extends JSX.DOMAttributes<HTMLTableRowElement> {
	selected?: boolean;
}

export interface TableCellProps extends JSX.DOMAttributes<HTMLTableCellElement> {
}

export interface TableCellHeaderProps extends JSX.DOMAttributes<HTMLTableHeaderCellElement> {
}

interface SubComponents {
	Head: FunctionalComponent<TableHeadProps>;
	Foot: FunctionalComponent<TableFootProps>;
	Body: FunctionalComponent<TableBodyProps>;
	Row: FunctionalComponent<TableRowProps>;
	Cell: FunctionalComponent<TableCellProps>;
	CellHeader: FunctionalComponent<TableCellHeaderProps>;
}

export const Table: (FunctionalComponent<TableProps> & SubComponents) = ({ children, bordered, striped, narrow, hoverable, fullwidth, ...props }) => (
	<table class={ClassNames('table', {
		['is-bordered']: !!bordered,
		['is-striped']: !!striped,
		['is-narrow']: !!narrow,
		['is-hoverable']: !!hoverable,
		['is-fullwidth']: !!fullwidth
	})} {...props}>{children}</table>
);

export const TableHead: FunctionalComponent<TableHeadProps> = ({ children, ...props }) => (
	<thead {...props}>{children}</thead>
);

export const TableFoot: FunctionalComponent<TableFootProps> = ({ children, ...props }) => (
	<tfoot {...props}>{children}</tfoot>
);

export const TableBody: FunctionalComponent<TableBodyProps> = ({ children, ...props }) => (
	<tfoot {...props}>{children}</tfoot>
);

export const TableRow: FunctionalComponent<TableRowProps> = ({ children, selected, ...props }) => (
	<tr class={ClassNames({ ['is-selected']: !!selected })} {...props}>{children}</tr>
);

export const TableCell: FunctionalComponent<TableCellProps> = ({ children, ...props }) => (
	<td {...props}>{children}</td>
);

export const TableCellHeader: FunctionalComponent<TableCellHeaderProps> = ({ children, ...props }) => (
	<th {...props}>{children}</th>
);

Table.Head = TableHead;
Table.Foot = TableFoot;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.CellHeader = TableCellHeader;
