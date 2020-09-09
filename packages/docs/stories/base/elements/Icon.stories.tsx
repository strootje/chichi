import { Icon, IconProps } from 'chichi-base';
import { h } from 'preact';

export default {
	title: 'Base/Elements/Icon',
	component: Icon,
	argTypes: {
		color: {
			name: 'Color',
			control: {
				type: 'select',
				options: ['white', 'light', 'dark', 'black', 'text', 'primary', 'link', 'info', 'success', 'warning', 'danger']
			}
		},

		size: {
			name: 'Size',
			defaultValue: 'normal',
			control: {
				type: 'inline-radio',
				options: ['small', 'normal', 'medium', 'large']
			}
		},

		icon: {
			name: 'Icon',
			defaultValue: 'fas fa-home',
			control: {
				type: 'text'
			}
		}
	}
};

export const Basic = (props: IconProps) => (
	<Icon {...props} />
);
