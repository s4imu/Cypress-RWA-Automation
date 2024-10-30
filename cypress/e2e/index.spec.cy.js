import LoginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json";
import IndexPage from "../pages/indexPage";

/*
  for "TC01 - Ex.: 03 View successful transaction history" please select a date range before today's date
  for "TC02 - Ex.: 03 View history with no transaction" please select a date range after today's date
*/

const loginPage = new LoginPage();
const indexPage = new IndexPage();

describe("Real-World App (RWA) Transaction History Tests", () => {
  beforeEach(() => {
    loginPage
      .acessSigninPage()
      .loginWithValidCredentials(userData.usernameAmount, userData.password);
  });

  it("TC01 - Ex.: 03 View successful transaction history", () => {
    indexPage
      .checkIndexPage()
      .viewSuccessfulTransactionHistory("2024-10-28", "2024-10-30");
  });

  it("TC02 - Ex.: 03 View history with no transaction", () => {
    indexPage
      .checkIndexPage()
      .viewTransactionListNoHistory("2024-11-02", "2024-11-04");
  });
});
