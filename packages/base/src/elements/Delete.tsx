import { FunctionalComponent, h, JSX } from 'preact';

export interface DeleteProps extends JSX.DOMAttributes<HTMLAnchorElement> {
}

export const Delete: FunctionalComponent<DeleteProps> = ({ ref, children, ...props }) => (
	<a ref={ref} class="delete" {...props}>{children}</a>
);
