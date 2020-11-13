class EmployeePayrollData {
    // property
    id;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    toString() {
        return "ID: " + this.id + " Name: " + this.name + " Salary: " + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());