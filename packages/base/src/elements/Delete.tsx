import { SizeProps, Sizes } from 'chichi-core';
import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface DeleteProps extends JSX.DOMAttributes<HTMLAnchorElement>, SizeProps {
}

export const Delete: FunctionalComponent<DeleteProps> = ({ children, size, ...props }) => (
	<a class={ClassNames('delete', { ...Sizes({ size }) })} {...props}>{children}</a>
);
