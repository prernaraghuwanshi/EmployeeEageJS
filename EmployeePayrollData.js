class EmployeePayrollData {

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
    get id() {
        return this._id;
    }
    set id(id) {
        let idRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (idRegex.test(id))
            this._id = id;
        else throw "ID should be non zero positive number";
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (salaryRegex.test(salary))
            this._salary = salary;
        else throw "Salary should be non zero positive number";
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        if (gender != undefined) {
            let genderRegex = RegExp('^(M|F)$');
            if (genderRegex.test(gender)) {
                this._gender = gender;
            } else {
                throw "Gender should be M or F";
            }
        }
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate != undefined) {
            if (startDate <= new Date()) {
                const options = { year: "numeric", month: "long", day: "numeric" };
                const employeeDate = startDate.toLocaleDateString("en-US", options);
                this._startDate = employeeDate;
            }
            else throw "Date incorrect";
        }
    }
    toString() {
        return "ID: " + this.id + " Name: " + this.name + " Salary: " + this.salary + " Gender: " + this.gender + " Start Date: " + this.startDate;
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

// ID Regex fails case
try {
    newEmployeePayrollData.id = -1;
} catch (e) {
    console.error(e);
}

// Salary Regex fails case
try {
    newEmployeePayrollData.salary = -1;
} catch (e) {
    console.error(e);
}

// Gender Regex fails
try {
    newEmployeePayrollData.gender = 'J';
} catch (e) {
    console.error(e);
}

// Start date regex fails
try {
    newEmployeePayrollData.startDate = new Date('2020-12-12');
} catch (e) {
    console.error(e);
}