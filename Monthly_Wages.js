
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// UC 3 - Function Daily Wage
let empCheck = Math.floor(Math.random() * 10) % 3;
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

let tempEmpHrs = getWorkingHours(empCheck);
 let tempEmpWages = tempEmpHrs * WAGE_PER_HOUR;
console.log("Daily Wage: " + tempEmpWages);




// UC 4 - Monthly Wages
const NUM_OF_WORKING_DAYS = 20;
let empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {

    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: " + empHrs + " Emp Monthly Wage: " + empWage);
