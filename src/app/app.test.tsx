import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { routerConfig } from './router';

describe('Boilerplate', () => {
	it('Shows hello button', () => {
		const router = createMemoryRouter(routerConfig, {
			initialEntries: ['/'],
		});
		render(<RouterProvider router={router} />);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});
});
