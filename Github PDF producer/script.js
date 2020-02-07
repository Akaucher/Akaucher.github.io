const fs = require('fs');
const pdf = require('./node_modules/pdf/lib/pdf').pdf;
const github = require('octonode');
const client = github.client();
const data = [];
const userRequestedClient = '/users/'+process.argv[2];

async function getData(){
  try {
    let RawData = await client.get(userRequestedClient, {}, function (err, status, body, headers) {
      "image Url= "+(body.avatar_url),
      "User name= "+(body.login),
      "Location= "+(body.location),
      "Github Profile= "+(body.html_url),
      "Blog= "+(body.blog),
      "Bio= "+(body.bio),
      "Public Repos= "+(body.public_repos),
      "Followers= "+(body.followers),
      "Following= "+(body.following)        
      });
      let refinedData= data.push(RawData);
      console.log(refinedData);
// let doc = new pdf();
// for (let i = 0; i<data.length; i++){
//   doc.text(data[i]);
// };
// doc.setProperties({
//     title: 'GitHub Profile',
// });

// fs.writeFile("GitHub Profile.pdf", doc.output(), function(err, data){
//   return console.log("File Written!")
// });}
    }catch (err) {
 console.log("error");
}};
// };

getData();