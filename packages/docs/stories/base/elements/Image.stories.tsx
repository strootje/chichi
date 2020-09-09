import { Box, Image, ImageProps } from 'chichi-base';
import { h } from 'preact';

export default {
	title: 'Base/Elements/Image',
	component: Image,
	argTypes: {
		dimensions: {
			name: 'Dimensions',
			control: {
				type: 'inline-radio',
				defaultValue: '3by2',
				options: [
					'16x16', '24x24', '32x32', '48x48', '64x64', '96x96', '128x128',
					'square', '1by1', '5by4', '4by3', '3by2', '5by3', '16by9', '2by1', '3by1', '3by4', '2by3', '3by5', '9by16', '1by2', '1by3'
				]
			}
		},

		src: {
			name: 'Source',
			defaultValue: 'https://placekitten.com/g/150/100',
			control: {
				type: 'text'
			}
		}
	}
};

export const Basic = (props: ImageProps) => (
	<Box><Image {...props} /></Box>
);
