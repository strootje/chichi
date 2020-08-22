import { FunctionalComponent, h, JSX } from 'preact';

interface AnchorButtonProps extends JSX.DOMAttributes<HTMLAnchorElement> {
	href: string;
}

interface ButtonButtonProps extends JSX.DOMAttributes<HTMLButtonElement> {
}

interface InputButtonProps extends JSX.DOMAttributes<HTMLInputElement> {
	type: 'submit' | 'reset';
}

export type ButtonProps
	= AnchorButtonProps
	| ButtonButtonProps
	| InputButtonProps;

const AnchorButton: FunctionalComponent<AnchorButtonProps> = ({ ref, children, href, ...props }) => (
	<a ref={ref} class="button" href={href} {...props}>{children}</a>
);

const ButtonButton: FunctionalComponent<ButtonButtonProps> = ({ ref, children, ...props }) => (
	<button ref={ref} class="button" {...props}>{children}</button>
);

const InputButton: FunctionalComponent<InputButtonProps> = ({ ref, children, type, ...props }) => (
	<input ref={ref} class="button" type={type}>{children}</input>
);

export const Button: FunctionalComponent<ButtonProps> = props => {
	if ('href' in props) {
		return <AnchorButton {...props} />
	} else if ('type' in props) {
		return <InputButton {...props} />
	} else {
		return <ButtonButton {...props} />
	}
};
