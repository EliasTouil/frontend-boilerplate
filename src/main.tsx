import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './app/router';
ReactDOM.createRoot(document.getElementById('root')!).render(
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
