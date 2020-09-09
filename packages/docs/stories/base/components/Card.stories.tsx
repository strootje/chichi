import { Card, Content, Notification, SubTitle, Title } from 'chichi-base';
import { Fragment, h } from 'preact';

export default {
	title: 'Base/Components/Card',
	component: Card
};

export const Basic = () => (
	<Fragment>
		<Notification>
			<Card>
				<Card.Image>
					<figure class="image is-4by3">
						<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
					</figure>
				</Card.Image>

				<Card.Content>
					<div class="media">
						<div class="media-left">
							<figure class="image is-48x48">
								<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
							</figure>
						</div>
						<div class="media-content">
							<p class="title is-4">John Smith</p>
							<p class="subtitle is-6">@johnsmith</p>
						</div>
					</div>

					<Content>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Phasellus nec iaculis mauris. <a>@bulmaio</a>.
				<a href="#">#css</a> <a href="#">#responsive</a>
						<br />
						<time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
					</Content>
				</Card.Content>
			</Card>
		</Notification>

		<Notification>
			<Card>
				<Card.Header>
					<Card.Title>Component</Card.Title>
					<Card.Icon icon='fas fa-angle-down' />
				</Card.Header>

				<Card.Content>
					<Content>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
						<br />
						<time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
					</Content>
				</Card.Content>

				<Card.Footer>
					<Card.FooterItem>Save</Card.FooterItem>
					<Card.FooterItem>Edit</Card.FooterItem>
					<Card.FooterItem>Delete</Card.FooterItem>
				</Card.Footer>
			</Card>
		</Notification>

		<Notification>
			<Card>
				<Card.Content>
					<Title>“There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”</Title>
					<SubTitle>Jeff Atwood</SubTitle>
				</Card.Content>

				<Card.Footer>
					<Card.FooterItem>View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a></Card.FooterItem>
					<Card.FooterItem>Share on <a href="#">Facebook</a></Card.FooterItem>
				</Card.Footer>
			</Card>
		</Notification>
	</Fragment>
);
