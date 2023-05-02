const fs = require ('fs')
const { argv } = require('process')
const yargs = require('yargs');
const data5 = require('./data5')

yargs.command({
  command: "add",
  describe: "To add an user",
  builder: {
    fname: {
      describe: "This is the first name in the add command",
      demandOption: true,
      type : "string",
    },
    lname: {
      describe: "This is the last name in the add command",
      demandOption: true,
      type : "string",
    }
  },
  handler: (user) => {
    data5.addperson(user.fname, user.lname, user.age, user.city,user.id)
  }
});


yargs.command({
  command: "delete",
  describe: "To delete an item",
  handler: (user) => {
    data5.deletedData(user.id)
  }
});


yargs.command({
  command: "read",
  describe: "To read an item",
  builder : {
    id : {
      describe : "this is desc in read command",
      demandOption: true,
      type : "number"
    },
  },
  handler: (user) => {
    data5.readData(user.id)
  }
});

yargs.command({
  command: "list",
  describe: "To all items",
  handler: () => {
    data5.listData()
  }
});
console.log(yargs.argv)