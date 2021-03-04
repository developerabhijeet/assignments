 //module required
const fs = require('fs')

//reading File
fs.readFile('./note.txt', (err, data) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log(data.toString())
  }
})
//writing file

fs.writeFile('./note.txt', 'A new message insert', (err, data) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log('a new message inserted')
  }
})

//updating file
fs.appendFile('./note.txt', 'A new message again\r\n', (err, data) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log('new message inserted')
  }
})

//creating a Folder
if (!fs.existsSync('newfolder')) {
  fs.mkdir('newfolder', (err, data) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log('A new Folder Created')
    }
  })
}
else {
  console.log('folder already exist')
}

//deleting a folder
if (fs.existsSync('newfolder')) {
  fs.rmdir('newfolder', (err, data) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log('A new Folder Deleted')
    }
  })
}
else {
  console.log('folder doesnot exist')
}

//deleting a file
if (fs.existsSync('./note.txt')) {
  fs.unlink('./note.txt', (err, data) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log('A new File deleted')
    }
  })
}
else {
  console.log('file doesnot exist')
}

//creating own modules
const { users, nums } = require('./users');

const importedStuff = require('./users');
console.log(importedStuff)
console.log(nums);

//use of global functions
global.setTimeout(() => {
  console.log('timeout after 4 seconds with global')
}, 5000);

setTimeout(() => {
  console.log('set timeout without global')
}, 6000);