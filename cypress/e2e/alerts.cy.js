/// <reference types='cypress' />

import AlertsPageObject from '../support/pages/alerts.pageObject';

const alertsPage = new AlertsPageObject();

Cypress.on('uncaught:exception', () => {
  return false;
});

describe('Cypress application', () => {
  beforeEach(() => {
    alertsPage.visit();
  });

  it('should assert text inside the first alert', () => {
    cy.on('window:alert', (text) => {
      expect(text).to.equal('You clicked a button');
    });

    alertsPage.clickSimpleAlert();
  });

  it('should assert delayed alert appears without arbitrary wait', () => {
    cy.on('window:alert', (text) => {
      expect(text).to.equal('This alert appeared after 5 seconds');
    });

    alertsPage.clickTimerAlert();
  });

  it('should assert confirmation alert and handle OK selection', () => {
    cy.on('window:confirm', (text) => {
      expect(text).to.equal('Do you confirm action?');
      return true;
    });

    alertsPage.clickConfirmAlert();

    alertsPage.confirmResult
      .should('contain', 'You selected Ok');
  });

  it('should assert confirmation alert and handle Cancel selection', () => {
    cy.on('window:confirm', (text) => {
      expect(text).to.equal('Do you confirm action?');
      return false;
    });
    alertsPage.clickConfirmAlert();

    alertsPage.confirmResult
      .should('contain', 'You selected Cancel');
  });

  it('should enter text in prompt alert and validate input', () => {
    const name = 'Cypress User';

    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(name);
    });

    alertsPage.clickPromptAlert();

    alertsPage.promptResult
      .should('contain', name);
  });
});
