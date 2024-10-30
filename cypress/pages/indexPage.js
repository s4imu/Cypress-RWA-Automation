export default class IndexPage {
  selectorsList() {
    return {
      mainGrid: "[data-test*='main']",
    };
  }

  checkIndexPage() {
    cy.get(this.selectorsList().mainGrid).should("be.visible");
  }
}
