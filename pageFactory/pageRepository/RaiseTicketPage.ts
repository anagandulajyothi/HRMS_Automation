
import {RaiseTicketObjects} from "@objects/RaiseTicketObjects"
import type { Page } from '@playwright/test';
import {testConfig} from '../../testConfig';

export class RaiseTicketPage  {

 constructor(page:Page,raiseticketobjects:RaiseTicketObjects) {
     this.page= page
     this.raiseticketobjects=raiseticketobjects
 }

   public page:Page;
   public raiseticketobjects:RaiseTicketObjects;

    async Raise_A_Ticket(){
        await this.raiseticketobjects.raise_ticket().click()
        await this.raiseticketobjects.Add_Ticket().click()
        await this.raiseticketobjects.Department().click()
        await this.raiseticketobjects.Select_Department().selectOption({label:testConfig.Department})
        await this.raiseticketobjects.Severity().click()
        await this.raiseticketobjects.Select_Severity().selectOption({label:testConfig.Severity})
        await this.page.waitForTimeout(200)
        await this.raiseticketobjects.TicketType().click()
        await this.raiseticketobjects.Select_TicketType().selectOption({label:testConfig.TicketType})
        await this.raiseticketobjects.TicketSummary().fill(testConfig.TicketSummary)
        await this.raiseticketobjects.AddTicket_Button().click()
    }
    async Status_of_Ticket (status){
        await this.raiseticketobjects.RaiseTicket().click()
        await this.raiseticketobjects.Searchforticket().fill(testConfig.Ticketstate)
        await this.raiseticketobjects.Edit().click()
        await this.page.waitForTimeout(3000)
        await this.raiseticketobjects.Status().click()
        await this.raiseticketobjects.Select_Status().selectOption(status)
        if(status == 'Send For Approval'){
            await this.raiseticketobjects.sendforapproval().selectOption({label:testConfig.selectapproval})     
        }
        await this.raiseticketobjects.TicketRemarks().fill(testConfig.TicketRemarks)
        await this.raiseticketobjects.updateTicket().click()   
    }
}