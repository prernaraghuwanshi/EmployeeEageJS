class EmployeePayrollData {
    // property
    id;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect!";
    }
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "ID: " + this.id + " Name: " + this.name + " Salary: " + this.salary + " Gender: " + this.gender + " Start Date: " + empDate;
    }
}

// Add employee
let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());

//Change employee name
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());

// Add employee with gender and startDate
let newEmployeePayrollData = new EmployeePayrollData(2, "Terisa", 50000, 'F', new Date("2020-03-15"));
console.log(newEmployeePayrollData.toString());

//Name Regex fails case
try {
    employeePayrollData.name = 'jo';
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}