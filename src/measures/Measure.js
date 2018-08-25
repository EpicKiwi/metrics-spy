class Measure {

    constructor(metric,...measures){
        this.metric = metric
        this.measures = {}
        measures.forEach((el,i) => {
            let dimention = this.metric.dimentions[i]
            if(dimention){
                this.measures[dimention.name] = el
            }
        })
    }

}

module.exports = Measure