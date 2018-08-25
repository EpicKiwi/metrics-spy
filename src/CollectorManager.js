const LuminausityCollector = require("./collectors/LuminausityCollector")

class CollectorManager {

    constructor(){
        this.collectors = [
            new LuminausityCollector()
        ]
    }

    start(){
        this.collectors.forEach((el) => el.start())
    }

    stop(){
        this.collectors.forEach((el) => el.stop())
    }

}

module.exports = new CollectorManager()