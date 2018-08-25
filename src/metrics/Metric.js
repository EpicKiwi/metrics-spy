let nextId = 0

class Metric {

    constructor(name){
        this.id = nextId
        nextId++

        this.name = name
        this.dimentions = [
            new Dimention('date','ms')
        ]
    }

}

class Dimention {

    constructor(name,unit){
        this.name = name
        this.unit = unit
    }

}

Metric.Dimention = Dimention

module.exports = Metric