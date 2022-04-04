describe('App', () => {
  it('shows the users list', () => {
    cy.interceptRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/users',
      (req, res, ctx) => {
        return res(
          ctx.delay(),
          ctx.status(200),
          ctx.json([
            { id: 1, name: 'Mock User 1' },
            { id: 2, name: 'Mock User 2' },
            { id: 3, name: 'Mock User 3' },
          ]),
        )
      },
    )
    cy.visit('/')
    cy.findByRole('heading').should('have.text', 'Users')
    cy.findByText('Loading...').should('exist')
    cy.findByRole('list').should('exist')
    cy.findAllByRole('listitem').should('have.length', 3)
  })
})
