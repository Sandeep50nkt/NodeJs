const request = require('sync-request')

function getDigitalPreference(input) {
    console.log('service')
    var res = request('GET', 'http://example.com');
   
    return res.getBody('utf-8');
}

module.exports.getDigitalPreference = getDigitalPreference