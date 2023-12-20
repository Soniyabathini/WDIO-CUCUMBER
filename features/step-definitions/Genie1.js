const { Given, When, Then } = require('@wdio/cucumber-framework');
const Geniewebpage = require('../pageobjects/Genie1pg');
const Timeout = require('../pageobjects/Timeout');
const CucumberJson=require("wdio-cucumberjs-json-reporter");


Given(/^the user is on genie webpage$/, async() => {
    await Geniewebpage.webpage();
    await browser.maximizeWindow();
    await Timeout.wait()
    await Geniewebpage.Login.moveTo();
    await Timeout.wait()
    });
When(/^user clicks on register a new account$/, async() => {
    await Timeout.wait()
    await Geniewebpage.Account.click();
    await Timeout.wait()
    });
Then(/^user is on CaregiverRegistration page$/, async() => {
    //await browser.saveScreenshot('./features/Screenshots/Screenshot1.png');
    await browser.getUrl()
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

Given(/^the user enters invalid email$/, async(table) => {
    await Geniewebpage.Email.setValue(table.raw()[0][0]);
    await Timeout.wait()
});
Then(/^the user gets a message as Please enter a valid email address of the format aaa@bbb.ccc$/, async() => {
    let element=await Geniewebpage.InvalidEmail;
    await expect(element).toHaveTextContaining("Please enter a valid email address of the format aaa@bbb.ccc");
    console.log(element.getText());
    await Timeout.wait()
    CucumberJson.attach(await browser.takeScreenshot(), 'image/png');

});

// Then(/^the user verify a message as "([^"]*)"$/, async(error1) => {
//     let errtxt1=await Geniewebpage.Emailerror1;
//     await expect(errtxt1).toHaveTextContaining(error1);
//     console.log(errtxt1.getText());
//     await Geniewebpage.Emailerror1.waitForDisplayed({ timeout: 3000 })
//     await Timeout.wait()
	
// });

// Then(/^the user verify a error message as "([^"]*)"$/, async(error2) => {
// 	let errtxt2=await Geniewebpage.Emailerror2;
//     await expect(errtxt2).toHaveTextContaining(error2);
//     console.log(errtxt2.getText());
//     await Timeout.wait()
// });

// Then(/^the user verify a error message as "([^"]*)"$/, async(error3) => {
// 	let errtxt3=await Geniewebpage.Emailerror3;
//     await expect(errtxt3).toHaveTextContaining(error3);
//     console.log(errtxt3.getText());
//     await Timeout.wait()
// });


Given(/^the user enters valid email$/, async(table) => {
    await Timeout.wait()
    await Geniewebpage.Email.setValue(table.raw()[0][0]);
    await Timeout.wait()  
});
Given(/^the user clicks on phonenumber field$/, async() => {
    await Geniewebpage.Phonenumber.click();
    await Timeout.wait()  
});

Then(/^the user enters invalid phonenumber$/, async(table) => {
    await Timeout.wait()  
    await Geniewebpage.Phonenumber.setValue(table.raw()[0][0]);
    await Timeout.wait()  
});

Then(/^clicks on password field$/, async() => {
    await Geniewebpage.Password.click();
    await Timeout.wait()  
});

When(/^the user enters invalid number and clicks on another field a message is displayed as Acceptable Phone Number Format is XXX-XXX-XXXX where X is a Numeric Digit. The dashes at 4th and 8th positions are both optional.$/, async() => {
    let element2=await Geniewebpage.Errormessage;
    await expect(element2).toHaveTextContaining("Acceptable Phone Number Format is XXX-XXX-XXXX where X is a Numeric Digit. The dashes at 4th and 8th positions are both optional.");
    console.log(element2.getText());
    await Timeout.wait()

});

Then(/^the user enters valid phonenumber$/, async(table) => {
    await Timeout.wait() 
    await Geniewebpage.Phonenumber.setValue(table.raw()[0][0]);
    await Timeout.wait()
});
Then(/^a flash message is shown on the password field$/, async() => {
    let element3=await Geniewebpage.Passwordfield;
    await expect(element3).toHaveTextContaining("Your password is required.");
    console.log(element3.getText());
    await Timeout.wait()
});
Given(/^the user enters password and$/, async(table) => {
    await Geniewebpage.Password.setValue(table.raw()[0][0]);
    await Timeout.wait()
});
Then(/^the user enters wrong password$/, async(table) => {
    await Timeout.wait() 
    await Geniewebpage.Wrongpassword.setValue(table.raw()[0][0]);
    await Timeout.wait()
});
Then(/^a flash message is shown as The password and its confirmation do not match!$/, async() => {
    let element4=await Geniewebpage.Messageerror;
    await expect(element4).toHaveTextContaining("The password and its confirmation do not match!");
    console.log(element4.getText());
    await Timeout.wait()
});
Then(/^the user enters the correct password$/, async(table) => {
    await Timeout.wait() 
    await Geniewebpage.Wrongpassword.setValue(table.raw()[0][0]);
    await Timeout.wait() 
});

Given(/^the user enters firstname$/, async(table) => {
    await Timeout.wait() 
    await Geniewebpage.Firstname.setValue(table.raw()[0][0]);
    await Timeout.wait() 
});

Then(/^the user enters lastname$/, async(table) => {
    await Timeout.wait() 
    await Geniewebpage.Lastname.setValue(table.raw()[0][0]);
    await Timeout.wait() 
});

Given(/^the user clicks on the date icon trigger$/, async() => {
    await Timeout.wait()
    await Geniewebpage.Icon
    await Geniewebpage.Icon.click();
    await Timeout.wait()
});

Then(/^selects a date from the date picker$/, async() => {
     await Geniewebpage.Date;
     await Timeout.wait() 
     await Geniewebpage.Todaydate.click();
     await Timeout.wait() 
     await Geniewebpage.Icon.click();
     await Timeout.wait()
     await Geniewebpage.Cleardate.click();
     await Timeout.wait() 
     for(let i=0;i<=2;i++)
     {
     await Geniewebpage.Rightclick.click();
     }
     await Timeout.wait() 
     await Geniewebpage.Startdate.click();
     await Timeout.wait() 
 });
 
Given(/^the user clicks on profession field and selects required one$/, async() => {
    await Timeout.wait()
    await Geniewebpage.Clickprofession.selectByIndex(1);
    await Timeout.wait()
});
    
When(/^the user selects a Profession  and accordingly selects the specialty$/, async() => {
    await Timeout.wait()
    await Geniewebpage.Specialty.click();
    await Timeout.wait()
    await Geniewebpage.Option1.click();
    await Timeout.wait()
    await Geniewebpage.Option2.click();
    await Timeout.wait()
    await Geniewebpage.Option3.click();
    await Timeout.wait()
    await Geniewebpage.Option4.click();
    await Timeout.wait()
    await Geniewebpage.Option5.click();
    await Timeout.wait()
    await Geniewebpage.Option6.click();
});

When(/^user selects more specialties then a flash error message is seen$/, async() => {
    console.log(await Geniewebpage.Specltyerrormessage.getText());
});

Then(/^the user selects another profession and then selects specialty accordingly$/, async() => {
    await Timeout.wait()
    await Geniewebpage.Clickprofession.selectByIndex(2);
    await Timeout.wait() 
    await Geniewebpage.Specialty.click();
    await Timeout.wait()
    await Geniewebpage.Option7.click();
    await Timeout.wait()
    await Geniewebpage.Option8.click();
    await Timeout.wait()
});

Given(/^user clicks on recruiter field$/, async() => {
    // await Timeout.wait()
    // await browser.execute('window.scroll(0, 400);'); 
    await Timeout.wait()
    await Geniewebpage.Recruiter.click();
    await Timeout.wait()
});

Then(/^the user selects the required recruiter$/, async() => {
    await Timeout.wait() 
    await Geniewebpage.Recruiter.selectByIndex(3);
    await Timeout.wait()
    await Geniewebpage.Recruiter.click();
    await Timeout.wait()
});

