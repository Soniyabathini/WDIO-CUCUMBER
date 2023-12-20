class Genie{
    get webpage(){
        return browser.url("http://geniehealthjobsqa-env-3.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/register")
    }
    get email(){
        return $('#email')
    }
    get phonenumber(){
        return $('#field_phoneNumber')
    }
    get password(){
        return $('#password')
    }
    get confirmpassword(){
        return $('#confirmPassword')
    }
    get firstname(){
        return $('#field_firstName')
    }
    get lastname(){
        return $('#field_lastName')
    }
    get start(){
        return $("//i[@class='glyphicon glyphicon-calendar']")
    }
    get calender(){
        return $("//span[@class='text-info']")
    }
    get experience(){
        return $('#field_yearsOfExperience')
    }
    get profession(){
        return $('#field_candidateProfession')
    }
    get specialty(){
        return $('#field_candidateSpecialty')
    }
    get recruiter(){
        return $('#field_recruiterProfile')
    }
    async Webpage(){
        await this.webpage.open();
    }
    /*async ClickAccount(){
        await browser.maximizeWindow();
        await browser.pause(1000)
        await this.ClickAccount.click();
    }*/
    async Email(email){
        await browser.maximizeWindow();
        await browser.pause(2000)
        await this.email.setValue(email)
    }
    async Phonenumber(phonenumber){
        await browser.pause(2000)
        await this.phonenumber.setValue(phonenumber)
    }
    async Password(password){
        await browser.pause(2000)
        await this.password.setValue(password)
    }
    async Confirmpassword(confirmpassword){
        await browser.pause(2000)
        await this.confirmpassword.setValue(confirmpassword)

    }
    async Names(firstname,lastname){
        await browser.pause(2000)
        await this.firstname.setValue(firstname)
        await browser.pause(2000)
        await this.lastname.setValue(lastname)
    }
    async Start(start,calender){
        
        await browser.pause(2000)
        await this.start.setValue(start)
        await this.Start.click();
        await browser.pause(2000)
        await this.calender.setValue(calender)
        await browser.pause(2000)
        await this.Calender.click();
    }
    async Experience(experience){
        await browser.pause(2000)
        await this.experience.setValue(experience)

    }
    async Profession(profession){
        await browser.pause(2000)
        await this.profession.setValue(profession)
    }
    async Specialty(specialty){
        await browser.pause(2000)
        await this.specialty.setValue(specialty)
    }
    async Recruiter(recruiter){
        await browser.pause(2000)
        await this.recruiter.setValue(recruiter)
}
}
module.exports=new Genie();