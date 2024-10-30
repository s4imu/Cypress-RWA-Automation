export default class SignupPage {
  selectorsList() {
    return {
      form: "form[class*='form']",
      firstNameInputField: "#firstName",
      lastNameInputField: "#lastName",
      usernameInputField: "#username",
      passwordInputField: "#password",
      confirmPasswordInputField: "#confirmPassword",
      submitButton: "[data-test*='submit']",
    };
  }

  acessSignupPage() {
    cy.visit("/signup");
    cy.location("pathname").should("equal", "/signup");
    cy.get(this.selectorsList().form).should("be.visible");
    return this;
  }

  fillPersonalInfo(firstName, lastName, username, password, confirmPassword) {
    cy.get(this.selectorsList().firstNameInputField).type(firstName);
    cy.get(this.selectorsList().lastNameInputField).type(lastName);
    cy.get(this.selectorsList().usernameInputField).type(username);
    cy.get(this.selectorsList().passwordInputField).type(password);
    cy.get(this.selectorsList().confirmPasswordInputField).type(
      confirmPassword
    );
    return this;
  }

  createAccount() {
    cy.get(this.selectorsList().submitButton).click();
    cy.location("pathname").should("equal", "/signin");
    cy.get(this.selectorsList().form).should("be.visible");
  }

  checkPasswordMismatchErrorMessage() {
    cy.contains("p", "Password does not match").should("be.visible");
    cy.get(this.selectorsList().submitButton).should("be.disabled");
  }
}
