describe('Cypress', () => {

    //see: https://css-tricks.com/using-cypress-to-write-tests-for-a-react-application/

    beforeEach(() => {
        cy.visit('/')
      })

    it('is working', () => {
      expect(true).to.equal(true)
    })

    it('no items shown are loaded ', () => {
        cy.get('.App')
        .get('.card.max-w-sm.rounded')
        .should('have.length', 0)
    })

    it('title is present', () => {
        cy.get('.App')
        .get('h1')
        .should('have.length', 1)
    })
    
    it('options are loaded ', () => {
        cy.get('.App')
        .find('.bg-blue-500')
        .first()
        .click()
        .get('.card.max-w-sm.rounded')
        .should('have.length', 6)
    })
})