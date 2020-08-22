import { Button } from '@chichi/base';
import { Badge } from '@chichi/extensions';
import { h } from 'preact';

export default {
	title: 'Extensions/Elements/Badge',
	component: Badge
};

export const Basic = () => (
	<Button>
		<Badge>8</Badge>
		Button
	</Button>
);
