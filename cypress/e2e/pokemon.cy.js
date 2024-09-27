describe('Pokedex', function() {

  beforeEach(function() {
    cy.visit('http://localhost:5000') // 8080
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to specific pokomeno', function() {
    cy.contains('ivysaur fail').click()
    cy.contains('chlorophyll')
  })
})