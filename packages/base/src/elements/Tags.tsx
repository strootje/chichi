import { ColorProps, Colors, SizeProps, Sizes } from 'chichi-core';
import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';

export interface TagsProps extends JSX.DOMAttributes<HTMLDivElement>, SizeProps {
	addons?: boolean;
	grouped?: boolean;
}

export interface TagsTagProps extends JSX.DOMAttributes<HTMLSpanElement>, ColorProps, SizeProps {
	delete?: boolean;
	rounded?: boolean;
}

interface SubComponents {
	Tag: FunctionalComponent<TagsTagProps>;
}

export const Tags: (FunctionalComponent<TagsProps> & SubComponents) = ({ children, size, addons, grouped, ...props }) => (
	<div class={ClassNames('tags', {
		...Sizes({ size }, 'are'),
		['has-addons']: !!addons,
		['is-grouped']: !!grouped
	})} {...props}>{children}</div>
);

export const TagsTag: FunctionalComponent<TagsTagProps> = ({ children, size, delete: _delete, rounded, ...props }) => (
	<span class={ClassNames('tag', {
		...Colors(props),
		...Sizes({ size }),
		['is-delete']: !!_delete,
		['is-rounded']: !!rounded
	})} {...props}>{children}</span>
);

Tags.Tag = TagsTag;
