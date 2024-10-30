import SignupPage from "../pages/signupPage";
import userData from "../fixtures/userData.json";

const Chance = require("chance");

const chance = new Chance();

const signupPage = new SignupPage();
describe("Real-World App (RWA) Sigunp Tests", () => {
  it("TC01 - Ex.: 01 Successful Signup", () => {
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
  });

  it("TC02 - Ex.: 01 Unsuccessful Signup", () => {
    signupPage
      .acessSignupPage()
      .fillPersonalInfo(
        chance.first(),
        chance.last(),
        userData.username,
        userData.password,
        userData.wrongPassword
      )
      .checkPasswordMismatchErrorMessage();
  });
});
