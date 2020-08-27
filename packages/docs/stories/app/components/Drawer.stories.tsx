import { Drawer } from 'chichi-app';
import { Box } from 'chichi-base/src';
import { h } from 'preact';

export default {
	title: 'App/Components/Drawer',
	component: Drawer
};

export const Basic = () => (
	<Box>
		<Drawer open>
			this is some content
		</Drawer>
	</Box>
);
