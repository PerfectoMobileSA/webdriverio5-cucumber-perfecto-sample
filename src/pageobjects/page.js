const path = require('path');
const fs = require('fs');
const _ = require('lodash');

export default class Page {

    constructor() {
        this.loc = {};

        this.platformKey = browser.capabilities.platformName.toLowerCase();
        console.log('platformKey: ' + this.platformKey);
        this.baseLocatorsPath = '../pageLocators';

    }

    locators(pageName) {


        var platformLocFile =  path.join(__dirname, this.baseLocatorsPath+'/'+this.platformKey+'/'+pageName+'.page.loc.js');
        var platformLoc;

        if (fs.existsSync(platformLocFile)) {
            platformLoc = require(platformLocFile);
        }
        if (_.isUndefined(platformLoc)) {
                return {selectors: {}};
        }
        else {
                return platformLoc;
            }

        }
}

//module.exports = Page
