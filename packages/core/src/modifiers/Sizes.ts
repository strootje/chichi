export interface SizeProps {
	size?: 'small' | 'normal' | 'medium' | 'large';
}

export const Sizes = (props: SizeProps, prefix: string = 'is') => ({
	[[prefix, props.size].join('-')]: !!props.size
});
