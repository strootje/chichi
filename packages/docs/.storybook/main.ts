import { Configuration } from 'webpack';

export default {
	stories: [
		'../stories/**/*.stories.tsx'
	],

	addons: [
		'@storybook/preset-scss',
		'@storybook/addon-viewport',
		'@storybook/addon-actions',
		'@storybook/addon-controls',
		'@storybook/addon-storysource',
		'@storybook/addon-a11y'
	],

	webpackFinal: async (config: Configuration): Promise<Configuration> => {
		config.resolve!.extensions!.push('.ts', '.tsx');

		config.module!.rules!.push({
			test: /\.tsx?$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'ts-loader',
					options: {
						projectReferences: true,
						compilerOptions: {
							jsx: 'react',
							jsxFactory: 'h'
						}
					}
				}
			]
		});

		return config;
	}
}
