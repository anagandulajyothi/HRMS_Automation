import { test } from '@playwright/test'
import { AssetPageObjects } from '@objects/AssetPageObjects';
import { AssetPage } from '@pages/AssetPage';
import { testConfig } from '../../testConfig';
import { LoginPageObjects } from '@objects/LoginPageObjects';
import { LoginPage } from '@pages/LoginPage';
import { Utils } from '@lib/Utils';
test.describe('create asset', async () => {
    let assetpageobjects: AssetPageObjects
    let assetpage: AssetPage;
    let loginpageobjects: LoginPageObjects;
    let loginpage: LoginPage;
    let utils: Utils
    test.beforeEach(async ({ page }) => {
        utils = new Utils(page)
        loginpageobjects = new LoginPageObjects(page)
        loginpage = new LoginPage(page, loginpageobjects)
        assetpageobjects = new AssetPageObjects(page)
        assetpage = new AssetPage(page, assetpageobjects)
        loginpage.loginToHrmsWithValidCredentials(testConfig.techsupportempusername, testConfig.password)
    })
    test('create asset', async ({ }) => {
     await assetpage.createcategory(testConfig.Categoryname, testConfig.Categorycode)
     await utils.assertSucessMsg(testConfig.updatedtoastmessage)
     await assetpage.createsubcategory(testConfig.Categoryname, testConfig.subcategory, testConfig.Subcategorycode)
     await utils.assertSucessMsg(testConfig.updatedtoastmessage)
     await assetpage.createitem(testConfig.Categoryname, testConfig.subcategory, testConfig.Item, testConfig.Categorycode, testConfig.Subcategorycode)
     await utils.assertSucessMsg(testConfig.updatedtoastmessage)
     await assetpage.createasset(testConfig.Categoryname, testConfig.subcategory, testConfig.Item, "Hyd-Gachibowli", testConfig.Specification1, testConfig.Specification2, testConfig.serial)
     await utils.assertSucessMsg(testConfig.Assettoastmessage)
     await loginpage.Re_login(testConfig.techsupporthodusername, testConfig.techsupportpassword)
     await assetpage.approveasset("Pending", "Hyd-Gachibowli", testConfig.Categoryname)
     await utils.assertapprovalsuccessmsg(testConfig.approvaltoastmessage)
   })
})