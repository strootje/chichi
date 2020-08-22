import { Box, Menu } from '@chichi/base';
import { h } from 'preact';

export default {
	title: 'Base/Components/Menu',
	component: Menu
};

export const Basic = () => (
	<Box>
		<Menu>
			<Menu.Label>General</Menu.Label>
			<Menu.List>
				<Menu.Item>Dashboard</Menu.Item>
				<Menu.Item>Customers</Menu.Item>
			</Menu.List>

			<Menu.Label>Administration</Menu.Label>
			<Menu.List>
				<Menu.Item>Team Settings</Menu.Item>
				<Menu.Item active>Manage Your Team
					<Menu.List>
						<Menu.Item>Members</Menu.Item>
						<Menu.Item>Plugins</Menu.Item>
						<Menu.Item>Add a member</Menu.Item>
					</Menu.List>
				</Menu.Item>
				<Menu.Item>Invitations</Menu.Item>
				<Menu.Item>Cloud Storage Environment Settings</Menu.Item>
				<Menu.Item>Authentication</Menu.Item>
			</Menu.List>

			<Menu.Label>Transactions</Menu.Label>
			<Menu.List>
				<Menu.Item>Payments</Menu.Item>
				<Menu.Item>Transfers</Menu.Item>
				<Menu.Item>Balance</Menu.Item>
			</Menu.List>
		</Menu>
	</Box>
);
