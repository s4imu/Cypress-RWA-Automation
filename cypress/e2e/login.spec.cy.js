import LoginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json";
import SignupPage from "../pages/signupPage";

const Chance = require("chance");

const chance = new Chance();

const loginPage = new LoginPage();
const signupPage = new SignupPage();

describe("Real-World App (RWA) Login Tests", () => {
  beforeEach(() => {
    signupPage
      .acessSignupPage()
      .fillPersonalInfo(
        chance.first(),
        chance.last(),
        userData.username,
        userData.password,
        userData.password
      )
      .createAccount();
    loginPage.acessSigninPage();
  });

  it("TC01 - Ex.: 01 Successful Login", () => {
    loginPage
      .loginWithValidCredentials(userData.username, userData.password)
      .checkIndexPage();
  });

  it("TC02 - Ex.: 01 Unsuccessful Login", () => {
    loginPage.loginWithInvalidCredentials(
      userData.username,
      userData.wrongPassword
    );
  });
});
