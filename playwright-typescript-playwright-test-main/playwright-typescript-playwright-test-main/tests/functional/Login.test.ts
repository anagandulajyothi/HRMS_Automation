import test from '@lib/BaseTest';

test(`Login to HRMS`, async ({ loginPage }) => {
    await loginPage.navigateToURL();
    await loginPage.loginToDotnetEmployee();
    
});