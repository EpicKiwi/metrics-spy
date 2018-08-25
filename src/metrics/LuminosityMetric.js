const Metric = require("./Metric")

class LuminosityMetric extends Metric {

    constructor(){
        super('luminosity')
        this.dimentions.push(...[
            new Metric.Dimention('luminosity','lux'),
            new Metric.Dimention('broadband'),
            new Metric.Dimention('infrared'),
            new Metric.Dimention('gain'),
            new Metric.Dimention('integration-time','ms')
        ])
    }

}

module.exports = LuminosityMetric