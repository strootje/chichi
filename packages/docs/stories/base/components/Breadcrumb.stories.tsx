import { Breadcrumb, Content, Box } from 'chichi-base';
import { h } from 'preact';

export default {
	title: 'Base/Components/Breadcrumb',
	component: Breadcrumb
};

export const Basic = () => (
	<Box>
		<Breadcrumb>
			<Breadcrumb.Item>Bulma</Breadcrumb.Item>
			<Breadcrumb.Item>Documentation</Breadcrumb.Item>
			<Breadcrumb.Item>Components</Breadcrumb.Item>
			<Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
		</Breadcrumb>
	</Box>
);
