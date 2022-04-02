const axios = require('axios');


class Dislog {

    webhook: string;
    userID: string;

    constructor(webhook: string, user: string) {
        this.webhook = webhook;
        this.userID = user;
    }

    async log(message: string) {
        await axios.post(this.webhook, {
            content: message
        })
    }

    async alert(message: string) {
        await axios.post(this.webhook, {
            content: `<@${this.userID}> \n ${message}`
        })
    }

    get webHook() {
        return this.webhook
    }

    get user() {
        return this.user
    }

}


export default Dislog;