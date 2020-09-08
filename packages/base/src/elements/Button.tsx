import { ColorProps, Colors, SizeProps, Sizes } from 'chichi-core';
import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

interface BaseButtonProps extends ColorProps, SizeProps {
	outlined?: boolean;
	rounded?: boolean;
	inverted?: boolean;
}

interface AnchorButtonProps extends JSX.DOMAttributes<HTMLAnchorElement>, BaseButtonProps {
	href: string;
}

interface ButtonButtonProps extends JSX.DOMAttributes<HTMLButtonElement>, BaseButtonProps {
}

interface InputButtonProps extends JSX.DOMAttributes<HTMLInputElement>, BaseButtonProps {
	type: 'submit' | 'reset';
}

export type ButtonProps
	= AnchorButtonProps
	| ButtonButtonProps
	| InputButtonProps;

const buildClasses = ({ outlined, rounded, inverted, ...props }: Partial<ButtonProps>, size: SizeProps) => ({
	...Colors(props),
	...Sizes(size),
	['is-outlined']: !!outlined,
	['is-rounded']: !!rounded,
	['is-inverted']: !!inverted
});

const AnchorButton: FunctionalComponent<AnchorButtonProps> = ({ children, size, href, ...props }) => (
	<a class={ClassNames('button', buildClasses(props, { size }))} href={href} {...props}>{children}</a>
);

const ButtonButton: FunctionalComponent<ButtonButtonProps> = ({ children, size, ...props }) => (
	<button class={ClassNames('button', buildClasses(props, { size }))} {...props}>{children}</button>
);

const InputButton: FunctionalComponent<InputButtonProps> = ({ children, size, type, ...props }) => (
	<input class={ClassNames('button', buildClasses(props, { size }))} type={type} {...props}>{children}</input>
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
