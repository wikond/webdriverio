browser
    .url('http://www.webdriveruniversity.com/')
    .pause(2000)
    .click('#contact-us')
    .pause(2000)
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    