import IndexPage from "./indexPage";

const indexPage = new IndexPage();
export default class LoginPage {
  selectorsList() {
    return {
      form: "form[class*='form']",
      usernameInputField: "#username",
      passwordInputField: "#password",
      submitButton: "[data-test*='submit']",
      errorMessageDiv: ".MuiAlert-message",
    };
  }

  acessSigninPage() {
    cy.visit("/signin");
    cy.location("pathname").should("equal", "/signin");
    cy.get(this.selectorsList().form).should("be.visible");
    return this;
  }

  login(username, password) {
    cy.get(this.selectorsList().usernameInputField).type(username);
    cy.get(this.selectorsList().passwordInputField).type(password);
    cy.get(this.selectorsList().submitButton).click();
  }

  checkErrorMessage() {
    cy.get(this.selectorsList().errorMessageDiv)
      .should("be.visible")
      .contains("Username or password is invalid");
  }

  loginWithValidCredentials(username, password) {
    this.login(username, password);
    indexPage.checkIndexPage();
    return new IndexPage();
  }

  loginWithInvalidCredentials(username, password) {
    this.login(username, password);
    this.checkErrorMessage();
  }
}
