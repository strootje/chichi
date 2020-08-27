import { Button } from 'chichi-base';
import { action } from '@storybook/addon-actions';
import { h } from 'preact';

export default {
	title: 'Base/Elements/Button',
	component: Button
};

export const Basic = () => (
	<Button onClick={action('btnOnClick')}>I am a Button</Button>
);

export const Basic2 = () => (
	<Button href='#onClicked' onClick={action('testing')}>I am a Button</Button>
);
