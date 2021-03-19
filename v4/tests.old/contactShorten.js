beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

browser.addCommand('SubmitFormCommand', function (firstName, lastName, emailAddress, messageText) {
    if (firstName!=='') browser.setValue("[name='first_name']",firstName);
    if (lastName) browser.setValue("[name='last_name']",lastName);
  	if (emailAddress) browser.setValue("[name='email']", emailAddress);
    if (messageText) browser.setValue("[name='message']", messageText);
    browser.pause(5000);
    console.log(firstName, lastName, emailAddress, messageText);
  	browser.click("[type='submit']");
})

describe('Test Contact Us form WebdriverUni', function() {
	beforeEach(function() {
		console.log('Inside the describe block!');
	})

  it('Should be able to submit a successful submission via contact us form', function(done) {
  	browser.SubmitFormCommand('Adam', 'Polak', 'adam.polak@gmail.com','Tekst');
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.SubmitFormCommand('Tadek', 'Krol', 't.krol@gmail.com','Tekst 2');
    });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.SubmitFormCommand('Sarah', 'Campbell','s.c@gmail.com','Tekst 3');
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.SubmitFormCommand('Joe', 'Adams','email@wp.pl');
    });
});

