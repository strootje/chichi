import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface TitleProps extends JSX.HTMLAttributes {
	spaced?: boolean;
	size?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface SubTitleProps extends JSX.HTMLAttributes {
	size?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

export const Title: FunctionalComponent<TitleProps> = ({ children, size, spaced, ...props }) => {
	return h(`h${size || 1}`, { class: ClassNames('title', { [`is-${size}`]: !!size, ['is-spaced']: !!spaced }), ...props }, children);
}

export const SubTitle: FunctionalComponent<SubTitleProps> = ({ children, size, ...props }) => {
	return h(`h${size && (size > 6 ? 6 : size) || 1}`, { class: ClassNames('subtitle', { [`is-${size}`]: !!size }), ...props }, children);
}
