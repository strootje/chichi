import { Progress } from 'chichi-base';
import { h } from 'preact';

export default {
	title: 'Base/Elements/Progress',
	component: Progress
};

export const Basic = () => (
	<div>
		<Progress color='primary' size='large'>I am a box</Progress>
		<Progress color='link'>I am a box</Progress>
		<Progress color='danger'>I am a box</Progress>
	</div>
);
