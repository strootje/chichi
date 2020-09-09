export interface AlignmentProps {
	align?: 'left' | 'centered' | 'right';
}

export const Alignments = (props: AlignmentProps) => ({
	[`is-${props.align}`]: !!props.align
});
