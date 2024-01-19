const { Given, When, Then } = require('@wdio/cucumber-framework');
const Timeout = require("../pageobjects/Timeout");
const UserManagement = require("../pageobjects/UserManagement");
const CucumberJson=require("wdio-cucumberjs-json-reporter")


Given(/^the user is on the genie webpage$/, async() => {
    await UserManagement.webpage();
    await browser.maximizeWindow();
    await Timeout.wait()
    await UserManagement.Login.moveTo();
    await Timeout.wait()
});

Then(/^the user enters username$/, async(table) => {
    await UserManagement.Username.setValue(table.raw()[0][0]);
    await Timeout.wait()
});

Then(/^also enters the password$/, async(table) =>{
    await UserManagement.Password.setValue(table.raw()[0][0]);
    await Timeout.wait()
});

When(/^the user clicks on Sign in button$/, async() => {
    await UserManagement.Signin.click();
    await Timeout.wait()
    
});

Then(/^the user is navigated to the webpage$/, async() => {
    await browser.getUrl()
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()

});
When(/^the user clikcs on administration$/, async() => {
    await UserManagement.Administration.click();
    await Timeout.wait()
});

// Then(/^the user selects required item from the dropdown$/, async() => {
//     await UserManagement.Administration.waitForExist();
//     await UserManagement.Administration.selectByVisibleText('User management');
//     await Timeout.wait()
//     console.log(await UserManagement.Administration.getText()); 
//     await Timeout.wait()

//  });

Then(/^the user selects required one$/, async() => {
    await Timeout.wait()
    await UserManagement.Usermanagement.click();
    await Timeout.wait()
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()
});
When(/^the user clicks on create a new user$/, async() => {
    await UserManagement.Createuser.click();
    await Timeout.wait()
});

Then(/^the required page is opened$/, async() => {
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()
});


Given(/^user clicks on Username or email input field and enters no data and clicks on Firstname$/, async() => {
    await UserManagement.Email.click();
    await Timeout.wait()
    await UserManagement.Firstname.click();
    await Timeout.wait()

});

Then(/^the user is able to see an error message as This field is required.$/, async() => {
    let element=await UserManagement.Errormessage1;
    await expect(element).toHaveTextContaining("This field is required.");
    console.log(element.getText());
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()
});

Then(/^the user enters invalid UsenameorEmail$/, async(table) => {
    await UserManagement.Email.setValue(table.raw()[0][0]);
    await Timeout.wait()
});

Then(/^a flash error message is seen as Please enter a valid email address of the format aaa@bbb.ccc$/, async() => {
    let element1=await UserManagement.Errormessage2;
    await expect(element1).toHaveTextContaining("Please enter a valid email address of the format aaa@bbb.ccc");
    console.log(element1.getText());
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()
});

When(/^the user enters maximum length of an email$/, async(table) => {
    await UserManagement.Email.setValue(table.raw()[0][0]);
    await Timeout.wait()
});

Then(/^an error message is seen as This field cannot be longer than 100 characters.$/, async() => {
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()
});

Then(/^the user enters a valid UsenameorEmail$/, async(table) => {
    await UserManagement.Email.setValue(table.raw()[0][0]);
    await Timeout.wait()
});

When(/^user enters above fifty characters into the input field$/, async(table) => {
    await  UserManagement.Firstname.setValue(table.raw()[0][0]);
    await Timeout.wait()
});

Then(/^an error messageis displayed as This field cannot be longer than 50 characters.$/, async() => {
    let element3=await UserManagement.InvalidFirstname;
    await expect(element3).toHaveTextContaining("This field cannot be longer than 50 characters.");
    console.log(element3.getText());
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()
});

Then(/^user enters valid Firstname$/, async(table) => {
    await UserManagement.Firstname.setValue(table.raw()[0][0])
    await Timeout.wait()
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()
});

When(/^user clicks on last name and enters more than fifty characters$/, async(table) => {
    await  UserManagement.Lastname.setValue(table.raw()[0][0]);
    await Timeout.wait()
});

Then(/^a flash message is seen as This field cannot be longer than 50 characters.$/, async() => {
    let element4=await UserManagement.InvalidLastname;
    await expect(element4).toHaveTextContaining("This field cannot be longer than 50 characters.");
    console.log(element4.getText());
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()
});

Then(/^the user enters valid Lastname$/, async(table) => {
    await UserManagement.Lastname.setValue(table.raw()[0][0])
    await Timeout.wait()
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()
});

Then(/^user selects required one$/, async() => {
    await Timeout.wait()
    let element5=await UserManagement.SelectProfile;
    await expect(element5).toHaveTextContaining("ROLE_CANDIDATE");
    console.log(element5.getText());
    await Timeout.wait()
});

When(/^the user clicks on save button$/, async() => {
    await UserManagement.SaveButton.click();
    await Timeout.wait()
});

Then(/^an error message is displayed as Email is already in use$/, async() => {
	// await UserManagement.Errormessage4.waitForDisplayed({ timeout: 3000 })
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

Then(/^user enters another email$/, async(table) => {
    await UserManagement.Email.setValue(table.raw()[0][0]);
    await Timeout.wait()
});

When(/^user clicks on save button$/, async() => {
    await UserManagement.SaveButton.click();
    await Timeout.wait()
});

Then(/^verify the page$/, async() => {
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeout.wait()
});









