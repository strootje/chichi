import { Stack } from '@chichi/app';
import { h } from 'preact';

export default {
	title: 'App/Layout/Stack',
	component: Stack
};

export const Basic = () => (
	<Stack>
		<div>item 1</div>
		<div>item 2</div>
		<div>item 3</div>
	</Stack>
);

export const Horizontal = () => (
	<Stack orientation='horizontal'>
		<div>item 1</div>
		<div>item 2</div>
		<div>item 3</div>
	</Stack>
);
