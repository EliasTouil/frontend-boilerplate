describe('template spec', () => {
	it('passes', () => {
		cy.visit('http://localhost:3000');
		cy.get('[data-testid="say-hello"]').should('exist');

		cy.on('window:alert', (text) => {
			expect(text).to.contains('hello world');
		});
		cy.contains(/say hello/i).click();
	});
});
