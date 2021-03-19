browser
    .url('http://www.webdriveruniversity.com/')
    .pause(2000)
    .click('#login-portal')
    .pause(2000)
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })