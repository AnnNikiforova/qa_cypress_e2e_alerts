class AlertsPageObject {
  visit() {
    cy.visit('/alerts', { failOnStatusCode: false });
  }

  get alertButton() {
    return cy.get('#alertButton');
  }

  get timerAlertButton() {
    return cy.get('#timerAlertButton');
  }

  get confirmButton() {
    return cy.get('#confirmButton');
  }

  get promptButton() {
    return cy.get('#promtButton');
  }

  get confirmResult() {
    return cy.get('#confirmResult');
  }

  get promptResult() {
    return cy.get('#promptResult');
  }

  clickSimpleAlert() {
    this.alertButton.click();
  }

  clickTimerAlert() {
    this.timerAlertButton.click();
  }

  clickConfirmAlert() {
    this.confirmButton.click();
  }

  clickPromptAlert() {
    this.promptButton.click();
  }

  assertAlertText(expectedText) {
    cy.on('window:alert', (text) => {
      expect(text).to.equal(expectedText);
    });
  }

  confirmAlert(expectedText, action = true) {
    cy.on('window:confirm', (text) => {
      expect(text).to.equal(expectedText);
      return action;
    });
  }

  enterTextToPrompt(value) {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(value);
    });
  }
}

export default AlertsPageObject;
