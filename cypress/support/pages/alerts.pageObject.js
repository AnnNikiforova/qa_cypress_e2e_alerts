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
    return cy.get('#promptButton');
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
}

export default AlertsPageObject;
