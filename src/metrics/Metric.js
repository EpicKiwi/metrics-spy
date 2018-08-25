let nextId = 0

class Metric {

    constructor(name){
        this.id = nextId
        nextId++

        this.name = name
        this.description = ''
        this.dimentions = [
            new Dimention('date','ms','La date de la mesure sous forme de timestamp à la milliseconde')
        ]
    }

}

class Dimention {

    constructor(name,unit,description){
        this.name = name
        this.unit = unit
        this.description = description
    }

}

Metric.Dimention = Dimention

module.exports = Metric