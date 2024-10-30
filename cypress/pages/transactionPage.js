export default class TransactionPage {
  selectorsList() {
    return {
      mainGrid: "[data-test*='main']",
      newTransactionButton: "[data-testid*='AttachMoneyIcon']",
      contactsList: "[data-test*='user-list-item']",
      amountInputField: "#amount",
      noteInputField: "#transaction-create-description-input",
      submitPaymentButton: "[data-test*='transaction-create-submit-payment']",
    };
  }

  checkTransactionPage() {
    cy.location("pathname").should("contains", "/transaction");
    cy.get(this.selectorsList().mainGrid).should("be.visible");
    return this;
  }

  makeNewTransaction(amount, note) {
    cy.get(this.selectorsList().newTransactionButton).click();
    this.checkTransactionPage();
    cy.get(this.selectorsList().contactsList).eq(1).click();
    cy.get(this.selectorsList().amountInputField).type(amount);
    cy.get(this.selectorsList().noteInputField).type(note);
    cy.get(this.selectorsList().submitPaymentButton).click();
    return this;
  }

  validateTransaction(amount, note) {
    cy.contains("div", "Transaction Submitted!").should("be.visible"); //validate toast
    // validate message
    cy.contains("h2", `${amount}`).should("be.visible");
    cy.contains("h2", `${note}`).should("be.visible");
  }
}
