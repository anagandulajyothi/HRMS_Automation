import { Locator, Page } from "@playwright/test";

export class LogoutPageObjects  {
    
constructor(page:Page){
        this.page=page
}

public page:Page
public  Profile():Locator{
    return this.page.locator('#divUserName')
}

public Logout(): Locator{
    return this.page.locator(`//a[normalize-space()="Log Out"]`)
}

}