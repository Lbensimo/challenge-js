function isFriday(date) {
    if (date.getDay() == 5) {return true;}
    return false;
}

function isWeekend(date) {
    if (date.getDay() == 6 || date.getDay() == 0) {return true;}
    return false;
}

function isLeapYear(date) {
    let year = date.getFullYear();
    if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 == 0) {return true;
        } else if (year % 100 == 0) {return false;}
        return true;
    }
}

function isLastDayOfMonth(date) {
    let month = date.getMonth();
    if (month < 7) {
        if (month % 2 == 0) {
            if (date.getDate() == 31) {
                return true;
            }
            return false;
        }
        if (date.getDate() == 30) {return true;}
        if (month == 1) {
            if (isLeapYear(date) && date.getDate() == 28) {return false;}
            if (date.getDate() == 28 || date.getDate() == 29) {return true;}
        }
    }
    if (month % 2 == 1) {
        if (date.getDate() == 31) {
            return true;
        }
        return false;
    }
    if (date.getDate() == 30) {return true;}
}