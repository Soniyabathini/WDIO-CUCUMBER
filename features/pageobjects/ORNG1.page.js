class Orangehrm{
    get webpage()
    {
        return browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    get username()
    {
        return $("//input[@name='username']")
    }
    get password()
    {
        return $("//input[@name='password']")
    }
    get loginbutton()
    {
        return $("//button[@type='submit']")
    }
    




}