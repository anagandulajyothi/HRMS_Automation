import {LoginPageObjects} from "@objects/LoginPageObjects"
import type { Page } from '@playwright/test';
import {testConfig} from '../../testConfig';

export default class LoginPage  {

constructor(page:Page,loginpageobjects:LoginPageObjects) {
     this.page=page;
     this.loginpageobjects=loginpageobjects;
}

private page:Page;
private loginpageobjects:LoginPageObjects

async navigationtourl(){
    await this.page.goto(testConfig.url)
}

async loginToApplication() {
    await this.loginpageobjects.login_username().fill(testConfig.username)
    await this.loginpageobjects.login_password().fill(testConfig.password)
    await this.loginpageobjects.login_btn().click()
    await this.loginpageobjects.Addskill_cancel().click()
}
    

}