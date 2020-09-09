import { action } from '@storybook/addon-actions';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbProps, Icon } from 'chichi-base';
import { h } from 'preact';

export default {
	title: 'Base/Components/Breadcrumb',
	component: Breadcrumb,
	subcomponents: {
		BreadcrumbItem
	},
	argTypes: {
		align: {
			name: 'Alignment',
			defaultValue: 'left',
			control: {
				type: 'inline-radio',
				options: ['left', 'centered', 'right']
			}
		},

		separator: {
			name: 'Separator',
			defaultValue: 'bullet',
			control: {
				type: 'inline-radio',
				options: ['arrow', 'bullet', 'dot', 'succeeds']
			}
		},

		size: {
			name: 'Size',
			defaultValue: 'normal',
			control: {
				type: 'inline-radio',
				options: ['small', 'normal', 'medium', 'large']
			}
		}
	}
};

export const Basic = (props: BreadcrumbProps) => (
	<Box>
		<Breadcrumb {...props}>
			<Breadcrumb.Item onClick={action('clicked on item 1')}>Bulma</Breadcrumb.Item>
			<Breadcrumb.Item onClick={action('clicked on item 2')}>Documentation</Breadcrumb.Item>
			<Breadcrumb.Item onClick={action('clicked on item 3')}>Components</Breadcrumb.Item>
			<Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
		</Breadcrumb>
	</Box>
);



export const WithIcons = (props: BreadcrumbProps) => (
	<Box>
		<Breadcrumb {...props}>
			<Breadcrumb.Item onClick={action('clicked on item 1')}><Icon size='small' icon='fas fa-home' /><span>Bulma</span></Breadcrumb.Item>
			<Breadcrumb.Item onClick={action('clicked on item 2')}><Icon size='small' icon='fas fa-book' /><span>Documentation</span></Breadcrumb.Item>
			<Breadcrumb.Item onClick={action('clicked on item 3')}><Icon size='small' icon='fas fa-puzzle-piece' /><span>Components</span></Breadcrumb.Item>
			<Breadcrumb.Item active><Icon size='small' icon='fas fa-thumbs-up' /><span>Breadcrumb</span></Breadcrumb.Item>
		</Breadcrumb>
	</Box>
);
