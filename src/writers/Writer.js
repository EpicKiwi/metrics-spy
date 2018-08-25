class Writer {

    constructor(collectors){
        this.collectors = collectors
        this.write = this.write.bind(this)
    }

    start() {
        this.collectors.forEach((el) => el.on("measure",this.write))
    }

    stop() {
        this.collectors.forEach((el) => el.removeListener("measure",this.write))
    }

    async write(measure) {
    }

}

module.exports = Writer