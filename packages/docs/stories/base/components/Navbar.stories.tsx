import { Box, Button, Navbar } from '@chichi/base';
import { action } from '@storybook/addon-actions';
import { h, JSX } from 'preact';

export default {
	title: 'Base/Components/Navbar',
	component: Navbar
};

const myAction: JSX.MouseEventHandler<HTMLAnchorElement> = evt => {
	const target = evt.target as HTMLAnchorElement;
	evt.preventDefault();
	return action(`navigate to ${target.innerText} (${target.href})`)(evt);
}

export const Basic = () => (
	<Box>
		<Navbar>
			<Navbar.Brand>
				<Navbar.Item href="https://bulma.io" onClick={myAction}>
					<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
				</Navbar.Item>

				<Navbar.Burger />
			</Navbar.Brand>

			<Navbar.Menu>
				<Navbar.Start>
					<Navbar.Item href="#" onClick={myAction}>Home</Navbar.Item>
					<Navbar.Item href="#" onClick={myAction}>Documentation</Navbar.Item>

					<Navbar.Item dropdown hoverable>More
						<Navbar.Item href="#" onClick={myAction}>About</Navbar.Item>
						<Navbar.Item href="#" onClick={myAction}>Jobs</Navbar.Item>
						<Navbar.Item href="#" onClick={myAction}>Contact</Navbar.Item>
						<Navbar.Divider />
						<Navbar.Item href="#" onClick={myAction}>Report an issue</Navbar.Item>
					</Navbar.Item>
				</Navbar.Start>

				<Navbar.End>
					<Navbar.Item>
						<div class="buttons">
							<Button>Sign up</Button>
							<Button>Log in</Button>
						</div>
					</Navbar.Item>
				</Navbar.End>
			</Navbar.Menu>
		</Navbar>
	</Box>
);
