import { Notification } from 'chichi-base';
import { h } from 'preact';
import {  action } from '@storybook/addon-actions';

export default {
	title: 'Base/Elements/Notification',
	component: Notification
};

export const Basic = () => (
	<Notification>I am a Notification</Notification>
);

export const WithDelete = () => (
	<Notification delete onDeleteClick={action('clicked on delete')}>I am a Notification</Notification>
);
