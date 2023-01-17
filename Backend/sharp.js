const sharp = require("sharp");

 
 
const logos = ["DISGNs/11.png", "DISGNs/12.png"];
 const layer1 = "./uploads/0.png"

const output =   sharp('./uploads/0.jpg').composite([
  { input: "./uploads/0.png"  }
  
]).toFile('uploads/combined.png');
 

 console.log(
  output
 );