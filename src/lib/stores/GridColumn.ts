import { writable, type Writable } from 'svelte/store';
import { type IGridColumn } from '$interfaces/IGridColumn.js';

export const gridColumn: Writable<IGridColumn> = writable<IGridColumn>({
	field: 'fieldName',
	headerName: 'Header Name',
	width: '5rem',
	headerClass: 'headerClass',
	cellClass: 'cellClass',
	editable: false,
	sortable: false,
	type: 'string',
	minWidth: 0,
	maxWidth: '40rem',
	headerTooltip: 'Tooltip',
	hide: false,
	defaultValue: 'default value'
});
