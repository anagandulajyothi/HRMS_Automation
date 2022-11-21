
import {test} from '@playwright/test'
import {LoginPage} from '@pages/LoginPage'
import { LoginPageObjects } from '@objects/LoginPageObjects';
import { LogoutPageObjects } from '@objects/LogoutPageObjects';
import {LogoutPage} from '@pages/LogoutPage'
import {testConfig} from '../../testConfig';
import {Utils} from '@lib/utils'

test.describe('Login Page', async () => {
    let loginpageobjects:LoginPageObjects;
    let loginpage:LoginPage;
    let logoutpage:LogoutPage;
    let logoutpageobjects:LogoutPageObjects
    let utils:Utils

test('login to hrms',async ({page}) => { 
    utils = new Utils(page)
    loginpageobjects=new LoginPageObjects(page)
    logoutpageobjects = new LogoutPageObjects(page)
    loginpage= new LoginPage(page,loginpageobjects)
    logoutpage = new LogoutPage(page,logoutpageobjects) 
    await loginpage.loginToHrmsWithValidCredentials(testConfig.validusername,testConfig.Validpassword)
    await logoutpage.Logout()  
    await loginpage.loginToHrmsWithInValidCredentials(testConfig.validusername,testConfig.InValidpassword)
    await utils.assertsuccessmsg(testConfig.Invalidmessage)
    await loginpage.loginToHrmsWithInValidCredentials(testConfig.InValidusername,testConfig.Validpassword)
    await utils.assertsuccessmsg(testConfig.Invalidmessage)
    await loginpage.loginToHrmsWithInValidCredentials(testConfig.InValidusername,testConfig.InValidpassword)
    await utils.assertsuccessmsg(testConfig.Invalidmessage)     
});
})