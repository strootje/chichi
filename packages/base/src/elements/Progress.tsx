import { ColorProps, Colors, SizeProps, Sizes } from 'chichi-core';
import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface ProgressProps extends JSX.DOMAttributes<HTMLProgressElement>, ColorProps, SizeProps {
	value?: number | string;
	max?: number | string;
}

export const Progress: FunctionalComponent<ProgressProps> = ({ children, value, max, size, ...props }) => (
	<progress class={ClassNames('progress', { ...Colors(props), ...Sizes({ size }) })} value={value} max={max} {...props}>{children}</progress>
);
