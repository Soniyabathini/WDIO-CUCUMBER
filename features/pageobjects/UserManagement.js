class UserManagement{
    webpage(){
        return browser.url("http://geniehealthjobsqa-env-4.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/job")
    }
    get Login(){
        return $("//a[text()='Login/Register']")
    }
    get Username(){
        return $("//input[@placeholder='Your username']")
    }
    get Password(){
        return $("//input[@id='password']")
    }
    get Signin(){
        return $("(//button[@type='submit'])[1]")
    }
    get Administration(){
        return $("//span[text()='Administration']")
    }
    get Usermanagement(){
        return $("//span[text()='User management']")
    }
    get Createuser(){
        return $("//span[normalize-space()='Create a new User']")
    }
    get Email(){
        return $("//input[@name='email']")
    }
    get Firstname(){
        return $("//input[@name='firstName']")
    }
    get Errormessage1(){
        return $("//p[normalize-space()='This field is required.']")
    }
     get Errormessage2(){
        return $("(//p[normalize-space()='Please enter a valid email address of the format aaa@bbb.ccc'])[1]")
    }
    get Errormessage3(){
        return $("//p[@ng-show='editForm.email.$error.maxlength']")
    }
    get InvalidFirstname(){
        return $("(//p[normalize-space()='This field cannot be longer than 50 characters.'])[1]")
    }
    get Lastname(){
        return $("//input[@name='lastName']")
    }
    get InvalidLastname(){
        return $("(//p[normalize-space()='This field cannot be longer than 50 characters.'])[2]")
    }
    get SelectProfile(){
        return $("//select[@name='authority']/option[text()='ROLE_CANDIDATE']")
    }
    get SaveButton(){
        return $("//span[text()='Save']")
    }
    get Errormessage4(){
        return $("//div/pre[text()='Email already in use']")
    }
    





}
module.exports=new UserManagement();