import { Locator, Page } from "@playwright/test";

export class LoginPageObjects {
    
constructor(page:Page){
        this.page=page
}

public page:Page

public  login_username():Locator{
    return this.page.locator('#Email')
}

public login_password(): Locator{
    return this.page.locator(`#Password`)
}
  
public login_btn():Locator{
    return this.page.locator('#btnSubmitlogin')
}
public Addskill_cancel():Locator{
    return this.page.locator('input:has-text("No")')
}

}