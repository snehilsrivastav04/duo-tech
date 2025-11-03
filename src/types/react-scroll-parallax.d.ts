declare module 'react-scroll-parallax' {
	import type React from 'react';
	import { ReactNode } from 'react';

	export interface ParallaxProps {
		speed?: number;
		disabled?: boolean;
		children?: ReactNode;
	}

	export interface UseParallaxResult {
		ref: React.RefObject<HTMLElement>;
		style?: React.CSSProperties;
	}

	export type ParallaxComponent = React.FC<ParallaxProps>;

	export interface ParallaxBannerLayer {
		image?: string;
		speed?: number;
		scale?: any;
		opacity?: any;
		shouldAlwaysCompleteAnimation?: boolean;
	}

	export interface ParallaxBannerProps {
		layers: ParallaxBannerLayer[];
		className?: string;
		children?: ReactNode;
	}

	export const Parallax: ParallaxComponent;
	export const ParallaxBanner: React.FC<ParallaxBannerProps>;
	export function useParallax(options: { speed: number }): UseParallaxResult;
	export function ParallaxProvider(props: { children: ReactNode }): JSX.Element;
}
