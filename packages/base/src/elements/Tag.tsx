import { ColorProps, Colors, SizeProps, Sizes } from 'chichi-core';
import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

interface BaseTagProps extends ColorProps, SizeProps {
	rounded?: boolean;
	delete?: boolean;
}

interface AnchorTagProps extends JSX.DOMAttributes<HTMLAnchorElement>, BaseTagProps {
	href: string;
}

interface SpanTagProps extends JSX.DOMAttributes<HTMLSpanElement>, BaseTagProps {
}

export type TagProps
	= AnchorTagProps
	| SpanTagProps;

export interface TagListProps extends JSX.DOMAttributes<HTMLDivElement>, SizeProps {
	addons?: boolean;
	grouped?: boolean;
}

interface SubComponents {
	List: FunctionalComponent<TagListProps>;
}

const buildClasses = ({ rounded, delete: _delete, ...props }: Partial<TagProps>, size: SizeProps) => ({
	...Colors(props),
	...Sizes(size),
	['is-rounded']: !!rounded,
	['is-delete']: !!_delete
});

const AnchorTag: FunctionalComponent<AnchorTagProps> = ({ children, size, delete: _delete, ...props }) => (
	<a class={ClassNames('tag', buildClasses({ delete: _delete, ...props }, { size }))}>{!_delete && children}</a>
);

const SpanTag: FunctionalComponent<SpanTagProps> = ({ children, size, delete: _delete, ...props }) => (
	<span class={ClassNames('tag', buildClasses({ delete: _delete, ...props }, { size }))}>{!_delete && children}</span>
);

export const Tag: (FunctionalComponent<TagProps> & SubComponents) = props => {
	if ('href' in props) {
		return <AnchorTag {...props} />
	} else {
		return <SpanTag {...props} />
	}
}

export const TagList: FunctionalComponent<TagListProps> = ({ children, size, addons, grouped, ...props }) => (
	<div class={ClassNames('tags', {
		...Sizes({ size }, 'are'),
		['has-addons']: !!addons,
		['is-grouped']: !!grouped
	})} {...props}>{children}</div>
);

Tag.List = TagList;
