class Geniewebpage{
    webpage(){
        return browser.url("http://geniehealthjobsqa-env-4.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/job")
    }
    get Login(){
        return $("//a[text()='Login/Register']")
    }
    get Account(){
        return $("//a[text()='Register a new account']")
    }
    get Email(){
        return $("//input[@type='email']")
    }
    get InvalidEmail(){
        return $("//p[normalize-space()='Please enter a valid email address of the format aaa@bbb.ccc']")
    } 
    get Emailerror1(){
        return $("(//p[normalize-space()='Your email is invalid.']")
    }
    get Emailerror2(){
        return $("//p[normalize-space()='Your email is required to be at least 5 characters.']")
    }
    get Emailerror3(){
        return $("//p[normalize-space()='Your email cannot be longer than 100 characters.']")
    }
    get Phonenumber(){
        return $("//input[@name='phoneNumber']")
    }
    get Password(){
        return $("(//input[@type='password'])[1]")
    }
    get Errormessage(){
        return $("//p[normalize-space()='Acceptable Phone Number Format is XXX-XXX-XXXX where X is a Numeric Digit. The dashes at 4th and 8th positions are both optional.']")
    }
    get Passwordfield(){
        return $("//p[normalize-space()='Your password is required.']")
    }
    get Wrongpassword(){
        return $("(//input[@type='password'])[2]")
    }
    get Messageerror(){
        return $("//div[@class='alert alert-danger']")
    }
    get Firstname(){
        return $("(//input[@type='text'])[2]")
    }
    get Lastname(){
        return $("(//input[@type='text'])[3]")
    }
    get Icon(){
        return $("//i[@class='glyphicon glyphicon-calendar']")
    }
    get Date(){
        return $("//span[@class='text-info']")
    }
    get Todaydate(){
        return $("(//button[@type='button'])[51]")
    }
    get Cleardate(){
        return $("(//button[@type='button'])[52]")
    }
    get Rightclick(){
        return $("(//button[@type='button'])[8]")
    }
    get Startdate(){
        return $("(//span[text()='25'])[2]")
    }
    get Clickprofession(){
        return $("//select[@name='candidateProfession']")
    }
    get Specialty(){
        return $("(//button[@type='button'])[7]")
    }
    get Option1(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]/li//a[normalize-space()='Cardiovascular technology']")
    }
    get Option2(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]/li//a[normalize-space()='CT technology']")
    }
    get Option3(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]/li//a[normalize-space()='Dental hygiene']")
    }
    get Option4(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]/li//a[normalize-space()='Emergency medicine']")
    }
    get Option5(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]/li//a[normalize-space()='Medical Technology']")
    }
    get Option6(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]/li//a[normalize-space()='Physical therapy']")
    }
    get Specltyerrormessage() {
        return $("//div[@ng-show='vm.selectLimit']")
    }
    get Option7(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]/li//a[normalize-space()='CNA']")
    }
    get Option8(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]/li//a[normalize-space()='TTT']")
    }
    get Recruiter(){
        return $("//select[@name='recruiterProfile']")
    }
}


module.exports=new Geniewebpage();