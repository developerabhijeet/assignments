const fs = require('fs');
//read file
const readStream = fs.createReadStream('./largeText.txt',{encoding:'utf-8'});
const writeStream  = fs.createWriteStream('writeStream.txt');
readStream.on('data', chunk =>{
  console.log('### new Chunk ####');
  console.log(chunk);
//write File
  writeStream.write('\n##### new ChUnK #####\n');
  writeStream.write(chunk);
})

//using stream.pipe()
 
readStream.pipe(writeStream);



