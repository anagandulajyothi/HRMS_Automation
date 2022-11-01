import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@lib/WebActions";
import { expect, Page } from '@playwright/test';
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

    async Raise_A_Ticket():Promise<void> {
        await webActions.clickElement(RaiseTicketObjects.Raise_Ticket);
        await webActions.clickElement(RaiseTicketObjects.Add_Ticket);
        await webActions.clickElement(RaiseTicketObjects.Department);
        await webActions.selectOptionFromDropdown(RaiseTicketObjects.Select_Department,testConfig.Department);
        await webActions.clickElement(RaiseTicketObjects.Severity);
        await this.page.waitForTimeout(3000); 
        await webActions.selectOptionFromDropdown(RaiseTicketObjects.Select_Severity,testConfig.Severity);
        await webActions.clickElement(RaiseTicketObjects.TicketType);
        await webActions.selectOptionFromDropdown(RaiseTicketObjects.Select_TicketType,testConfig.TicketType);
        await webActions.clickElement(RaiseTicketObjects.TicketSummary);
        await webActions.enterElementText(RaiseTicketObjects.TicketSummary,testConfig.TicketSummary)
        await webActions.clickElement(RaiseTicketObjects.AddTicket_Button); 
        
       
    }
    async Resolve_Ticket():Promise<void> {
        await webActions.clickElement(RaiseTicketObjects.RaiseTicket)
        await webActions.clickElement(RaiseTicketObjects.Edit);
        await this.page.waitForTimeout(3000);
        await webActions.clickElement(RaiseTicketObjects.Status);
        await webActions.selectOptionFromDropdown(RaiseTicketObjects.Select_Status,testConfig.Status);
        await webActions.clickElement(RaiseTicketObjects.TicketRemarks);
        await webActions.enterElementText(RaiseTicketObjects.TicketRemarks,testConfig.TicketRemarks)
        await webActions.clickElement(RaiseTicketObjects.updateTicket);
        
        
    }

}
    

   
   






  


   


