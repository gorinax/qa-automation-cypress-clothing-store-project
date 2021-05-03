///<reference types="cypress" />

describe('Search elements', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('Search elements with multiple results', () => {        
        cy.fixture('indexFixtures.json').then((index) => {
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButtom).click();
        })
        cy.fixture('searchResults.json').then((index) => {
            cy.get(index.titleResult).should('contain','dress');
        })
    })
    it("Search for elements with multiple results", () => {
        cy.fixture('indexFixtures.json').then((index) => {
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButtom).click();
        })
        cy.fixture('searchResults.json').then((index) => {
            cy.get(index.noResults).should('contain','No results were found for your search');
        })
    })
})