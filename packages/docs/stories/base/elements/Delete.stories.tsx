import { Delete, DeleteProps } from 'chichi-base';
import { h } from 'preact';

export default {
	title: 'Base/Elements/Delete',
	component: Delete,
	argTypes: {
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

export const Basic = (props: DeleteProps) => (
	<Delete {...props}>I am a Delete</Delete>
);
