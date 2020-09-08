import { ColorProps, Colors, SizeProps, Sizes } from 'chichi-core';
import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface IconProps extends JSX.DOMAttributes<HTMLSpanElement>, ColorProps, SizeProps {
	icon: string;
}

export const Icon: FunctionalComponent<IconProps> = ({ children, size, icon, ...props }) => (
	<span class={ClassNames('icon', { ...Colors(props, 'has-text'), ...Sizes({ size }) })} {...props}>
		<i class={icon}></i>
	</span>
);
