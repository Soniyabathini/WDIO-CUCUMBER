class Login1{
    webpage(){
        return $("http://geniehealthjobsqa-env-2.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/job")
    }
    get LoginorRegister(){
        return $("//a[text()='Login/Register']")
    }
    get ValidLogin(){
        return $("//input[@placeholder='Your username']")
    }
    get InvalidPassword(){
        return $("//input[@placeholder='Your password']")
    }
    get Signin(){
        return $("//button[text()='Sign in']")
    }




}
module.exports=new Login1();