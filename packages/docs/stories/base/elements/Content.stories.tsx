import { Content } from '@chichi/base';
import { h } from 'preact';

export default {
	title: 'Base/Elements/Content',
	component: Content
};

export const WithOrderedListWithTypes = () => (
	<Content>
		{["1", "A", "a", "I", "i"].map(type => (
			<ol type={type}>
				<li>Coffee</li>
				<li>Tea</li>
				<li>Milk</li>
			</ol>
		))}
	</Content>
);

export const WithOrderedListWithClasses = () => (
	<Content>
		{["lower-alpha", "lower-roman", "upper-alpha", "upper-roman"].map(type => (
			<ol class={"is-" + type}>
				<li>Coffee</li>
				<li>Tea</li>
				<li>Milk</li>
			</ol>
		))}
	</Content>
);

export const WithHeaders = () => (
	<Content>
		<h1>header 1</h1>
		<h2>header 2</h2>
		<h3>header 3</h3>
		<h4>header 4</h4>
		<h5>header 5</h5>
		<h6>header 6</h6>
	</Content>
);
