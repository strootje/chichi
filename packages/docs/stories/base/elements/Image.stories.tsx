import { Image } from 'chichi-base';
import { h } from 'preact';

export default {
	title: 'Base/Elements/Image',
	component: Image
};

export const Basic = () => (
	<Image dimensions="3by2" rounded src="https://placekitten.com/g/150/100" />
);
