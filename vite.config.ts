import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig((configEnv) => {
	const isDevelopment = configEnv.mode === 'development';

	return {
		plugins: [react(), tsconfigPaths()],
		server: {
			port: 3000,
		},
		preview: {
			//to change this, make sure the precommit tests use the same port
			port: 3000,
		},
		test: {
			globals: true,
			environment: 'happy-dom',
			setupFiles: './src/infrastructure/tests.setup.ts',
		},
		resolve: {},
		css: {
			modules: {
				generateScopedName: isDevelopment
					? '[name]__[local]__[hash:base64:5]'
					: '[hash:base64:5]',
			},
		},
	};
});
