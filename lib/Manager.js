// require employee class
const Employee = require('./Employee.js')

// code to define and export the Manager class. Manager class is inherited from Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super (name, id, email)
    this.officeNumber=officeNumber
    

    }
   
    getRole(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber
    }


}

module.exports=Manager