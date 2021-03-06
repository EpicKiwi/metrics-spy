const Metric = require("../metrics/Metric")
const Measure = require("../measures/Measure")
const EventEmitter = require("events").EventEmitter

class Collector extends EventEmitter {

    constructor(frequency=1000){
        super()

        this.frequency = frequency
        this.timeoutId = null
        this.pendingMeasures = []
        this.metric = new Metric('untitled')

    }

    flush(){
        let flushedMeasures = this.pendingMeasures
        this.pendingMeasures = []
        return flushedMeasures
    }

    async collect(){
        console.warn("Basic collector doesn't do anything.")
        console.warn("Please use a subclass and overwrite the 'collect()' function.")
        return new Measure(this.metric)
    }

    start(){
        this.$tick()
    }

    stop(){
        clearTimeout(this.timeoutId)
    }

    //INTERNAL USE

    $tick(){
        this.collect()
            .then((result) => {
                this.pendingMeasures.push(result)
                this.emit('measure',result)
            })
        this.timeoutId = setTimeout(this.$tick.bind(this),this.frequency)
    }

}

module.exports = Collector