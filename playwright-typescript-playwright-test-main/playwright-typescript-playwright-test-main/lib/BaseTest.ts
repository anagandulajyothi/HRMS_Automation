/* import { test as baseTest } from '@playwright/test';
//import { LoginPage } from '@pages/LoginPage';
import { raiseTicketPage } from '@pages/RaiseTicketPage';
//import { LogoutPage } from '@pages/LogoutPage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    RaiseTicketPage: raiseTicketPage;
    LogoutPage: LogoutPage;

}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
     
    RaiseTicketPage: async ({ page }, use) => {
        await use(new raiseTicketPage(page));
    },
    LogoutPage: async({ page }, use) => {
        await use(new LogoutPage(page));
    }

}); */

//export default test;