import { FunctionalComponent, h, JSX } from 'preact';

export interface BoxProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export const Box: FunctionalComponent<BoxProps> = ({ children, ...props }) => (
	<div class="box" {...props}>{children}</div>
);
