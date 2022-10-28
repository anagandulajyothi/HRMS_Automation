import test from '@lib/BaseTest';

test(`Go to RaiseTicket`, async ({ loginPage, RaiseTicketPage }) => {

    await loginPage.navigateToURL();
    await loginPage.loginToApplication();   
    await RaiseTicketPage.verifyRaiseTicketModule();


})