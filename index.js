/**
 * [ ❤ Spidex ❤ ]
 * Created by XadillaX on 14-1-17 with love
 */
require("sugar/release/sugar-full.development");
var Spidex = require("./lib/spidex");
var util = require("util");
var statics = require("./lib/statics");

module.exports = new Spidex();

/**
 * get the default user-agent
 * @returns {userAgent|*}
 */
module.exports.getDefaultUserAgent = function() {
    return statics.userAgent;
};

/**
 * set the default user-agent
 * @param userAgent
 */
module.exports.setDefaultUserAgent = function(userAgent) {
    statics.userAgent = userAgent;
};

/**
 * parse Cookie.
 * @param respHeader
 * @returns {string}
 */
module.exports.parseCookie = function(respHeader) {
    var cookies = respHeader["set-cookie"];
    if(!cookies || !util.isArray(cookies) || cookies.length === 0) {
        return "";
    }

    var cookie = "";
    for(var i = 0; i < cookies.length; i++) {
        var tmpCookie = cookies[i];
        if(tmpCookie.indexOf(";") !== -1) {
            tmpCookie = tmpCookie.substr(0, tmpCookie.indexOf(";") + 1);
        }
        cookie += tmpCookie;
        cookie += " ";
    }

    return cookie;
};
