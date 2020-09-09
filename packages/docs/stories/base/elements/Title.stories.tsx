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
				<Title size={(i + 1) as (1 | 2 | 3 | 4 | 5 | 6)} {...props}>Title {i + 1}{i === 2 && ' (default size)'}</Title>
				<SubTitle size={(i + 3) as (3 | 4 | 5 | 6 | 7)}  {...props}>Subtitle {i + 3}{i === 2 && ' (default size)'}</SubTitle>
			</Fragment>
		))}
	</Fragment>
);
