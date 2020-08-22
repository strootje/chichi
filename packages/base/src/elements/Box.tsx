import { FunctionalComponent, h, JSX } from 'preact';

export interface BoxProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export const Box: FunctionalComponent<BoxProps> = ({ ref, children, ...props }) => (
	<div ref={ref} class="box" {...props}>{children}</div>
);
