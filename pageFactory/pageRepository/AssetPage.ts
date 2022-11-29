import type { Page } from '@playwright/test';
import { AssetPageObjects } from "@objects/AssetPageObjects";
import { Utils } from "@lib/Utils"

let utils: Utils;

export class AssetPage {
  constructor(page: Page, assetpageobjects: AssetPageObjects) {
    this.page = page;
    this.assetpageobjects = assetpageobjects;
    utils = new Utils(this.page);
  }
  private page: Page
  private assetpageobjects: AssetPageObjects

  async createcategory(Categoryname, Categorycode) {
    await this.assetpageobjects.asset().click()
    await this.assetpageobjects.ManageCategory().click()
    await this.assetpageobjects.addcategory().click()
    await this.assetpageobjects.category().fill(Categoryname)
    await this.assetpageobjects.code().fill(Categorycode)
    await this.assetpageobjects.addbutton().click()
    await this.assetpageobjects.close().click()
    await this.page.waitForTimeout(8000);
  }

  async createsubcategory(Categoryname, subcategory, Subcategorycode) {
    await this.assetpageobjects.asset().click()
    await this.assetpageobjects.managesubcategory().click()
    await this.assetpageobjects.addcategory().click()
    await this.assetpageobjects.selectclick().click()
    await this.assetpageobjects.searchcategory().fill(Categoryname)
    await this.assetpageobjects.selectcategory().click()
    await this.assetpageobjects.subcategory().fill(subcategory)
    await this.assetpageobjects.code().fill(Subcategorycode)
    await this.assetpageobjects.addbutton().click()
    await this.assetpageobjects.close().click()
    await this.page.waitForTimeout(5000);
  }

  async createitem(Categoryname, subcategory, Item, Categorycode, Subcategorycode) {
    await utils.scrollup()
    await this.assetpageobjects.asset().click()
    await this.assetpageobjects.manageitem().click()
    await this.assetpageobjects.additem().click()
    await this.assetpageobjects.selectcategoryitemclick().click()
    await this.assetpageobjects.searchcategoryitem().fill(Categoryname)
    await this.assetpageobjects.selectcategoryitem().click()
    await this.assetpageobjects.selectsubcategoryitemclick().click()
    await this.assetpageobjects.searchsubcategoryitem().fill(subcategory)
    await this.assetpageobjects.selectsubcategotyitem().click()
    await this.assetpageobjects.item().fill(Item)
    await this.assetpageobjects.code().fill(Categorycode)
    await this.assetpageobjects.code().fill(Subcategorycode)
    await this.assetpageobjects.addbutton().click()
  }

  async createasset(Categoryname, subcategory, Item, location, Specification1, Specification2, serial) {
    await this.assetpageobjects.close().click()
    await this.assetpageobjects.asset().click()
    await this.assetpageobjects.manageasset().click()
    await this.assetpageobjects.assetbutton().click()
    await this.assetpageobjects.assetcategoryclick().click()
    await this.assetpageobjects.searchassetcategory().fill(Categoryname)
    await this.assetpageobjects.assetselectcategory().click()
    await this.assetpageobjects.assetsubcategoryclick().click()
    await this.assetpageobjects.searchassetsubcategory().fill(subcategory)
    await this.assetpageobjects.assetselectsubcategory().click()
    await this.page.waitForTimeout(5000);
    await this.assetpageobjects.assetitemclick().click()
    await this.assetpageobjects.searchassetitem().fill(Item)
    await this.page.waitForTimeout(5000);
    await this.assetpageobjects.assetselectitem().click()
    await this.assetpageobjects.clicklocation().selectOption({ label: location })
    await this.page.waitForTimeout(5000);
    await this.assetpageobjects.specification1().fill(Specification1)
    await this.assetpageobjects.specification2().fill(Specification2)
    await this.assetpageobjects.serial().fill(serial)
    await this.page.waitForTimeout(5000);
    await this.assetpageobjects.saveasset().click()
    await this.page.waitForTimeout(5000);
    await this.assetpageobjects.closebtn().click()
  }

  async approveasset(status, location, categoryname) {
    await this.page.waitForTimeout(2000);
    await this.assetpageobjects.asset().click()
    await this.assetpageobjects.manageasset().click()
    await this.assetpageobjects.pendingclick().selectOption({ label: status })
    await this.assetpageobjects.selectlocationhyd().selectOption({ label: location })
    await this.assetpageobjects.categoryselect().selectOption({ label: categoryname })
    await this.assetpageobjects.editbtn().click()
    await this.assetpageobjects.approvalbutton().click()
    await this.assetpageobjects.approve().click()
    await this.page.waitForTimeout(4000);
    await this.assetpageobjects.approvalclose().click()
  }
}