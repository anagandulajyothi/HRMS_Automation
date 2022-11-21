import {LogoutPageObjects} from "@objects/LogoutPageObjects"
import type { Page } from '@playwright/test';

export class LogoutPage  {

 constructor(page:Page,logoutpageobjects:LogoutPageObjects) {
    this.logoutpageobjects=logoutpageobjects;
  }
   public logoutpageobjects:LogoutPageObjects

    async Logout() {
        await this.logoutpageobjects.Profile().click()
        await this.logoutpageobjects.Logout().click()
    }
}

  