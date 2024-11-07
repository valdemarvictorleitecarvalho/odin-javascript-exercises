const findTheOldest = function(obj) {
    let oldest = "";
    let oldestAge = -Infinity;

    for (let i = 0; i < obj.length; i++) {
        const person = obj[i];
        const currentYear = new Date().getFullYear(); 

        const deathYear = person.yearOfDeath || currentYear;

        const age = deathYear - person.yearOfBirth;

        if (age > oldestAge) {
            oldestAge = age;
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
