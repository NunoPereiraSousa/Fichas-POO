let year = +prompt('Write an year to check if it is a leap year or not');

let isLeapYear = () => {
    let rest1 = year % 400;
    let rest2 = year % 100;
    let rest3 = year % 4;

    if((rest1 === 0 && rest2 !== 0) || rest3 === 0){
        return true;
    }
    else{
        return false;
    }
}
isLeapYear();