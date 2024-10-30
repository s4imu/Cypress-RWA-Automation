import LoginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json";
import TransactionPage from "../pages/transactionPage";

/*
  run yarn list:dev:users in other shell inside RWA directory to get a list of current users in the system 
  then copy one of the username and paste it in 'usernameAmount' value in userData.json 
*/

const loginPage = new LoginPage();
const transactionPage = new TransactionPage();
const amount = 30;
const note = "House";

describe("Real-World App (RWA) Login Tests", () => {
  beforeEach(() => {
    loginPage
      .acessSigninPage()
      .loginWithValidCredentials(userData.usernameAmount, userData.password);
  });

  it("TC01 - Ex.: 02 Successful Transaction", () => {
    transactionPage
      .makeNewTransaction(amount, note)
      .validateTransaction(amount, note);
  });
});
