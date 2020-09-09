import { Content, ContentProps } from 'chichi-base';
import { h } from 'preact';

export default {
	title: 'Base/Elements/Content',
	component: Content,
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

export const WithOrderedListWithTypes = (props: ContentProps) => (
	<Content {...props}>
		{["1", "A", "a", "I", "i"].map(type => (
			<ol type={type}>
				<li>Coffee</li>
				<li>Tea</li>
				<li>Milk</li>
			</ol>
		))}
	</Content>
);

export const WithOrderedListWithClasses = (props: ContentProps) => (
	<Content {...props}>
		{["lower-alpha", "lower-roman", "upper-alpha", "upper-roman"].map(type => (
			<ol class={"is-" + type}>
				<li>Coffee</li>
				<li>Tea</li>
				<li>Milk</li>
			</ol>
		))}
	</Content>
);

export const WithHeaders = (props: ContentProps) => (
	<Content {...props}>
		<h1>header 1</h1>
		<h2>header 2</h2>
		<h3>header 3</h3>
		<h4>header 4</h4>
		<h5>header 5</h5>
		<h6>header 6</h6>
	</Content>
);
