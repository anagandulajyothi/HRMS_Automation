import {test} from '@playwright/test'
import {LoginPage}  from '@pages/LoginPage'
import { LoginPageObjects } from '@objects/LoginPageObjects';
import {RaiseTicketObjects} from '@objects/RaiseTicketObjects';
import {RaiseTicketPage}  from '@pages/RaiseTicketPage'
import {testConfig} from '../../testConfig';
import {Utils} from '@lib/Utils'
test.describe('Login Page', async () => {
    let loginpageobjects:LoginPageObjects;
    let loginpage:LoginPage;
    let raiseticketobjects:RaiseTicketObjects
    let raiseticketpage:RaiseTicketPage
    let utils:Utils
    const statusData = [
        {
            Ticketstatus : "Cancel"
        },
        {
            Ticketstatus : "Info Pending"
        },
        {
            Ticketstatus : "Info Provided"
        },
        {
            Ticketstatus : "Need More Info"
        },
        {
            Ticketstatus : "On Hold"
        },
        {
            Ticketstatus : "Open"
        },
        {
            Ticketstatus : "Pending" 
        },
        {
            Ticketstatus : "Re Open"
        },
        {
            Ticketstatus : "Resolved"
        },
        {
            Ticketstatus : "Send For Approval"
        },
        {
            Ticketstatus : "Work-In-Progress"
        },
        {
            Ticketstatus : "Approved"
        },
        {
            Ticketstatus : "Rejected"
        }
    ]
   
   test.beforeEach(async ({page}) => {
     utils = new Utils(page)
     loginpageobjects=new LoginPageObjects(page)
     loginpage= new LoginPage(page,loginpageobjects)    
     raiseticketobjects = new RaiseTicketObjects(page)
     raiseticketpage = new RaiseTicketPage(page,raiseticketobjects)
     loginpage.loginToHrmsWithValidCredentials(testConfig.validusername,testConfig.Validpassword)
   })
   statusData.forEach(data => {
   test(`Raise Ticket ${data.Ticketstatus}`,async ({}) => {
     await raiseticketpage.Raise_A_Ticket()
     await utils.assertsuccessmsgformail(testConfig.toastmessage)
     await loginpage.Re_login(testConfig.techsupporthodusername,testConfig.techsupporthodpassword)
     await raiseticketpage.Status_of_Ticket(data.Ticketstatus)
     await utils.assertsuccessmsgformail(testConfig.toastmessage)
})   
})
})