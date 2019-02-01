import moment from 'moment';
import _ from 'lodash';


class BarChartService {

    constructor(forecast) {
        this.forecast = forecast.list;
        this.sampleData = [];
        this.processedForecast = [];
        this.chartStyle = {};
        this.axisLabel = {};
        this.allowed = ['dt_txt', 'main[\'temp\']'];
        this.init();
    }

    init() {
        console.log(this.filterForecast());
    }

    filterSnapshot(weatherSnap) {
        return _.pick(weatherSnap, this.allowed);
    }

    filterForecast() {
        let filteredForecast = [];
        console.log(this.forecast.length);
        for (let weatherSnapShot of this.forecast) {
            let fs = this.filterSnapshot(weatherSnapShot);
            // let dateInt = parseInt(fs.dt_txt);
            fs.date = moment(dateInt).format('MM/DD');
            fs.id = moment(fs).format('D');
            if(fs.id === 1) {
                console.log('hey');
            }
            filteredForecast.push(fs);
        }
        return filteredForecast;
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
