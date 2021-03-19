var webdriverio = require('webdriverio');
var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('http://www.webdriveruniversity.com')
    .click('#contact-us')
    .pause(1000)
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);

        // outputs:
        // "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
    .end();