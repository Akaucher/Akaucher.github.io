let fs = require('fs');
let pdf = require('./node_modules/pdf/lib/pdf').pdf;
let github = require('octonode')
/* create the PDF document */

let doc = new pdf();
doc.text(20, 20, 'hello, I am PDF.');
doc.text(20, 30, 'i was created using node.js version: ' + process.version);
doc.text(20, 40, 'i can also be created from the browser');

/* optional - set properties on the document */
doc.setProperties({
    title: 'A sample document created by pdf.js',
    subject: 'PDFs are kinda cool, i guess',		
    author: 'Marak Squires',
    keywords: 'pdf.js, javascript, Marak, Marak Squires',
    creator: 'pdf.js',
    fillColor: 'rgb(0,0,.9)'
});
doc.addPage();

doc.setFontSize(22);
doc.text(20, 20, 'This is a title');

doc.setFontSize(16);
doc.text(20, 30, 'This is some normal sized text underneath.');

let fileName = "testFile"+new Date().getSeconds()+".pdf";

fs.writeFile(fileName, doc.output(), function(err, data){//possible extra code, might need to be extracted
});

let client = github.client();

client.get('/users/pksunkara', {}, function (err, status, body, headers) {
  console.log(body); //json object
});