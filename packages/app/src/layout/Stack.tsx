import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface StackProps extends JSX.HTMLAttributes<HTMLDivElement> {
	orientation?: 'horizontal' | 'vertical';
}

export const Stack: FunctionalComponent<StackProps> = props => {
	const {
		ref,
		children,
		className,
		orientation,
		...other
	} = Object.assign({
		className: '',
		orientation: 'vertical'
	}, props);

	const classes = ClassNames('stack', className, {
		'is-vertical': orientation === 'vertical',
		'is-horizontal': orientation === 'horizontal'
	});

	return (
		<div ref={ref} class={classes} {...other}>
			{children}
		</div>
	);
}
