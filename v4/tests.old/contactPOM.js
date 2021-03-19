var request = require('sync-request');

var dataResource = request('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments' );
var dataHive = JSON.parse(dataResource.getBody().toString('utf8'));
console.log(dataHive);

// POM (Page Object Model) Selectors:
var firstNameSelector = "[name='first_name']";
var lastNameSelector = "[name='last_name']";
var emailAddressSelector = "[name='email']";
var messageSelector = "[name='message']";
var positiveSelector = "#contact_reply h1";
var negativeSelector = 'body';
var submissionSelector = "[type='submit']";

function setFirstName(firstName){ return browser.setValue( firstNameSelector, firstName);}
function setLastName(lastName){ return browser.setValue( lastNameSelector, lastName);}
function setEmailAddress(emailAddress){ return browser.setValue( emailAddressSelector, emailAddress);}
function setMessage(message){ return browser.setValue( messageSelector, message);}
function clickSubmit(){ return browser.click( submissionSelector);}

function confirmSuccess(){ var validateSubmission = browser.waitUntil(function(){
    return browser.getText(positiveSelector) == 'Thank You for your Message!';
}, 3000) ; 
    expect(validateSubmission, 'Successfull Submission Message does not exist!').to.be.true;
}

function confirmUnsuccessful(){ var validateSubmission = browser.waitUntil(function(){
    return browser.getText(negativeSelector) == 'Error: all fields are required';
}, 3000) ; 
    expect(confirmUnsuccessful, 'Unsuccessfull Submission Message does not exist!').to.be.true;
}

dataHive.forEach(function(dataHive){
    it('Test Successfull Submission of the form', function(done){
    setFirstName(dataHive.name);
    setLastName(dataHive.name);
    setEmailAddress(dataHive.email);
    setMessage(dataHive.body);
    clickSubmit();
    confirmSuccess();
} );
});

dataHive.forEach(function(dataHive){
    it('Test UnSuccessfull Submission of the form', function(done){
    setFirstName(dataHive.name);
    setLastName(dataHive.name);
    setEmailAddress(dataHive.email);
    setMessage(dataHive.body);
    clickSubmit();
    confirmUnsuccessful();
} );
});