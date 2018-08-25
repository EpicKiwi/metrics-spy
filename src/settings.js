const defaults = require("../settings/settings.default")
let settings = defaults

try {
    Object.assign(settings, require("../settings/settings"))
} catch(e){
    console.warn("You don't have a settings file, using defaults")
}

settings.defaults = defaults

module.exports = settings