import ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface BadgeProps extends JSX.DOMAttributes<HTMLSpanElement> {
	position?: 'top'
}

export const Badge: FunctionalComponent<BadgeProps> = ({ ref, children, position, ...props }) => (
	<span ref={ref} class={ClassNames('badge')} {...props}>{children}</span>
);
