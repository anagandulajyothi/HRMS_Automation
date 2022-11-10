
import {test} from '@playwright/test'
import LoginPage  from '@pages/LoginPage'
import { LoginPageObjects } from '@objects/LoginPageObjects';

test.describe('Login Page', async () => {
    let loginpageobjects:LoginPageObjects;
    let loginpage:LoginPage;

test.beforeEach(async ({page})=>{
    loginpageobjects=new LoginPageObjects(page)
    loginpage= new LoginPage(page,loginpageobjects)
    
})
   
test('login to hrms',async ({}) => { 
    await loginpage.navigationtourl()
    await loginpage.loginToApplication()
        
});

});