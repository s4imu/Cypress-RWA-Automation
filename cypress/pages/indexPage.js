export default class IndexPage {
  selectorsList() {
    return {
      mainGrid: "[data-test*='main']",
      dataFilterButton:
        "[data-test*='transaction-list-filter-date-range-button']",
      calendar: "[aria-label='Calendar']",
      transactionList: "[data-test='transaction-list']",
      transactionItensList: "[data-test*='transaction-item']",
    };
  }

  checkIndexPage() {
    cy.get(this.selectorsList().mainGrid).should("be.visible");
    return this;
  }

  transactionFilterDates(startDate, endDate) {
    cy.get(this.selectorsList().dataFilterButton).click();
    cy.get(this.selectorsList().calendar).should("be.visible");
    cy.get(`[data-date='${startDate}']`)
      .should("be.visible")
      .click({ force: true });
    cy.get(`[data-date='${endDate}']`)
      .should("be.visible")
      .click({ force: true });
    return this;
  }

  checkNoTransactionsMessage() {
    cy.contains("h2", "No").should("be.visible");
    cy.contains("h2", "Transactions").should("be.visible");
  }

  viewSuccessfulTransactionHistory(startDate, endDate) {
    this.transactionFilterDates(startDate, endDate);
    cy.get(this.selectorsList().transactionList).should("be.visible");
    cy.get(this.selectorsList().transactionItensList).should(
      "have.length.greaterThan",
      0
    );
  }

  viewTransactionListNoHistory(startDate, endDate) {
    this.transactionFilterDates(startDate, endDate);
    this.checkNoTransactionsMessage();
  }
}
