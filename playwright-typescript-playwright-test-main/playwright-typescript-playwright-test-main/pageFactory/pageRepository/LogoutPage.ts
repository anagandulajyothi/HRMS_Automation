import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';
import { LogoutPageObjects } from "@objects/LogoutPageObjects";

let webActions: WebActions;
export class LogoutPage extends LogoutPageObjects{
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }
    async Logout():Promise<void>{
        await webActions.clickElement(LogoutPageObjects.Profile);
        await webActions.clickElement(LogoutPageObjects.Logout);
    }
}

  