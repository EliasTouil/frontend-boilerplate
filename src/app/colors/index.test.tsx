import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { routerConfig } from '../router';

describe('Colors', () => {
	it('Shows color list', async () => {
		const router = createMemoryRouter(routerConfig, {
			initialEntries: ['/colors'],
		});
		render(<RouterProvider router={router} />);
		const colorsContainer = await screen.findByTestId('colors-container');
		expect(colorsContainer).toBeInTheDocument();
	});
});
