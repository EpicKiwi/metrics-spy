const Metric = require("./Metric")

class LuminausityMetric extends Metric {

    constructor(){
        super('luminausity')
        this.dimentions.push(...[
            new Metric.Dimention('luminausity','lux'),
            new Metric.Dimention('broadband'),
            new Metric.Dimention('infrared'),
            new Metric.Dimention('gain'),
            new Metric.Dimention('integration-time','ms')
        ])
    }

}

module.exports = LuminausityMetric