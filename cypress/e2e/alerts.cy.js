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
    alertsPage.clickSimpleAlert();
    alertsPage.assertAlertText('You clicked a button');
  });

  it('should assert delayed alert appears without arbitrary wait', () => {
    alertsPage.clickTimerAlert();
    alertsPage.assertAlertText('This alert appeared after 5 seconds');
  });

  it('should assert confirmation alert and handle OK selection', () => {
    alertsPage.clickConfirmAlert();
    alertsPage.confirmAlert('Do you confirm action?', true);
    alertsPage.confirmResult
      .should('contain', 'You selected Ok');
  });

  it('should assert confirmation alert and handle Cancel selection', () => {
    alertsPage.clickConfirmAlert();
    alertsPage.confirmAlert('Do you confirm action?', false);
    alertsPage.confirmResult
      .should('contain', 'You selected Cancel');
  });

  it('should enter text in prompt alert and validate input', () => {
    const name = 'Cypress User';

    alertsPage.enterTextToPrompt(name);
    alertsPage.clickPromptAlert();
    alertsPage.promptResult
      .should('contain', name);
  });
});
