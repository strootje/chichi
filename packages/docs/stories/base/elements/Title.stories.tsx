import { Title, SubTitle } from 'chichi-base';
import { Fragment, h } from 'preact';

export default {
	title: 'Base/Elements/Title',
	component: Title
};

export const Basic = () => (
	<Fragment>
		<Title size={1}>I am a Title</Title>
		<SubTitle size={3}>I am a SubTitle</SubTitle>
	</Fragment>
);
