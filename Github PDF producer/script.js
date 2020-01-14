let fs = require('fs');
let pdf = require('./node_modules/pdf/lib/pdf').pdf;
let github = require('octonode');
let client = github.client();
let data = [];

getData();

async function getData(){
try {

let userRequestedClient = '/users/'+process.argv[2];

await client.get(userRequestedClient, {}, function (err, status, body, headers) {
data.push(
  "image Url= "+(body.avatar_url),
  "User name= "+(body.login),
  "Location= "+(body.location),
  "Github Profile= "+(body.html_url),
  "Blog= "+(body.blog),
  "Bio= "+(body.bio),
  "Public Repos= "+(body.public_repos),
  "Followers= "+(body.followers),
  "Following= "+(body.following)
     );  
   }); 
let doc = new pdf();
for (let i = 0; i<data.length; i++){
  doc.text(data[i]);
};
doc.setProperties({
    title: 'GitHub Profile',
});

fs.writeFile("GitHub Profile.pdf", doc.output(), function(err, data){
  return console.log("error has occured!")
});}
catch (err) {
 console.log("error");
}
};