export class RaiseTicketObjects{
    protected static Raise_Ticket = '//span[normalize-space()="Raise Ticket"]';
    protected static Add_Ticket   = '#btnAddNewTicket';
    protected static Department   = '#ddlDept'
    protected static Select_Department = '//select[@class="form-control input-mediam"][contains(.,"Admin")]';
    protected static Severity = '#ddlSeverity';
    protected static Select_Severity = '//select[@class="form-control input-mediam"][contains(.,"High")]';
    protected static TicketType = '#txtProblemType';
    protected static Select_TicketType = '//select[@class="form-control input-mediam"][contains(.,"AC")]';
    protected static TicketSummary = '//textarea[@id="txtProblemSummary"]';
    protected static AddTicket_Button = '#btnSaveTicket';
    protected static RaiseTicket = '//i[@class="icon-bag"]'
    protected static Edit = '(//i[@class="fa fa-edit"])[1]';
    protected static Status = '#ddlStatuss';
    protected static Select_Status = '//select[@class="form-control input-mediam"][contains(.,"Resolved")]';
    protected static TicketRemarks = '#txtTicketRemarks';
    protected static updateTicket = '#btnUpdateTicket';
    
 



}