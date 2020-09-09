import * as ClassNames from 'classnames';
import { FunctionalComponent, h, JSX, toChildArray } from 'preact';

type Dimensions = '16x16' | '24x24' | '32x32' | '48x48' | '64x64' | '96x96' | '128x128';
type Ratios = 'square' | '1by1' | '5by4' | '4by3' | '3by2' | '5by3' | '16by9' | '2by1' | '3by1' | '3by4' | '2by3' | '3by5' | '9by16' | '1by2' | '1by3';

type ImageElementProps = JSX.HTMLAttributes<HTMLImageElement>;
export interface ImageProps extends JSX.DOMAttributes<HTMLElement> {
	src?: ImageElementProps['src'],
	rounded?: boolean;
	dimensions?: Dimensions | Ratios;
}

export const Image: FunctionalComponent<ImageProps> = ({ children, src, rounded, dimensions, ...props }) => {
	const nodes = toChildArray(children);

	if (!!dimensions) {
		nodes.forEach(node => {
			if (typeof node != 'string' && typeof node != 'number' && node.type != 'img') {
				(node.props as unknown as any).class = 'has-ratio';
			}
		});
	}

	return (
		<figure class={ClassNames('image', {
			[`is-${dimensions}`]: !!dimensions
		})} {...props}>
			{src && <img class={ClassNames({
				'is-rounded': !!rounded
			})} src={src} />}
			{nodes}
		</figure>
	);
}
