import { SizeProps, Sizes } from 'chichi-core';
import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface ContentProps extends JSX.DOMAttributes<HTMLDivElement>, SizeProps {
}

export const Content: FunctionalComponent<ContentProps> = ({ children, size, ...props }) => (
	<div class={ClassNames('content', { ...Sizes({ size }) })} {...props}>{children}</div>
);
