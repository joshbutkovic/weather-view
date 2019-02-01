import moment from 'moment';
import _ from 'lodash';


class BarChartService {

    constructor(forecast) {
        this.forecast = forecast.list;
        this.sampleData = [];
        this.processedForecast = [];
        this.chartStyle = {};
        this.axisLabel = {};
        this.init();
    }

    init() {
        console.log(this.filterForecast());
    }

    filterSnapshot(weatherSnap) {
        // console.log(this.forecast);
        const allowed = ['dt_txt', 'main[\'temp\']'];

        // return _.pick(this.forecast, allowed);
        const filteredObj = _.pick(weatherSnap, allowed);
        return filteredObj;
    }

    filterForecast() {
        // console.log(this.forecast);
        let fiveDayForecast = [];
        for (let weatherSnapShot of this.forecast) {
            console.log(weatherSnapShot)
            console.log(this.filterSnapshot(weatherSnapShot));

        }
        return 'DONE';
    }

    averageDailyWeather() {

    }

    getStyle() {
        this.chartStyle = {
            'text.label': {
                fill: '#222',
                fontSize: '15px !important'
            }
        };
        return this.chartStyle;
    }

    getAxisLabels() {
        this.axisLabel = { x: 'Time', y: 'Temp Fahrenheit' };
        return this.axisLabel;
    }

    getSampleData() {
        this.sampleData.push(
            {
                x: 'A',
                y: 46,
            },
            {
                x: 'B',
                y: 26,
            },
            {
                x: 'C',
                y: 28,
            },
            {
                x: 'D',
                y: 44,
            },
            {
                x: 'E',
                y: 55,
            },
            {
                x: 'F',
                y: 46,
            },
            {
                x: 'G',
                y: 26,
            },
            {
                x: 'H',
                y: 28,
            },
            {
                x: 'J',
                y: 44,
            },
            {
                x: 'I',
                y: 55,
            }
        );

        return this.sampleData;
    }

}

export default BarChartService;
