import moment from 'moment';
import _ from 'lodash';
import { convertKelvinToFahrenheit } from '../utils/weatherUtil';

class BarChartService {
    constructor(forecast) {
        this.forecast = forecast.list;
        this.processedForecast = [];
        this.currentDateTime = '';
        this.chartStyle = {};
        this.axisLabel = {};
        this.allowed = [];
        this.init();
        this.tempInt = 0;
    }

    init() {
        this.allowed.push('dt_txt', "main['temp']");
        this.currentDateTime = moment().format();
    }

    filterSnapshot(weatherSnap) {
        return _.pick(weatherSnap, this.allowed);
    }

    assignBarColor(temp) {
        this.tempInt = parseInt(temp)
        if(this.tempInt < 20) {
            return 'rgb(64, 156, 255)';
        } else if (this.tempInt > 20 && this.tempInt > 30) {
            return 'rgb(201, 226, 255)';
        } else if (this.tempInt > 30 && this.tempInt < 50) {
            return 'rgb(255, 255, 255)';
        } else if (this.tempInt > 50 && this.tempInt < 70) {
            return 'rgb(255, 214, 170)';
        } else if (this.tempInt > 70 && this.tempInt < 90) {
            return 'rgb(255, 197, 143)';
        } else if (this.tempInt > 90) {
            return 'rgb(255, 147, 41)';
        } else {
            return 'gray';
        }
    }

    filterForecastData() {
        for (let i = 0; i < 12; i++) {
            let fs = this.filterSnapshot(this.forecast[i]);
            fs.x = moment(fs.dt_txt).format('M/D ha');
            fs.y = convertKelvinToFahrenheit(parseInt(fs.main.temp));
            fs.color = this.assignBarColor(convertKelvinToFahrenheit(parseInt(fs.main.temp)));
            if (!moment(fs.dt_txt).isBefore(this.currentDateTime)) {
                delete fs.dt_txt;
                delete fs.main;
                this.processedForecast.push(fs);
            }
        }
        return this.processedForecast;
    }

    getStyle() {
        this.chartStyle = {
            'text.label': {
                fill: '#E9E9E9',
                fontSize: '17px !important',
            },
        };
        return this.chartStyle;
    }

    getAxisLabels() {
        this.axisLabel = { date: 'Time', temp: 'Temp Fahrenheit' };
        return this.axisLabel;
    }
}

export default BarChartService;
