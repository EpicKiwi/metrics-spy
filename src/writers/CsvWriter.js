const FileWriter = require("./FileWriter")
const util = require("util")
const fs = require("fs")

class CsvWriter extends FileWriter {

    constructor(collectors,destination){
        super(collectors,destination)
        this.extention = "csv"
    }


    async createFile(filePath, measure) {

        let data = measure.metric.dimentions.map((dim) => {
            let legend = dim.name
            if(dim.unit)
                legend += ` (${dim.unit})`
            return legend
        }).join(",") + "\n"

        await util.promisify(fs.writeFile)(filePath,data)
    }

    async writeInFile(filePath, measure) {

        let data = measure.metric.dimentions.map((dim) => {
            let value = measure.measures[dim.name]
            if(value instanceof String){
                return `"${value}"`
            } else if(value instanceof Date){
                return `${value.getTime()}`
            } else {
                return `${value}`
            }
        }).join(",") + "\n"

        await util.promisify(fs.writeFile)(filePath,data,{flag:'a'})
    }
}

module.exports = CsvWriter