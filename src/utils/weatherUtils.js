import moment from 'moment';

export const convertKelvinToFahrenheit = kelvinTemp => {
    return parseInt(1.8 * (kelvinTemp - 273) + 32);
};

export const capitalizeFirstLetter = description => {
    return description.charAt(0).toUpperCase() + description.slice(1);
};

export const getCurrentTime = () => {
    return moment().format('h:mmA');
};

export const getWindDirection = angle => {
    let segments = 8;
    let degree = 360 / segments;
    angle = angle + degree / 2;

    if (angle >= 0 && angle < degree) {
        return 'N';
    } else if (angle >= degree && angle < 2 * degree) {
        return 'NE';
    } else if (angle >= 2 * degree && angle < 3 * degree) {
        return 'E';
    } else if (angle >= 3 * degree && angle < 4 * degree) {
        return 'SE';
    } else if (angle >= 4 * degree && angle < 5 * degree) {
        return 'S';
    } else if (angle >= 5 * degree && angle < 6 * degree) {
        return 'SW';
    } else if (angle >= 6 * degree && angle < 7 * degree) {
        return 'W';
    } else if (angle >= 7 * degree && angle < 8 * degree) {
        return 'NW';
    } else {
        return 'N';
    }
};

export const getLatestDescriptionIndex = weather => {
    let lastIndex = Object.keys(weather)[Object.keys(weather).length - 1];
    return parseInt(lastIndex);
};