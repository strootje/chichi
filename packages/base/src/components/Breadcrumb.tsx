import ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface BreadcrumbProps extends JSX.DOMAttributes<HTMLElement> {
}

export interface BreadcrumbItemProps extends JSX.DOMAttributes<HTMLAnchorElement> {
	active?: boolean;
}

interface SubComponents {
	Item: FunctionalComponent<BreadcrumbItemProps>;
}

export const Breadcrumb: (FunctionalComponent<BreadcrumbProps> & SubComponents) = ({ ref, children, ...props }) => (
	<nav ref={ref} class="breadcrumb" {...props}>
		<ul>{children}</ul>
	</nav>
);

export const BreadcrumbItem: FunctionalComponent<BreadcrumbItemProps> = ({ ref, children, active, ...props }) => (
	<li class={ClassNames({ 'is-active': !!active })}><a ref={ref} {...props}>{children}</a></li>
);

Breadcrumb.Item = BreadcrumbItem;
