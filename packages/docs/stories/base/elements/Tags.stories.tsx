import { Control, Field, Tag, TagProps } from 'chichi-base';
import { Fragment, h } from 'preact';
import { checks } from '../../../helpers/Controls';

export default {
	title: 'Base/Elements/Tag',
	component: Tag,
	argTypes: {
		color: {
			name: 'Color',
			control: {
				type: 'select',
				options: ['white', 'light', 'dark', 'black', 'text', 'primary', 'link', 'info', 'success', 'warning', 'danger']
			}
		},

		light: {
			name: 'Is Light?',
			defaultValue: false,
			control: {
				type: 'boolean'
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

		styles: {
			name: 'Styles',
			defaultValue: [],
			control: {
				type: 'inline-check',
				options: ['delete', 'rounded']
			}
		}
	}
};

interface StoryProps {
	styles: string[];
}

export const Basic = ({ styles, ...props }: (TagProps & StoryProps)) => (
	<Tag {...props} {...checks(styles)}>Label</Tag>
);

export const WithList = ({ styles, ...props }: (TagProps & StoryProps)) => (
	<Tag.List>
		{Array.apply(null, Array(20)).map((_, i) => (
			<Tag {...props} {...checks(styles)}>Tag {i + 1}</Tag>
		))}
	</Tag.List>
);

export const WithAddons = () => (
	<Fragment>
		<Tag.List addons>
			<Tag>Package</Tag>
			<Tag color='primary'>Bulma</Tag>
		</Tag.List>

		<Tag.List addons>
			<Tag color='danger'>Alex Smith</Tag>
			<Tag delete />
		</Tag.List>

		<Field grouped multiline>
			<Control>
				<Tag.List addons>
					<Tag color='dark'>npm</Tag>
					<Tag color='info' />
				</Tag.List>
			</Control>

			<Control>
				<Tag.List addons>
					<Tag color='dark'>build</Tag>
					<Tag color='success'>passing</Tag>
				</Tag.List>
			</Control>

			<Control>
				<Tag.List addons>
					<Tag color='dark'>chat</Tag>
					<Tag color='primary'>on gitter</Tag>
				</Tag.List>
			</Control>
		</Field>

		<Field grouped multiline>
			<Control>
				<Tag.List addons>
					<Tag color='link'>Technology</Tag>
					<Tag delete />
				</Tag.List>
			</Control>

			<Control>
				<Tag.List addons>
					<Tag color='link'>CSS</Tag>
					<Tag delete />
				</Tag.List>
			</Control>

			<Control>
				<Tag.List addons>
					<Tag color='link'>Flexbox</Tag>
					<Tag delete />
				</Tag.List>
			</Control>

			<Control>
				<Tag.List addons>
					<Tag color='link'>Web Design</Tag>
					<Tag delete />
				</Tag.List>
			</Control>

			<Control>
				<Tag.List addons>
					<Tag color='link'>Open Source</Tag>
					<Tag delete />
				</Tag.List>
			</Control>

			<Control>
				<Tag.List addons>
					<Tag color='link'>Community</Tag>
					<Tag delete />
				</Tag.List>
			</Control>

			<Control>
				<Tag.List addons>
					<Tag color='link'>Documentation</Tag>
					<Tag delete />
				</Tag.List>
			</Control>
		</Field>
	</Fragment>
);
