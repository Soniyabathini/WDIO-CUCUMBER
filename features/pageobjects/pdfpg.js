class pdf{
    webpage(){
        return browser.url("http://geniehealthjobsqa-env-2.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/register")
    }
    get resume(){
        // return $("(//button[@type='button'])[8]")
        return $("//button[normalize-space()='Upload Resume']");
    }
}
module.exports=new pdf();