let year = parseInt(prompt('Enter the year'));
let isLeapYear = false;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    }else{
        isLeapYear = true;
        
    }
}
if (isLeapYear){
    console.log(year + 'is a leap year');
}
else{
    console.log(year + 'is not a leap year');
}