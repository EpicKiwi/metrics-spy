const Writer = require("./Writer")

class LogWriter extends Writer {

    async write(measure) {
        await super.write(measure)
        let logLine = `${measure.metric.name}-${measure.metric.id} : \n`
        logLine += Object.keys(measure.measures).map(
            (key) => ` - ${key} : ${measure.measures[key]}`)
            .join("\n")
        console.log(logLine+"\n")
    }
}

module.exports = LogWriter