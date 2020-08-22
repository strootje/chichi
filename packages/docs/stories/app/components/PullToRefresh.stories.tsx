import { PullToRefresh } from '@chichi/app';
import { Box } from '@chichi/base/src';
import { h } from 'preact';

export default {
	title: 'App/Components/PullToRefresh',
	component: PullToRefresh
};

export const Basic = () => (
	<Box>
		<PullToRefresh>
			this is some content
		</PullToRefresh>
	</Box>
);
