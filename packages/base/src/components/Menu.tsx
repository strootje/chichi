import * as ClassNames from 'classnames';
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

export const Menu: (FunctionalComponent<MenuProps> & SubComponents) = ({ ref, children, ...props }) => (
	<aside ref={ref} class="menu" {...props}>{children}</aside>
);

export const MenuLabel: FunctionalComponent<MenuLabelProps> = ({ ref, children, ...props }) => (
	<p ref={ref} class="menu-label" {...props}>{children}</p>
);

export const MenuList: FunctionalComponent<MenuListProps> = ({ ref, children, ...props }) => (
	<ul ref={ref} class="menu-list" {...props}>{children}</ul>
);

export const MenuItem: FunctionalComponent<MenuItemProps> = ({ ref, children, active, ...props }) => {
	const nodes = toChildArray(children);
	const label = nodes.shift() as string;

	return (
		<li><a ref={ref} class={ClassNames({ 'is-active': !!active })} {...props}>{label}</a>{nodes}</li>
	);
}

Menu.Label = MenuLabel;
Menu.List = MenuList;
Menu.Item = MenuItem;
