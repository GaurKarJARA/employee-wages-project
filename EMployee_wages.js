
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;


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

// UC 6 Arrays

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
       totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 – Total Days: " + totalWorkingDays +
            " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

//UC-7A calculate total wage using array forEach traversal  

let totalEmpWage = 0;

function sum(currentWage){
    totalEmpWage += currentWage;
}

dailyWages.forEach(sum);

console.log("Total working days are : "+numberOfTotalDays+", Total working hours are : "+totalEmpHrs+", Wage of Employee is : "+totalEmpWage);

//UC-7B Mapping Day with Daily Wage

let dayCount = 0;

function mapDayWithWage(wage){
    dayCount++;
    return "(Day : "+dayCount+", Wage : "+wage+") ";
}

let mappedWages = dailyWages.map(mapDayWithWage);

console.log("Mapped array is => "+mappedWages);

//UC-7C Days with Full Wage

function fullWage(wage){
    return wage.includes("160");
}

let fullWageDays = mappedWages.filter(fullWage);

console.log("Full Wage Day array is => "+fullWageDays);

//UC-7D finding first day on which full wage was earned

console.log(fullWageDays.find((wage) => wage.includes("160")));

//UC-7E checking if every wage in fullWageDays have full wage or not

function isFullWage(wage){
    return wage.includes("160");
}

console.log("Every wage in fullWageDays array has full wage ? : "+fullWageDays.every(isFullWage));