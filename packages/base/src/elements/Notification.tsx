import { ColorProps, Colors } from 'chichi-core';
import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX } from 'preact';
import { Delete } from '..';

export interface NotificationProps extends JSX.DOMAttributes<HTMLDivElement>, ColorProps {
	delete?: boolean;
	onDeleteClick?: JSX.MouseEventHandler<HTMLAnchorElement>;
}

export const Notification: FunctionalComponent<NotificationProps> = ({ children, delete: _delete, onDeleteClick, ...props }) => (
	<div class={ClassNames('notification', { ...Colors(props) })} {...props}>
		{!!_delete && <Delete onClick={onDeleteClick} />}
		{children}
	</div>
);
