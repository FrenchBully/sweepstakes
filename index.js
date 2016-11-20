var Horseman = require('node-horseman');
var horseman = new Horseman();
horseman
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .open(process.env.URL)
  .type('input[name="email"]', process.env.EMAIL)
  .click('button')
  .log('clicked the button')
  .waitForNextPage()
  .click('button')
  .log('clicked second button') // prints out the number of results
  .close();
