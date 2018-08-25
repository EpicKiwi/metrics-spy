const LogWriter = require("./writers/LogWriter")
const CollectorManager = require("./CollectorManager")

class WriterManager {

    constructor(){
        this.writers = [
            new LogWriter(CollectorManager.collectors)
        ]
    }

    start(){
        this.writers.forEach((el) => el.start())
    }

    stop(){
        this.writers.forEach((el) => el.stop())
    }

}

module.exports = new WriterManager()