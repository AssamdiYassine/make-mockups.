const openExplorer = require('open-file-explorer');

const openPath = (dir)=>{
    var path = __dirname + dir;
openExplorer(path, err => {
    if(err) {
        console.log(err);
    }
    
});
}

module.exports = openPath