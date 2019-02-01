import moment from 'moment';


class BarChartService {
    dt_txt;

    constructor(forecast) {
        this.forecast = forecast.list;
        this.sampleData = [];
        this.processedForecast = [];
        this.chartStyle = {};
        this.axisLabel = {};
        this.init();
    }

    init() {
        this.assembleForecast();
    }

    assembleForecast() {
        console.log(this.forecast);

        // let initialDayInteger = parseInt(moment(this.forecast[0].dt_txt).format('D'));
        //
        // for (let weatherSnapShot of this.forecast) {
        //     console.log(weatherSnapShot);
        //     let timestamp = moment(weatherSnapShot.dt_txt);
        //     let currentDayInteger = parseInt(timestamp.format('D'));
        //
        //     while(initialDayInteger === currentDayInteger) {
        //         console.log(currentDayInteger);
        //     }
        //
        //     initialDayInteger++;
        //
        //     // var month = check.format('M');
        //     this.processedForecast.push(
        //         {
        //             x: moment(timestamp).calendar(),
        //             y: 55
        //         }
        //     )
        // }
        // return this.processedForecast;
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
