import { AlignmentProps, Alignments, ColorProps, Colors, SizeProps, Sizes } from 'chichi-core';
import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

interface BaseButtonProps extends ColorProps, SizeProps {
	outlined?: boolean;
	rounded?: boolean;
	inverted?: boolean;
	hovered?: boolean;
	active?: boolean;
	focused?: boolean;
	static?: boolean;
	disabled?: boolean;
}

interface AnchorButtonProps extends JSX.DOMAttributes<HTMLAnchorElement>, BaseButtonProps {
	href: string;
	loading?: boolean;
}

interface ButtonButtonProps extends JSX.DOMAttributes<HTMLButtonElement>, BaseButtonProps {
	loading?: boolean;
}

interface InputButtonProps extends Omit<JSX.DOMAttributes<HTMLInputElement>, 'children'>, BaseButtonProps {
	type: 'submit' | 'reset';
	children?: string | string[];
}

export type ButtonProps
	= AnchorButtonProps
	| ButtonButtonProps
	| InputButtonProps;

export interface ButtonGroupProps extends JSX.DOMAttributes<HTMLParagraphElement>, AlignmentProps {
	addons?: boolean;
}

interface SubComponents {
	Group: FunctionalComponent<ButtonGroupProps>;
}

const buildClasses = ({ outlined, rounded, inverted, hovered, active, focused, static: _static, ...props }: Partial<ButtonProps>, size: SizeProps) => ({
	...Colors(props),
	...Sizes(size),
	['is-outlined']: !!outlined,
	['is-rounded']: !!rounded,
	['is-inverted']: !!inverted,
	['is-hovered']: !!hovered,
	['is-active']: !!active,
	['is-focused']: !!focused,
	['is-static']: !!_static
});

const AnchorButton: FunctionalComponent<AnchorButtonProps> = ({ children, size, href, loading, ...props }) => (
	<a class={ClassNames('button', buildClasses(props, { size }), { ['is-loading']: !!loading })} href={href} {...props}>{children}</a>
);

const ButtonButton: FunctionalComponent<ButtonButtonProps> = ({ children, size, loading, ...props }) => (
	<button class={ClassNames('button', buildClasses(props, { size }), { ['is-loading']: !!loading })} {...props}>{children}</button>
);

const InputButton: FunctionalComponent<InputButtonProps> = ({ children, size, type, ...props }) => (
	<input class={ClassNames('button', buildClasses(props, { size }))} type={type} {...props} value={children?.toString()} />
);

export const Button: (FunctionalComponent<ButtonProps> & SubComponents) = props => {
	if ('href' in props) {
		return <AnchorButton {...props} />;
	} else if ('type' in props) {
		return <InputButton {...props} />;
	} else {
		return <ButtonButton {...props} />;
	}
};

export const ButtonGroup: FunctionalComponent<ButtonGroupProps> = ({ children, addons, ...props }) => (
	<p class={ClassNames('buttons', { ...Alignments(props), ['has-addons']: !!addons })} {...props}>{children}</p>
);

Button.Group = ButtonGroup;
