import { SubTitle, Title, TitleProps } from 'chichi-base';
import { Fragment, h } from 'preact';

export default {
	title: 'Base/Elements/Title',
	component: Title,
	argTypes: {
		spaced: {
			name: 'Is Spaced?',
			defaultValue: false,
			control: {
				type: 'boolean'
			}
		}
	}
};

export const Basic = (props: TitleProps) => (
	<Fragment>
		{Array.apply(null, Array(5)).map((_, i) => (
			<Fragment>
				<Title size={i + 1} {...props}>Title {i + 1}{i === 2 && ' (default size)'}</Title>
				<SubTitle size={i + 3}  {...props}>Subtitle {i + 3}{i === 2 && ' (default size)'}</SubTitle>
			</Fragment>
		))}
	</Fragment>
);
