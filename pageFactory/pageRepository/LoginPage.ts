import {LoginPageObjects} from "@objects/LoginPageObjects"
import type { Page } from '@playwright/test';
import {testConfig} from '../../testConfig';

export class LoginPage  {

public page:Page;
public loginpageobjects:LoginPageObjects

constructor(page:Page,loginpageobjects:LoginPageObjects) {
     this.page= page;
     this.loginpageobjects=loginpageobjects;
}
async loginToHrmsWithValidCredentials(username,password) {
    await this.page.goto(testConfig.url)
    await this.loginpageobjects.login_username().fill(username)
    await this.loginpageobjects.login_password().fill(password)
    await this.loginpageobjects.login_btn().click() 
    await this.loginpageobjects.Addskill_cancel().click()
}
async loginToHrmsWithInValidCredentials(username,password) {
    await this.loginpageobjects.login_username().fill(username)
    await this.loginpageobjects.login_password().fill(password)
    await this.loginpageobjects.login_btn().click() 
    await this.loginpageobjects.login_username().fill("")
    await this.loginpageobjects.login_password().fill("")
}
async Re_login(username,password) {
    await this.loginpageobjects.Profile().click()
    await this.loginpageobjects.Logout().click()
    await this.loginpageobjects.login_username().fill(username)
    await this.loginpageobjects.login_password().fill(password)
    await this.loginpageobjects.login_btn().click()

}
}
