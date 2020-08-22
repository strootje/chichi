import * as ClassNames from 'classnames';
import { Fragment, FunctionalComponent, h, JSX } from 'preact';
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks';

interface ScrollHandlerCallback {
	(this: HTMLDivElement, evt: TouchEvent): any;
}

export interface PullToRefreshProps extends JSX.DOMAttributes<HTMLDivElement> {
	className?: string;
	resistance?: number;
	threshold?: number;
	onRefresh?: () => void | PromiseLike<void>;
	onCancel?: () => void | PromiseLike<void>;
}

export const PullToRefresh: FunctionalComponent<PullToRefreshProps> = (props) => {
	const {
		children,
		className,
		resistance,
		threshold,
		onRefresh,
		onCancel,
		...other
	} = Object.assign({
		className: '',
		resistance: 6,
		threshold: 60
	}, props);

	const classes = ClassNames('pull-to-refresh', className);

	const layout = useRef<HTMLDivElement>(null);
	const [scrolling, setScrolling] = useState(false);
	const [scrollStart, setScrollStart] = useState(0);
	const [scrollEnd, setScrollEnd] = useState(0);
	const scrollDiff = useMemo(() => scrollEnd - scrollStart, [scrollStart, scrollEnd]);
	const scrollDiffAdj = useMemo(() => scrollDiff / resistance, [resistance, scrollDiff])
	const overThreshold = useMemo(() => scrollDiffAdj >= threshold, [threshold, scrollDiffAdj]);

	const reset = () => {
		setScrolling(false);
		setScrollStart(0);
		setScrollEnd(0);
	}

	const onScrollStartHandler = useCallback<ScrollHandlerCallback>(evt => {
		if (layout.current.scrollTop > 0) { return; }
		const pos = evt.touches[0].pageY;

		setScrolling(true);
		setScrollStart(pos);
		setScrollEnd(pos);
	}, []);

	const onScrollUpdateHandler = useCallback<ScrollHandlerCallback>(evt => {
		if (!scrolling) { return; }
		if (layout.current.scrollTop > 0) { return reset(); }
		const pos = evt.touches[0].pageY;

		if (pos < scrollStart) {
			setScrollStart(pos);
		}

		setScrollEnd(pos);
	}, [scrolling, scrollStart, scrollEnd]);

	const onScrollEndHandler = useCallback<ScrollHandlerCallback>(async () => {
		if (overThreshold && scrolling && onRefresh) {
			await onRefresh();
		} else {
			if (onCancel) {
				await onCancel();
			}
		}

		reset();
	}, [scrolling, overThreshold, onRefresh, onCancel]);

	useEffect(() => {
		if (!layout.current) { return; }

		layout.current.addEventListener('touchstart', onScrollStartHandler, { passive: true });
		layout.current.addEventListener('touchmove', onScrollUpdateHandler, { passive: true });
		layout.current.addEventListener('touchend', onScrollEndHandler, { passive: true });

		return () => {
			layout.current.removeEventListener('touchstart', onScrollStartHandler);
			layout.current.removeEventListener('touchmove', onScrollUpdateHandler);
			layout.current.removeEventListener('touchend', onScrollEndHandler);
		}
	}, [onScrollStartHandler, onScrollUpdateHandler, onScrollEndHandler]);

	return (
		<Fragment>
			{scrolling && <div>{scrollEnd} - {scrollStart} = {scrollDiff} / {resistance} = {scrollDiffAdj}</div>}
			<div ref={layout} class={classes} {...other}>
				<div>...</div>
				{children}
			</div>
		</Fragment>
	);
}
