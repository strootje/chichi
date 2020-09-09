import { Progress, ProgressProps } from 'chichi-base';
import { h } from 'preact';

export default {
	title: 'Base/Elements/Progress',
	component: Progress,
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

		value: {
			name: 'Value',
			control: {
				type: 'number'
			}
		},

		max: {
			name: 'Maximum Value',
			defaultValue: 100,
			control: {
				type: 'number'
			}
		}
	}
};

export const Basic = (props: ProgressProps) => (
	<Progress {...props}>Progress</Progress>
);
