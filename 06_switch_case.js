function weekDays(day) {

    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
                console.log("Tuesday");
                break;
        case 3:
            console.log("wednesday");
            break;
    
        default:
            console.log(`invalid`);
            break;
    }
    
}
weekDays(1);
weekDays(0);
weekDays(undefined);
weekDays(null);
weekDays(-2);
weekDays(NaN)