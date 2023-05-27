function weekDay(num) {
    const weekDays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    if(num === 1) {
        return weekDays[0];
    }else if(num === 2) {
        return weekDays[1];
    }else if(num === 3) {
        return weekDays[2];
    }else if(num === 4) {
        return weekDays[3];
    }else if(num === 5) {
        return weekDays[4];
    }else if(num === 6) {
        return weekDays[5];
    }else if(num === 7) {
        return weekDays[6];
    }
}

console.log(weekDay(7));

function isSameNum(num1, num2) {
    if(num1 === num2){
        return true;
    }else {
        return false;
    }
}

console.log(isSameNum(2,2));

function area(h, w) {
   return (Number.isFinite(h) && Number.isFinite(w) && h > 0 && w > 0) ? h * w : -1;
}

console.log(area(0,3))

function area1(h, w)  {
    if(h === 0 || w === 0) {
        return -1;  
    } else {
        return h * w;
    }
}

console.log(area1(3,4));

function weekDay(num) {
    const weekDays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    return weekDays[num -1];
}

console.log(weekDay(4));