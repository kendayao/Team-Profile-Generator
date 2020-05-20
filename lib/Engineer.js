// require employee class
const Employee = require ("./Employee.js")

// code to define and export the Engineer class. Enginner class is inherited from Employee class
class Engineer extends Employee{
    constructor(name, id, email, github){
    super(name, id, email)
    this.github = github;
    

    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer