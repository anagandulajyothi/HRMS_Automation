import { Page, Locator } from "@playwright/test";
export class AssetPageObjects {
    constructor(page: Page) {
        this.page = page
    }
    public page: Page

    public asset(): Locator {
        return this.page.locator('//a[@href="javascript:;"]//i[@class="icon-docs"]')
    }
    public ManageCategory(): Locator {
        return this.page.locator('//span[normalize-space()="Manage Category"]')
    }
    public addcategory(): Locator {
        return this.page.locator('#btnaddCategory')
    }

    public category(): Locator {
        return this.page.locator('//input[@id="txtDescription"]')
    }

    public code(): Locator {
        return this.page.locator('//input[@id="txtCategoryCode"]')
    }
    public addbutton(): Locator {
        return this.page.locator('(//button[normalize-space()="Add New"])[1]')
    }

    public close(): Locator {
        return this.page.locator('//div[@id="tab_CompanyDetails"]//button[@type="button"][normalize-space()="Close"]')
    }
    public managesubcategory(): Locator {
        return this.page.locator('//span[normalize-space()="Manage Sub Category"]')
    }

    public selectclick(): Locator {
        return this.page.locator('(//a[@class="select2-choice"])[2]')
    }
    public searchcategory(): Locator {
        return this.page.locator('//input[@id="s2id_autogen2_search"]')
    }

    public selectcategory(): Locator {
        return this.page.locator('(//div[@class="select2-result-label"])[1]')
    }

    public subcategory(): Locator {
        return this.page.locator('//input[@id="txtDescription"]')
    }

    public manageitem(): Locator {
        return this.page.locator('//span[normalize-space()="Manage Item"]')
    }

    public additem(): Locator {
        return this.page.locator('#btnaddCategory')
    }

    public selectcategoryitemclick(): Locator {
        return this.page.locator('//div[@id="s2id_ddlCategoryType1"]//a[@class="select2-choice"]')
    }
    public searchcategoryitem(): Locator {
        return this.page.locator('//input[@id="s2id_autogen2_search"]')
    }

    public selectcategoryitem(): Locator {
        return this.page.locator('(//div[@class="select2-result-label"])[1]')
    }
    public selectsubcategoryitemclick(): Locator {
        return this.page.locator('//div[@class="select2-container form-control select2me"]')
    }
    public searchsubcategoryitem(): Locator {
        return this.page.locator('//input[@id="s2id_autogen4_search"]')
    }

    public selectsubcategotyitem(): Locator {
        return this.page.locator('(//div[@class="select2-result-label"])[1]')
    }

    public item(): Locator {

        return this.page.locator('//input[@id="txtDescription"]')
    }


    public manageasset(): Locator {
        return this.page.locator('//span[normalize-space()="Manage Assets"]')
    }

    public assetbutton(): Locator {
        return this.page.locator('#btnaddNewManageAsset')
    }
    public assetcategoryclick(): Locator {
        return this.page.locator('//div[@id="s2id_ddlCategory"]//a[@class="select2-choice"]')
    }
    public searchassetcategory(): Locator {
        return this.page.locator('//input[@id="s2id_autogen15_search"]')
    }

    public assetselectcategory(): Locator {
        return this.page.locator('(//div[@class="select2-result-label"])[1]')
    }
    public assetsubcategoryclick(): Locator {
        return this.page.locator('//div[@id="s2id_ddlSubCategory"]//a[@class="select2-choice"]')
    }
    public searchassetsubcategory(): Locator {
        return this.page.locator('(//input[@type="text"][contains(@id,"search")])[11]')
    }
    public assetselectsubcategory(): Locator {
        return this.page.locator('(//div[@class="select2-result-label"])[1]')
    }


    public assetitemclick(): Locator {
        return this.page.locator('//div[@id="s2id_ddlItem"]//a[@class="select2-choice"]')
    }
    public searchassetitem(): Locator {
        return this.page.locator('(//input[@type="text"][contains(@id,"search")])[11]')
    }
    public assetselectitem(): Locator {
        return this.page.locator('(//div[@class="select2-result-label"])[1]')
    }
    public clicklocation(): Locator {
        return this.page.locator('//select[@id="ddlLocation"]')
    }
    public selectlocation(): Locator {
        return this.page.locator('select[id="ddlLocation"] option[value="HYD02"]')
    }
    public specification1(): Locator {
        return this.page.locator('//input[@id="txtSpec1"]')
    }
    public specification2(): Locator {
        return this.page.locator('//input[@id="txtSpec2"]')
    }
    public serial(): Locator {

        return this.page.locator('//input[@id="txtSerial"]')
    }
    public saveasset(): Locator {
        return this.page.locator('//button[@id="btnSaveOrUpdateAsset"]')
    }
    public closebtn(): Locator {
        return this.page.locator('//button[@id="btnCancel"]')
    }
    public edit(): Locator {
        return this.page.locator('(//a[@value="Edit"])[1]')
    }
    public issueasset(): Locator {
        return this.page.locator('//a[@id="btnaddAllocateAsset"]')
    }
    public selectemp(): Locator {
        return this.page.locator('(//span[@class="filter-option pull-left"])[1]')
    }
    public allocateemp(): Locator {
        return this.page.locator('//button[@id="btnGetAllocateEmployeesList"]')
    }
    public selectempp(): Locator {
        return this.page.locator('//span[@class="text"][contains(.,"Dot Net Employee (Dot Net Team)")]')
    }
    public empcheckbox(): Locator {
        return this.page.locator('//input[@id="chkrowIndex0"]')
    }
    public issueassetbtn(): Locator {
        return this.page.locator('#btnAllocateAsset')
    }
    public sendmail(): Locator {
        return this.page.locator('//button[@id="btnSendAssetIssuedMail"]')
    }
    public pendingclick(): Locator {
        return this.page.locator('//select[@id="ddlassetapproveorpending"]')
    }
    public pending(): Locator {

        return this.page.locator('//option[@value="RequestForApproval"]')
    }
    public categoryselect(): Locator {
        return this.page.locator('//select[@id="ddlFltrCategorys"]')
    }
    public selectlocationhyd(): Locator {
        return this.page.locator('//select[@id="ddlAssetLocation"]')
    }
    public editbtn(): Locator {
        return this.page.locator('(//a[@value="Edit"])[1]')
    }
    public approvalbutton(): Locator {
        return this.page.locator('//a[@id="btnassetApprove"]')
    }
    public approve(): Locator {
        return this.page.locator('//button[@id="btnAssetApprove"]')
    }
    public approvalclose(): Locator {
        return this.page.locator('#btnCancel')
    }
    public returnasset(): Locator {
        return this.page.locator('(//a[normalize-space()="Return Asset"])[1]')
    }
    public returnassetcheckbox(): Locator {
        return this.page.locator('(//input[@id="chkrowIndex0"])[1]')
    }
    public returnassetbtn(): Locator {
        return this.page.locator('//button[@id="btnRetunAsset"]')
    }
    public sendemail(): Locator {
        return this.page.locator('//button[contains(@id,"btnReturnAsset")]')
    }
    public dataupdatetext(): Locator {
        return this.page.locator('//div[@id="SucessMsg"]//span[contains(text(),"Data has been Successfully Updated.")]')
    }
    public approvetoastmessge(): Locator {
        return this.page.locator('//div[@class="toast-message"]')
    }
}