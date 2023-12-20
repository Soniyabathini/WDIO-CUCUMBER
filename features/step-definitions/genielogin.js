const { Given, When, Then } = require('@wdio/cucumber-framework');
const Genie=require('../pageobjects/genie.page')

Given(/^the user clicks on register an account$/, async() => {
    browser.url("http://geniehealthjobsqa-env-3.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/register")
});

/*When(/^the user entersEmailandPhonenumber$/, async() => {
    await Genie.Email('bathinisoniya@gmail.com')
});*/

When(/^the user enters email$/, async() => {
    await Genie.Email('bathinisoniya@gmail.com')
});

Then(/^the user enters phonenumber$/, async() => {
    await Genie.Phonenumber('9490220301')
});


Then(/^the user enters password$/, async() => {
    await Genie.Password('Soniyabathini@1505')
});

When(/^the user enters password it needs to confirm the password$/, async() => {
    await Genie.Confirmpassword('Soniyabathini@1505')
});


Then(/^the user enters firstname and lastname$/, async() => {
    await Genie.Names('Soniya','Bathini')
});

When(/^the user clicks on available to start and$/, async() => {
    await Genie.Start('12-06-2023')
});

Then(/^the user clicks on years of experience$/, async() => {
    await Genie.Experience('0')
});

Then(/^the user clicks on profession$/, async() => {
    await Genie.Profession('CNA')
});

Then(/^the user clicks on specialty$/, async() => {
    await Genie.Specialty('Nurse Educator')
});

Then(/^the user clicks on preferred recruiter$/, async() => {
    await Genie.Recruiter('user management')
});

