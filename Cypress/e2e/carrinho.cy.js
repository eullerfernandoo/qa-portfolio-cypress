describe('Login', () => {
    beforeEach(() => {
    cy.intercept(
      {
        method: 'POST',
        hostname: 'events.backtrace.io',
      },
      {
        statusCode: 204,
        body: '',
      }
    ).as('backtrace')
  })

  it('Adcionar produto ao carrinho', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com/')
  
    cy.get('[data-test="username"]').type('standard_user')
    cy.wait(1000)

    cy.get('[data-test="password"]').type('secret_sauce')
    cy.wait(1000)

    cy.get('[data-test="login-button"]').click()

    // Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.wait(1000)

    // Assert
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1')
    cy.wait(1000)  
    cy.get('#shopping_cart_container').click()
    cy.wait(1000)
    cy.contains('Sauce Labs Backpack').should('be.visible')
     })
    })