import { FunctionalComponent, h, JSX } from 'preact';

export interface IconProps extends JSX.DOMAttributes<HTMLSpanElement> {
	icon: string;
}

export const Icon: FunctionalComponent<IconProps> = ({ ref, children, icon, ...props }) => (
	<span ref={ref} class="icon" {...props}>
		<i class={icon}></i>
	</span>
);
