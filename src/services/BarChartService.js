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
    }

    init() {
        this.allowed.push('dt_txt', "main['temp']");
        this.currentDateTime = moment().format();
    }

    filterSnapshot(weatherSnap) {
        return _.pick(weatherSnap, this.allowed);
    }

    filterForecastData() {
        for (let i = 0; i < 12; i++) {
            let fs = this.filterSnapshot(this.forecast[i]);
            fs.x = moment(fs.dt_txt).format('M/D ha');
            fs.y = convertKelvinToFahrenheit(parseInt(fs.main.temp));
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
