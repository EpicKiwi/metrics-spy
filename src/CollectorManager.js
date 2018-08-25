class CollectorManager {

    constructor(){
        this.collectors = [
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