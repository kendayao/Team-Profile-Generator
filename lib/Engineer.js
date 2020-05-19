// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require ("./lib/Employee.js")


class Engineer extends Employee{
    constructor(name, id, email, username){
    this.username = username;
    super(name, id, email)

    }
    getGithub(){
        return this.username
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer