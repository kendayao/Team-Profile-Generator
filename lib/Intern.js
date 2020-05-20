// require Employee class
const Employee = require ("./Employee.js")

// code to define and export the intern class. Intern class is inherited from Employee class
class Intern extends Employee {
    constructor(name, id, email, school){
        super (name, id, email)
        this.school=school;
        
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern"
    }

}


module.exports = Intern;
