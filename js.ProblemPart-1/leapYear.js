function leapYear(year){
    if(year%100 !==0 && year%4 == 0 ){
        console.log(year+' is Leap Year');
    }
    else if(year %400 ==0){
        console.log(year +' is leap year');
    }
    else{
        console.log(year +' is not leap year');
    }
}
leapYear(2024);
leapYear(2025);
leapYear(2052);
leapYear(2072);