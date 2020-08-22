import { FunctionalComponent, h, JSX } from 'preact';

export interface ContentProps extends JSX.DOMAttributes<HTMLDivElement> {
}

export const Content: FunctionalComponent<ContentProps> = ({ ref, children, ...props }) => (
	<div ref={ref} class="content" {...props}>{children}</div>
);
