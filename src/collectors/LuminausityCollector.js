const Collector = require("./Collector")
const Tsl2561 = require("ada-tsl2561")
const Measure = require("../measures/Measure")
const LuminausityMetric = require("../metrics/LuminosityMetric")

const gainScale = ['1x','16x']
const integrationScale = [13.7,101,402,'manual']

class LuminausityCollector extends Collector {

    constructor(freq=1000){
        super(freq)
        this.metric = new LuminausityMetric()
        this.sensor = new Tsl2561()
        this.sensorInitialized = false
    }

    async collect() {
        if(!this.sensorInitialized){
            await this.sensor.init(1)
            await this.sensor.enable()
            this.sensorInitialized = true
        }

        let lux = await this.sensor.getLux()
        let broadband = await this.sensor.getBroadband()
        let infrared = await this.sensor.getInfrared()

        let gain = await this.sensor.getGain()
        let integrationTime = await this.sensor.getIntegrationTime()

        gain = gainScale[gain]
        integrationTime = integrationScale[integrationTime]

        return new Measure(this.metric,new Date,lux,broadband,infrared,gain,integrationTime)
    }
}

module.exports = LuminausityCollector