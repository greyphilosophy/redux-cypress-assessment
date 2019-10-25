context('Add Task View', () => {
  const baseUrl = 'http://localhost:3000/';
  const addTaskUrl = baseUrl + 'addTask';

  it('button on the homepage links to the Add Task view', () => {
    cy.visit(baseUrl)
    cy.get('button[name="add-task-button"]').click()
    cy.url().should('eq', addTaskUrl)
  })

  it('back button links to the homepage', () => {
    cy.get('span[name=back]').click()
    cy.url().should('eq', baseUrl)
  })
})
