import { Divider } from '@chichi/extensions';
import { h } from 'preact';

export default {
	title: 'Extensions/Layout/Divider',
	component: Divider
};

const Block = () => (<div style={{ flex: 1, height: '200px', 'background-color': '#f4f5f8' }}></div>);

export const Basic = () => (
	<div>
		<Block />
		<Divider>Example</Divider>
		<Block />
	</div>
);

export const Vertical = () => (
	<div style={{ display: 'flex' }}>
		<Block />
		<Divider vertical>Example</Divider>
		<Block />
	</div>
);
