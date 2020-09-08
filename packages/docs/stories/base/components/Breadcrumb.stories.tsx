import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbProps } from 'chichi-base';
import { Fragment, h } from 'preact';

export default {
	title: 'Base/Components/Breadcrumb',
	component: Breadcrumb,
	subcomponents: {
		BreadcrumbItem
	}
};

const Example = (props: BreadcrumbProps) => (
	<Breadcrumb {...props}>
		<Breadcrumb.Item>Bulma</Breadcrumb.Item>
		<Breadcrumb.Item>Documentation</Breadcrumb.Item>
		<Breadcrumb.Item>Components</Breadcrumb.Item>
		<Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
	</Breadcrumb>
);

export const Basic = () => (
	<Box><Example /></Box>
);

export const WithAlignment = () => (
	<Fragment>
		<Box><Example align='left' /></Box>
		<Box><Example align='centered' /></Box>
		<Box><Example align='right' /></Box>
	</Fragment>
);
