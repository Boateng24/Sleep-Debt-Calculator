const getSleepHours = (day) => {
    switch (day ) {
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 10
            break;
        case 'wednesday':
            return 8
            break;
        case 'thursday':
            return 12
            break;
        case 'friday':
            return 10
            break;
        case 'saturday':
            return 8
            break;
        case 'sunday':
            return 9
            break;
    }
}

const getActualSleepHours = () => {
    return getSleepHours ('monday') + getSleepHours ('tuesday') + getSleepHours ('wednesday') + getSleepHours ('thursday') + getSleepHours ('friday') + getSleepHours ('saturday') + getSleepHours ('sunday')
}

const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours *= 7
}

console.log(`Your sleep hours for today is ${getSleepHours('saturday')} hours`);
console.log(`Your expected actual sleep for this week is ${getActualSleepHours()} hours`);
console.log(`Ideally you should sleep for ${getIdealSleepHours()} hours per`)

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()

    if (actualSleepHours === idealSleepHours) {
        console.log ('You got the perfect amount of sleep for this week');
    } else if (actualSleepHours < idealSleepHours) {
        console.log (`You got ${idealSleepHours - actualSleepHours} hours less sleep than you should than expected this week`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log (`You got ${actualSleepHours - idealSleepHours} hours more sleep than you should than expected this week`);
    }
}

calculateSleepDebt();