import LoginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json";

const loginPage = new LoginPage();

describe("Real-World App (RWA) Login Tests", () => {
  beforeEach(() => {
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
