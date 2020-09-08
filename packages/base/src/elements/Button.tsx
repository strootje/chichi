import { ColorProps, Colors, SizeProps, Sizes } from 'chichi-core';
import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

interface AnchorButtonProps extends JSX.DOMAttributes<HTMLAnchorElement>, ColorProps, SizeProps {
	href: string;
}

interface ButtonButtonProps extends JSX.DOMAttributes<HTMLButtonElement>, ColorProps, SizeProps {
}

interface InputButtonProps extends JSX.DOMAttributes<HTMLInputElement>, ColorProps, SizeProps {
	type: 'submit' | 'reset';
}

export type ButtonProps
	= AnchorButtonProps
	| ButtonButtonProps
	| InputButtonProps;

const AnchorButton: FunctionalComponent<AnchorButtonProps> = ({ children, size, href, ...props }) => (
	<a class={ClassNames('button', { ...Colors(props), ...Sizes({ size }) })} href={href} {...props}>{children}</a>
);

const ButtonButton: FunctionalComponent<ButtonButtonProps> = ({ children, size, ...props }) => (
	<button class={ClassNames('button', { ...Colors(props), ...Sizes({ size }) })} {...props}>{children}</button>
);

const InputButton: FunctionalComponent<InputButtonProps> = ({ children, size, type, ...props }) => (
	<input class={ClassNames('button', { ...Colors(props), ...Sizes({ size }) })} type={type} {...props}>{children}</input>
);

export const Button: FunctionalComponent<ButtonProps> = props => {
	if ('href' in props) {
		return <AnchorButton {...props} />;
	} else if ('type' in props) {
		return <InputButton {...props} />;
	} else {
		return <ButtonButton {...props} />;
	}
};
