import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { raiseTicketPage } from '@pages/RaiseTicketPage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    RaiseTicketPage: raiseTicketPage;

}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
     
    RaiseTicketPage: async ({ page }, use) => {
        await use(new raiseTicketPage(page));
    }

});

export default test;