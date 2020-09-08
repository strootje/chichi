import { AlignmentProps, Alignments, SizeProps, Sizes } from 'chichi-core';
import ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface BreadcrumbProps extends JSX.DOMAttributes<HTMLElement>, AlignmentProps, SizeProps {
	separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
}

export interface BreadcrumbItemProps extends JSX.DOMAttributes<HTMLAnchorElement> {
	active?: boolean;
}

interface SubComponents {
	Item: FunctionalComponent<BreadcrumbItemProps>;
}

export const Breadcrumb: (FunctionalComponent<BreadcrumbProps> & SubComponents) = ({ children, size, separator, ...props }) => (
	<nav class={ClassNames('breadcrumb', {
		...Alignments(props),
		...Sizes({ size }),
		[`has-${separator}-separator`]: !!separator
	})} {...props}>
		<ul>{children}</ul>
	</nav>
);

export const BreadcrumbItem: FunctionalComponent<BreadcrumbItemProps> = ({ children, active, ...props }) => (
	<li class={ClassNames({ 'is-active': !!active })}><a {...props}>{children}</a></li>
);

Breadcrumb.Item = BreadcrumbItem;
