function dayNumber(numOfDays) {
    switch (true) {
        case numOfDays === 0:
            return "Monday";
        case numOfDays === 1:
            return "Tuesday";
        case numOfDays === 2:
            return "Wednesday";
        case numOfDays === 3:
            return "Thursday";
        case numOfDays === 4:
            return "Friday";
        case numOfDays === 5:
            return "Saturday";
        case numOfDays === 6:
            return "Sunday";
        default:
            return "Invalid day number";
    }
};

console.log(dayNumber(7));
