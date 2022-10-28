import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';
import {testConfig} from '../../testConfig';
import { RaiseTicketObjects } from "@objects/RaiseTicketObjects";

let webActions: WebActions;

export class raiseTicketPage extends RaiseTicketObjects{

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async verifyRaiseTicketModule():Promise<void> {
        await webActions.clickElement(RaiseTicketObjects.Raise_Ticket);

    }


   


}