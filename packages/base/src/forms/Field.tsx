import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface FieldProps extends JSX.DOMAttributes<HTMLDivElement> {
	addons?: boolean;
	grouped?: boolean;
	multiline?: boolean;
}

export const Field: FunctionalComponent<FieldProps> = ({ children, addons, grouped, multiline, ...props }) => (
	<div class={ClassNames('field', {
		['has-addons']: !!addons,
		['is-grouped']: !!grouped,
		['is-grouped-multiline']: !!grouped && !!multiline
	})} {...props}>{children}</div>
);
