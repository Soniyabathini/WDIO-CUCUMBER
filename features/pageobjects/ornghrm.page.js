class Orangepage{
    get webpage(){
        return browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    get username(){
        return $("//input[@name='username']")
    }
    get password(){
        return $("//input[@type='password']")
    }
    get loginbutton(){
        return $("//button[@type='submit']")
    }
    get clicPIM(){
        return $("(//a[@class='oxd-main-menu-item'])[2]")
    }
    get clickaddemploye(){
        return $("//a[text()='Add Employee']")
    }
    get emplyfullname(){
        return $("//input[@name='firstName']")
    }
    get middlename(){
        return $("//input[@name='middleName']")
    }
    get lastname(){
        return $("//input[@name='lastName']")
    }
    get clicktosave(){
        return $("//button[@type='submit']")
    }
    async Webpage(){
        await this.webpage.open();
    }
    async Login(username,password,){
        await browser.maximizeWindow();
        await browser.pause(1000)
        await this.username.setValue(username)
        await browser.pause(1000)
        await this.password.setValue(password)
        await browser.pause(1000)
        await this.loginbutton.click();
        await browser.pause(1000)
        await this.clicPIM.click();
        await browser.pause(1000)
    }
    async ClickAddemploye(){
        await browser.pause(1000)
        await this.clickaddemploye.click();
       
    }
    async Loginnames(emplyfullname,middlename,lastname){
        await browser.pause(1000)
        await this.emplyfullname.setValue(emplyfullname)
        await browser.pause(1000)
        await this.middlename.setValue(middlename)
        await browser.pause(1000)
        await this.lastname.setValue(lastname)
        await browser.pause(1000)
        await this.clicktosave.click();
    }
}
module.exports=new Orangepage();