const CollectorManager = require("./CollectorManager")

const LogWriter = require("./writers/LogWriter")
const CsvWriter = require("./writers/CsvWriter")

class WriterManager {

    constructor(){
        this.writers = [
            new LogWriter(CollectorManager.collectors),
            new CsvWriter(CollectorManager.collectors)
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