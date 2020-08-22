import ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface DividerProps extends JSX.DOMAttributes<HTMLDivElement> {
	vertical?: boolean;
}

export const Divider: FunctionalComponent<DividerProps> = ({ ref, children, vertical, ...props }) => (
	<div ref={ref} class={ClassNames('divider', { 'is-vertical': !!vertical })} {...props}>{children}</div>
);
