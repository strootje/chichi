import { action } from '@storybook/addon-actions';
import { Button, ButtonProps } from 'chichi-base';
import { h } from 'preact';
import { fixChecks } from '../../../helpers/Controls';

export default {
	title: 'Base/Elements/Button',
	component: Button,
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

		styles: {
			name: 'Styles',
			defaultValue: [],
			control: {
				type: 'inline-check',
				options: ['light', 'outlined', 'rounded', 'inverted']
			}
		}
	}
};

export const Basic = ({ styles, ...props }: (ButtonProps & { styles: [] })) => (
	<Button {...props} {...fixChecks(styles)} onClick={action('btnOnClick')}>
		I am a button
	</Button>
);
