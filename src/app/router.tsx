import { createBrowserRouter } from 'react-router-dom';
import App from '.';
import Colors from './colors';

export const routerConfig = [
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'colors',
		element: <Colors />,
	},
];
const router = createBrowserRouter(routerConfig);

export default router;
