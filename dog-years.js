function dogYears(planet, age) {
    if (planet == "earth") {
        age /= 31557600;
        age *= 7;
        return parseFloat(age.toFixed(2));
    } else if (planet == "mercury") {
        age /= 0.2408467*31557600;
        age *= 7;
        return parseFloat(age.toFixed(2));
    } else if (planet == "venus") {
        age /= 0.61519726*31557600;
        age *= 7;
        return parseFloat(age.toFixed(2));
    } else if (planet =="mars") { 
        age /= 1.8808158*31557600;
        age *= 7;
        return parseFloat(age.toFixed(2));
    } else if (planet == "jupiter") {
        age /= 11.862615*31557600;
        age *= 7;
        return parseFloat(age.toFixed(2));
    } else if (planet == "saturn") {
        age /= 29.447498*31557600;
        age *= 7;
        return parseFloat(age.toFixed(2));
    } else if (planet == "uranus") {
        age /= 84.016846*31557600;
        age *= 7;
        return parseFloat(age.toFixed(2));
    } else if (planet == "neptune") {
        age /= 164.79132*31557600;
        age *= 7;
        return parseFloat(age.toFixed(2));
    }
}