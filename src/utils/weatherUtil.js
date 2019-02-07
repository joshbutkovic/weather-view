import moment from 'moment';
import _ from 'lodash';

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

export const getTempRange = forecast => {
    let highTemp = 0,
        lowTemp = 0;
    for (let i = 0; i < 12; i++) {
        let fs = ForecastFilter.filterSnapshot(forecast[i]);
        fs.y = convertKelvinToFahrenheit(parseInt(fs.main.temp));
        if(i === 0) {
            highTemp = fs.y;
            lowTemp = fs.y;
        } else {
            if(fs.y < lowTemp) {
                lowTemp = fs.y;
            }
            if(fs.y > highTemp) {
                highTemp = fs.y;
            }
        }
    }
    return {
        lowTemp,
        highTemp
    };
};

export const isWeatherResultEmpty = obj => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
};

export const ForecastFilter = {
    init: (forecast) => {
        let processedForecast = [];

        for (let i = 0; i < 12; i++) {
            let fs = ForecastFilter.filterSnapshot(forecast[i]);
            fs.x = moment(fs.dt_txt).format('M/D ha');
            fs.y = convertKelvinToFahrenheit(parseInt(fs.main.temp));
            fs.color = ForecastFilter.assignBarColor(convertKelvinToFahrenheit(parseInt(fs.main.temp)));
            if (!moment(fs.dt_txt).isBefore(moment().format())) {
                delete fs.dt_txt;
                delete fs.main;
                processedForecast.push(fs);
            }
        }
        return processedForecast;
    },
    filterSnapshot: (weatherSnap) => {
        let allowed = ['dt_txt', "main['temp']"];
        return _.pick(weatherSnap, allowed);
    },
    assignBarColor: (temp) => {
        let tempInt = parseInt(temp);
        if((tempInt < 20)) {
            return '#0500ff';
        } else if ((tempInt > 20) && (tempInt < 30)) {
            return '#00b4ff';
        } else if ((tempInt > 30) && (tempInt < 50)) {
            return '#00ff83';
        } else if ((tempInt > 50) && (tempInt < 70)) {
            return '#17ff00';
        } else if ((tempInt > 70) && (tempInt < 90)) {
            return '#FFdc00';
        } else if (tempInt > 90) {
            return '#FF7800';
        } else {
            return '#00ffd0"';
        }
    }
};