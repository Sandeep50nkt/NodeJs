const xmljs = require('xml-js')

funtion mapJsonToXml(inputJson) {
    var options = { compact: true, ignoreComment: true, spaces: 4 };
    return xmljs.js2xml(inputJson, options)
}

funtion mapXmlToJson(inputJson) {
    var options = { ignoreComment: true, alwaysChildren: true };
    return xmljs.xml2js(inputJson, options)
}

module.exports.mapJsonToXml = mapJsonToXml
module.exports.mapXmlToJson = mapXmlToJson