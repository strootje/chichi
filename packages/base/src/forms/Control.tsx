import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface ControlProps extends JSX.DOMAttributes<HTMLParagraphElement> {
	addons?: boolean;
	grouped?: boolean;
}

export const Control: FunctionalComponent<ControlProps> = ({ children, addons, grouped, ...props }) => (
	<p class={ClassNames('control')} {...props}>{children}</p>
);
