import { Button, ButtonProps, Control, Field, Icon } from 'chichi-base';
import { Fragment, h } from 'preact';
import { checks } from '../../../helpers/Controls';

export default {
	title: 'Base/Elements/Button',
	component: Button,
	argTypes: {
		onClick: {
			action: 'onBtnClicked'
		},

		color: {
			name: 'Color',
			control: {
				type: 'select',
				options: ['white', 'light', 'dark', 'black', 'text', 'primary', 'link', 'info', 'success', 'warning', 'danger']
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
				options: ['light', 'outlined', 'rounded', 'inverted']
			}
		},

		states: {
			name: 'States',
			defaultValue: [],
			control: {
				type: 'inline-check',
				options: ['hovered', 'focused', 'active', 'loading', 'static', 'disabled']
			}
		}
	}
};

interface StoryProps {
	styles: [];
	states: [];
}

export const Basic = ({ styles, states, ...props }: (ButtonProps & StoryProps)) => (
	<Fragment>
		<Button.Group>
			<Button {...props} {...checks(styles)} {...checks(states)}>
				Button
			</Button>
		</Button.Group>

		<Button.Group>
			<Button href='#' {...props} {...checks(styles)} {...checks(states)}>Anchor</Button>
			<Button {...props} {...checks(styles)} {...checks(states)}>Button</Button>
			<Button type='submit' {...props} {...checks(styles)} {...checks(states)}>Submit input</Button>
			<Button type='reset' {...props} {...checks(styles)} {...checks(states)}>Reset input</Button>
		</Button.Group>
	</Fragment>
);

export const WithIcons = () => (
	<Fragment>
		<Button.Group>
			<Button><Icon size='small' icon='fas fa-bold' /></Button>
			<Button><Icon size='small' icon='fas fa-italic' /></Button>
			<Button><Icon size='small' icon='fas fa-underline' /></Button>
		</Button.Group>

		<Button.Group>
			<Button>
				<Icon size='small' icon='fab fa-github' />
				<span>GitHub</span>
			</Button>
			<Button color='primary'>
				<Icon size='small' icon='fab fa-twitter' />
				<span>@jgthms</span>
			</Button>
			<Button color='success'>
				<Icon size='small' icon='fas fa-check' />
				<span>Save</span>
			</Button>
			<Button color='danger' outlined>
				<span>Delete</span>
				<Icon size='small' icon='fas fa-times' />
			</Button>
		</Button.Group>

		<Button.Group>
			<Button size='small'>
				<Icon size='small' icon='fab fa-github' />
				<span>GitHub</span>
			</Button>
			<Button>
				<Icon icon='fab fa-github' />
				<span>GitHub</span>
			</Button>
			<Button size='medium'>
				<Icon icon='fab fa-github' />
				<span>GitHub</span>
			</Button>
			<Button size='large'>
				<Icon size='medium' icon='fab fa-github' />
				<span>GitHub</span>
			</Button>
		</Button.Group>
	</Fragment>
);

export const WithGroup = () => (
	<Field grouped>
		<Control><Button color='link'>Save changes</Button></Control>
		<Control><Button>Cancel</Button></Control>
		<Control><Button color='danger'>Delete post</Button></Control>
	</Field>
);

export const WithAddons = () => (
	<Field addons>
		<Control><Button><Icon size='small' icon='fas fa-align-left' /><span>Left</span></Button></Control>
		<Control><Button><Icon size='small' icon='fas fa-align-center' /><span>Center</span></Button></Control>
		<Control><Button><Icon size='small' icon='fas fa-align-right' /><span>Right</span></Button></Control>
	</Field>
);

export const WithGroupWithAddons = () => (
	<Fragment>
		<Field addons>
			<Control><Button><Icon size='small' icon='fas fa-bold' /><span>Bold</span></Button></Control>
			<Control><Button><Icon size='small' icon='fas fa-italic' /><span>Italic</span></Button></Control>
			<Control><Button><Icon size='small' icon='fas fa-underline' /><span>Underline</span></Button></Control>
		</Field>

		<Field addons>
			<Control><Button><Icon size='small' icon='fas fa-align-left' /><span>Left</span></Button></Control>
			<Control><Button><Icon size='small' icon='fas fa-align-center' /><span>Center</span></Button></Control>
			<Control><Button><Icon size='small' icon='fas fa-align-right' /><span>Right</span></Button></Control>
		</Field>
	</Fragment>
);

export const WithButtonList = () => (
	<Button.Group>

	</Button.Group>
);
