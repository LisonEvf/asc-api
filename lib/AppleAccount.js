class AppleAccount {
    constructor(keyID, issuerID, privateKey) {
        this.keyID = keyID;
        this.issuerID = issuerID;
        this.privateKey = privateKey;
    }

    registerNewBundleID () {

    }

    
}

module.exports = AppleAccount;

// Allow use of default import syntax in TypeScript
module.exports.default = AppleAccount;