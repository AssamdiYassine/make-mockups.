var rimraf = require("rimraf");

var path = require("path");

var fs = require("fs"); 

// var uploadsDir = __dirname + "/uploads/";
function remove(Dir){
 
  
  fs.stat(Dir, function (err, stat) {
    var endTime, now;
    if (err) {
      return console.error(err);
    }
    now = new Date().getTime();
    endTime = new Date(stat.ctime).getTime() + 1000;
    if (now > endTime) {
      return rimraf(Dir, function (err) {
        if (err) {
          return console.error(err);
        }
       
      });
    }
  });
 

}

module.exports=remove;