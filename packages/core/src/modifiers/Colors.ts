export interface ColorProps {
	light?: boolean;
	color?: 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'black' | 'white' | 'dark';
}

export const Colors = (props: ColorProps, prefix: string = 'is') => ({
	['is-light']: !!props.light,
	[[prefix, props.color].join('-')]: !!props.color
});
