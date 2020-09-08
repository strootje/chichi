import ClassNames from 'classnames';
import { ComponentChildren, FunctionalComponent, h, JSX, toChildArray } from 'preact';

export interface MenuProps extends JSX.DOMAttributes<HTMLElement> {
}

export interface MenuLabelProps extends JSX.DOMAttributes<HTMLParagraphElement> {
}

export interface MenuListProps extends JSX.DOMAttributes<HTMLUListElement> {
}

export interface MenuItemProps extends JSX.DOMAttributes<HTMLAnchorElement> {
	children: string | [string, ...ComponentChildren[]];
	active?: boolean;
}

interface SubComponents {
	Label: FunctionalComponent<MenuLabelProps>;
	List: FunctionalComponent<MenuListProps>;
	Item: FunctionalComponent<MenuItemProps>;
}

export const Menu: (FunctionalComponent<MenuProps> & SubComponents) = ({ children, ...props }) => (
	<aside class="menu" {...props}>{children}</aside>
);

export const MenuLabel: FunctionalComponent<MenuLabelProps> = ({ children, ...props }) => (
	<p class="menu-label" {...props}>{children}</p>
);

export const MenuList: FunctionalComponent<MenuListProps> = ({ children, ...props }) => (
	<ul class="menu-list" {...props}>{children}</ul>
);

export const MenuItem: FunctionalComponent<MenuItemProps> = ({ children, active, ...props }) => {
	const nodes = toChildArray(children);
	const label = nodes.shift() as string;

	return (
		<li><a class={ClassNames({ 'is-active': !!active })} {...props}>{label}</a>{nodes}</li>
	);
}

Menu.Label = MenuLabel;
Menu.List = MenuList;
Menu.Item = MenuItem;
