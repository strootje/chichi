import { ColorProps, Colors } from 'chichi-core';
import ClassNames from 'classnames';
import { FunctionalComponent, h, JSX, toChildArray, VNode } from 'preact';

export interface NavbarProps extends JSX.DOMAttributes<HTMLElement>, ColorProps {
	transparent?: boolean;
	fixed?: 'top' | 'bottom';
}

export interface NavbarBrandProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export interface NavbarBurgerProps extends JSX.DOMAttributes<HTMLAnchorElement> {
	active?: boolean;
}

export interface NavbarMenuProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export interface NavbarStartProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export interface NavbarEndProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export interface NavbarLinkProps extends JSX.DOMAttributes<HTMLAnchorElement> {
}

interface NavbarItemDivProps extends JSX.DOMAttributes<HTMLDivElement> {
	dropdown?: false;
}

interface NavbarItemDivDropdownProps extends JSX.DOMAttributes<HTMLDivElement> {
	children: [(string | VNode<NavbarLinkProps>), ...VNode<NavbarItemProps>[]];
	dropdown: true;
	hoverable?: boolean;
	href?: string;
}

interface NavbarItemAnchorProps extends JSX.DOMAttributes<HTMLAnchorElement> {
	href: string;
}

export type NavbarItemProps
	= NavbarItemDivProps
	| NavbarItemDivDropdownProps
	| NavbarItemAnchorProps;

export interface NavbarDividerProps extends Omit<JSX.DOMAttributes<HTMLHRElement>, 'children'> {
}

interface SubComponents {
	Brand: FunctionalComponent<NavbarBrandProps>;
	Burger: FunctionalComponent<NavbarBurgerProps>;
	Menu: FunctionalComponent<NavbarMenuProps>;
	Start: FunctionalComponent<NavbarStartProps>;
	End: FunctionalComponent<NavbarEndProps>;
	Link: FunctionalComponent<NavbarLinkProps>;
	Item: FunctionalComponent<NavbarItemProps>;
	Divider: FunctionalComponent<NavbarDividerProps>;
}

export const Navbar: (FunctionalComponent<NavbarProps> & SubComponents) = ({ children, transparent, fixed, ...props }) => {
	if (!!fixed && document && document.documentElement) {
		document.documentElement.classList.add(`has-navbar-fixed-${fixed}`);
	}

	return (
		<nav class={ClassNames('navbar', {
			...Colors(props),
			['is-transparent']: !!transparent,
			[`is-fixed-${fixed}`]: !!fixed
		})} role="navigation" aria-label="main navigation" {...props}>{children}</nav>
	);
}

export const NavbarBrand: FunctionalComponent<NavbarBrandProps> = ({ children, ...props }) => (
	<div class="navbar-brand" {...props}>{children}</div>
);

export const NavbarBurger: FunctionalComponent<NavbarBurgerProps> = ({ active, ...props }) => (
	<a class={ClassNames('navbar-burger', { 'is-active': !!active })} role="button" aria-label="menu" aria-expanded="false" {...props}>
		<span aria-hidden="true"></span>
		<span aria-hidden="true"></span>
		<span aria-hidden="true"></span>
	</a>
);

export const NavbarMenu: FunctionalComponent<NavbarMenuProps> = ({ children, ...props }) => (
	<div class="navbar-menu" {...props}>{children}</div>
);

export const NavbarStart: FunctionalComponent<NavbarStartProps> = ({ children, ...props }) => (
	<div class="navbar-start" {...props}>{children}</div>
);

export const NavbarEnd: FunctionalComponent<NavbarEndProps> = ({ children, ...props }) => (
	<div class="navbar-end" {...props}>{children}</div>
);

export const NavbarLink: FunctionalComponent<NavbarLinkProps> = ({ children, ...props }) => (
	<a class="navbar-link" {...props}>{children}</a>
);

const NavbarItemDiv: FunctionalComponent<NavbarItemDivProps> = ({ children, ...props }) => (
	<div class="navbar-item" {...props}>{children}</div>
);

const NavbarItemDivDropdown: FunctionalComponent<NavbarItemDivDropdownProps> = ({ children, hoverable, ...props }) => {
	const nodes = toChildArray(children);
	const first = nodes.shift();

	return (
		<div class={ClassNames('navbar-item', 'has-dropdown', { 'is-hoverable': !!hoverable })} {...props}>
			{((typeof first === 'string') ? (<NavbarLink>{first}</NavbarLink>) : first)}
			<div class="navbar-dropdown">{nodes}</div>
		</div>
	);
}

const NavbarItemAnchor: FunctionalComponent<NavbarItemAnchorProps> = ({ children, href, ...props }) => (
	<a class="navbar-item" href={href} {...props}>{children}</a>
);

export const NavbarItem: FunctionalComponent<NavbarItemProps> = props => {
	if ('dropdown' in props && !!props.dropdown) {
		return <NavbarItemDivDropdown {...props} />
	} else if ('href' in props) {
		return <NavbarItemAnchor {...props} />
	} else {
		return <NavbarItemDiv {...props} />
	}
};

export const NavbarDivider: FunctionalComponent<NavbarDividerProps> = ({ ...props }) => (
	<hr class="navbar-divider" {...props} />
);

Navbar.Brand = NavbarBrand;
Navbar.Burger = NavbarBurger;
Navbar.Menu = NavbarMenu;
Navbar.Start = NavbarStart;
Navbar.End = NavbarEnd;
Navbar.Link = NavbarLink;
Navbar.Item = NavbarItem;
Navbar.Divider = NavbarDivider;
