describe('colors', () => {
	it('shows colors', () => {
		cy.intercept('https://random-flat-colors.vercel.app/api/*', {
			fixture: 'colors.json',
			status: 200,
		}).as('mock-colors');

		cy.visit('http://localhost:3000');
		cy.contains(/go to colors/i).click();

		cy.wait('@mock-colors');

		cy.get("[data-testid='colors-container']")
			.children()
			.should('have.length', 5);
	});

	it('Shows error message on 500', () => {
		cy.intercept('https://random-flat-colors.vercel.app/api/*', {
			statusCode: 500,
			body: {
				message: 'Internal Server Error',
			},
		}).as('mock-colors-error');

		cy.visit('http://localhost:3000/colors');
		cy.wait('@mock-colors-error');

		cy.get('[data-testid="colors-error"]').should('exist');
	});
});
