import {LogoutPageObjects} from "@objects/LogoutPageObjects"
import type { Page } from '@playwright/test';


export default class LoginPage  {

constructor(page:Page,logoutpageobjects:LogoutPageObjects) {
     this.page=page;
     this.logoutpageobjects=logoutpageobjects;
}

private page:Page;
private logoutpageobjects:LogoutPageObjects

    async Logout() {
        await this.logoutpageobjects.Profile().click()
        await this.logoutpageobjects.Logout().click()
    }
}

  