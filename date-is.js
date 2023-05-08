function isValid(date) {
    if (typeof date === 'number') {date = new Date(date);}
    if (date instanceof Date) {if (date != NaN && date != '' && date != 'Invalid Date') {return true;}}
    return false;
}

function isAfter(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) {return false;}
    if (typeof date1 == "number" && typeof date2 == "number") {if (date1 > date2) {return true;}}
    if (parseInt(date1.getFullYear()) == parseInt(date2.getFullYear())) {
        if (date1.getMonth() == date2.getMonth()) {
            if (date1.getDay() == date2.getDay()) {
                if (date1.getHours() == date2.getHours()) {
                    if (date1.getMinutes() == date2.getMinutes()) {
                        if (date1.getSeconds() == date2.getSeconds()) {
                            if (date1.getMilliseconds() >= date2.getMilliseconds()) {return true;}
                        } else if (date1.getSeconds() > date2.getSeconds()) {return true;
                        } else {return false;}
                    } else if (date1.getMinutes() > date2.getMinutes()) {return true;
                    } else {return false;}
                } else if(date1.getHours() > date2.getHours()) {return true;
                } else {return false;}
            } else if(date1.getDay() > date2.getDay()) {return true;
            } else {return false;}
        } else if (date1.getMonth() > date2.getMonth()) {return true;
        } else {return false;}
    } else if(parseInt(date1.getFullYear()) > parseInt(date2.getFullYear())) {return true;
    } else {return false;}
}

function isBefore(date1, date2) {
    if (date1 == date2 || isAfter(date1, date2) || !isValid(date1) || !isValid(date2)) {return false;}
    return true;
}

function isFuture(date) {
    const date2 = new Date();
    if (isValid(date) && !isBefore(date, date2)) {return true;}
    return false;
}

function isPast(date) {
    const date2 = new Date();
    if (date == date2 || isFuture(date) || !isValid(date)) {return false}
    return true;
}