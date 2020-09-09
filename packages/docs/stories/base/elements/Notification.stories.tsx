import { Notification, NotificationProps } from 'chichi-base';
import { h } from 'preact';

export default {
	title: 'Base/Elements/Notification',
	component: Notification,
	argTypes: {
		onDeleteClick: {
			action: 'onDeleteClicked'
		},

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
		}
	}
};

export const Basic = (props: NotificationProps) => (
	<Notification {...props}>I am a Notification</Notification>
);

export const WithDelete = (props: NotificationProps) => (
	<Notification {...props} delete>I am a Notification</Notification>
);
