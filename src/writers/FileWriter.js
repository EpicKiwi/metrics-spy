const Writer = require("./Writer")
const fs = require("fs")
const util = require("util")
const path = require("path")
const moment = require("moment")

class FileWriter extends Writer {

    constructor(collectors,destination=path.resolve(__dirname+"/../../data")){
        super(collectors)
        this.destination = destination
        this.extention = "txt"
    }

    async write(measure) {

        let metricDirectory = path.join(this.destination,`${measure.metric.name}-${measure.metric.id}`)

        try {
            await util.promisify(fs.stat)(metricDirectory)
        } catch(e) {
            await util.promisify(fs.mkdir)(metricDirectory)
        }

        let filename = this.getFilename(measure)
        let filepath = path.join(metricDirectory,filename)

        try {
            await util.promisify(fs.stat)(filepath)
        } catch(e) {
            await this.createFile(filepath,measure)
        }

        await this.writeInFile(filepath,measure)

    }

    getFilename(measure){
        let date = moment(measure.measures.date)
        let filename = date.format("DD-MM-YYYY")+`-${measure.metric.name}-${measure.metric.id}.${this.extention}`
        return filename
    }

    async createFile(filePath,measure){
        await util.promisify(fs.writeFile)(filePath,'',{mode:0o666})
    }

    async writeInFile(filePath,measure){

        let data = ''
        Object.keys(measure.measures).forEach((el) => {
            data += `${el}=${measure.measures[el]} `
        })
        data+="\n"
        await util.promisify(fs.writeFile)(filePath,data,{flag:'a'})
    }
}

module.exports = FileWriter