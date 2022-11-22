
import { Locator, Page } from "@playwright/test";

export class RaiseTicketObjects{
    
    constructor(page:Page){
      this.page=page
    }
 public page:Page

 public raise_ticket():Locator{
   return this.page.locator('//span[normalize-space()="Raise Ticket"]')
 }
 public Add_Ticket():Locator{
   return this.page.locator('#btnAddNewTicket')
 }
 public Department():Locator{
   return this.page.locator('#ddlDept')
 }
 public Select_Department():Locator{
    return this.page.locator('//select[@class="form-control input-mediam"][contains(.,"Technical")]')
 }
 public Severity():Locator{
    return this.page.locator('#ddlSeverity')
 }
 public Select_Severity ():Locator{
    return this.page.locator('//select[@class="form-control input-mediam"][contains(.,"High")]')
 }
 public TicketType ():Locator{
    return this.page.locator('#txtProblemType')
 }
 public Select_TicketType  ():Locator{
    return this.page.locator('//select[@class="form-control input-mediam"][contains(.,"Internet")]')
 }
 public TicketSummary ():Locator{
    return this.page.locator('//textarea[@id="txtProblemSummary"]')
 }
 public AddTicket_Button ():Locator{
    return this.page.locator('#btnSaveTicket')
 }
 public RaiseTicket ():Locator{
    return this.page.locator('(//span[@class="title"][normalize-space()="Raise Ticket"])[2]')
 }
 public Searchforticket():Locator{
   return this.page.locator('input[type="search"]')
 }
 public Edit ():Locator{
    return this.page.locator('(//a[@title="You Can Edit The Ticket."][normalize-space()="Edit"])[1]')
 }
 public Status ():Locator{
    return this.page.locator('#ddlStatuss')
 }
 public sendforapproval():Locator{
   return this.page.locator('//select[@id="ddlSend4Approval"]')
 }
 public selectsendforapproval ():Locator{
    return this.page.locator('//select[@class="form-control input-mediam"][contains(.,"dotnethod@intonenetworks.com")]')
 }
 public Select_Status ():Locator{
    return this.page.locator('//select[@class="form-control input-mediam"][contains(.,"Resolved")]')
 }
 public TicketRemarks ():Locator{
    return this.page.locator('#txtTicketRemarks')
 }
 public updateTicket ():Locator{
     return this.page.locator('#btnUpdateTicket')
 }

}