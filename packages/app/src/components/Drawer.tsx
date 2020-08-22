import ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export type DrawerElement = HTMLDivElement;
export interface DrawerProps extends JSX.DOMAttributes<DrawerElement> {
	open?: boolean;
}

export const Drawer: FunctionalComponent<DrawerProps> = (props) => {
	const {
		ref,
		children,
		open,
		...other
	} = Object.assign({
		open: false
	}, props);

	const classes = ClassNames('drawer', 'has-background-white', {
		'is-active': open
	});

	return (
		<div ref={ref} class={classes} {...other}>
			{children}
		</div>
	);
}
