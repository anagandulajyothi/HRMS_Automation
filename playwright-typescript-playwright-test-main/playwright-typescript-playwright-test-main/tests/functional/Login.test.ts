
import {test} from '@playwright/test'
import LoginPage  from '@pages/LoginPage'
import { LoginPageObjects } from '@objects/LoginPageObjects';
import { LogoutPageObjects } from '@objects/LogoutPageObjects';
import LogoutPage from '@pages/LogoutPage'
import {testConfig} from '../../testConfig';

test.describe('Login Page', async () => {
    let loginpageobjects:LoginPageObjects;
    let loginpage:LoginPage;
    let logoutpage:LogoutPage;
    let logoutpageobjects:LogoutPageObjects
   
test('login to hrms',async ({page}) => { 
    loginpageobjects=new LoginPageObjects(page)
    logoutpageobjects = new LogoutPageObjects(page)
    loginpage= new LoginPage(page,loginpageobjects)
    logoutpage = new LogoutPage(page,logoutpageobjects)
    await loginpage.navigationtourl() 
    await loginpage.loginToApplication(testConfig.validusername,testConfig.Validpassword)
    await loginpage.AddSkill_cancel()
    await logoutpage.Logout()  
    await loginpage.loginToApplication(testConfig.validusername,testConfig.InValidpassword)
    await loginpage.cleartext()
    await loginpage.loginToApplication(testConfig.InValidusername,testConfig.Validpassword)
    await loginpage.cleartext()
    await loginpage.loginToApplication(testConfig.InValidusername,testConfig.InValidpassword)     
});
})