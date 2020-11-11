// Calculate Daily Wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_WORKING_DAYS = 20;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days: " + totalWorkingDays + " Total Hours: " + totalEmpHrs + " Total Wage: " + empWage);
console.log(empDailyWageArr);

//Total empWage using forEach
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Using forEach");
console.log("Total Days: " + totalWorkingDays + " Total Hours: " + totalEmpHrs + " Total Wage: " + totalEmpWage);

//Total empWage using reduce
function totalWages(dailyWage, totalWage) {
    return dailyWage + totalWage;
}
console.log("Using reduce");
console.log(empDailyWageArr.reduce(totalWages, 0));

// Day with daily wage map
let day = 0;
function mapDayWithWage(dailyWage) {
    day++;
    return day + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Map day with wage: " + mapDayWithWageArr);

// Show days when 160 was earned as wage
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Full time wage earned days: " + fullDayWageArr);

// First time occurence of full time wage
console.log("First time full wage: " + mapDayWithWageArr.find(fullTimeWage));

// Is every full time wage holding 160
console.log("Check all elements have full time wage: " + fullDayWageArr.every(fullTimeWage));

// Check for any part time wage
function partTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Check if any part time wage: " + mapDayWithWageArr.some(partTimeWage));

// Number of days employee worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("Number of days worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));