import { FunctionalComponent, h, JSX } from 'preact';
import { Icon } from '../elements/Icon';

export interface CardProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export interface CardHeaderProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export interface CardTitleProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export interface CardIconProps extends JSX.DOMAttributes<HTMLAnchorElement> {
	icon: string;
}

export interface CardImage extends JSX.DOMAttributes<HTMLDivElement> {
}

export interface CardContent extends JSX.DOMAttributes<HTMLDivElement> {
}

export interface CardFooter extends JSX.DOMAttributes<HTMLElement> {
}

export interface CardFooterItem extends JSX.DOMAttributes<HTMLAnchorElement> {
}

interface SubComponents {
	Header: FunctionalComponent<CardHeaderProps>;
	Title: FunctionalComponent<CardTitleProps>;
	Icon: FunctionalComponent<CardIconProps>;
	Image: FunctionalComponent<CardImage>;
	Content: FunctionalComponent<CardContent>;
	Footer: FunctionalComponent<CardFooter>;
	FooterItem: FunctionalComponent<CardFooterItem>;
}

export const Card: (FunctionalComponent<CardProps> & SubComponents) = ({ ref, children, ...props }) => (
	<div ref={ref} class="card" {...props}>
		{children}
	</div>
);

export const CardHeader: FunctionalComponent<CardHeaderProps> = ({ ref, children, ...props }) => (
	<header class="card-header">
		{children}
	</header>
);

export const CardTitle: FunctionalComponent<CardTitleProps> = ({ ref, children, ...props }) => (
	<p ref={ref} class="card-header-title" {...props}>
		{children}
	</p>
);

export const CardIcon: FunctionalComponent<CardIconProps> = ({ ref, icon, ...props }) => (
	<a ref={ref} class="card-header-icon" {...props}>
		<Icon icon={icon} />
	</a>
);

// maybe auto insert <Image /> or <Image>{children}</Image>
export const CardImage: FunctionalComponent<CardImage> = ({ ref, children, ...props }) => (
	<div ref={ref} class="card-image" {...props}>
		{children}
	</div>
);

export const CardContent: FunctionalComponent<CardContent> = ({ ref, children, ...props }) => (
	<div ref={ref} class="card-content" {...props}>
		{children}
	</div>
);

export const CardFooter: FunctionalComponent<CardFooter> = ({ ref, children, ...props }) => (
	<footer ref={ref} class="card-footer" {...props}>
		{children}
	</footer>
);

export const CardFooterItem: FunctionalComponent<CardFooterItem> = ({ ref, children, ...props }) => (
	<a ref={ref} class="card-footer-item" {...props}>
		{children}
	</a>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Icon = CardIcon;
Card.Image = CardImage;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.FooterItem = CardFooterItem;
