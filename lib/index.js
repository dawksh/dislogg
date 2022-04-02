"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
class Dislog {
    constructor(webhook, user) {
        this.webhook = webhook;
        this.userID = user;
    }
    log(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield axios.post(this.webhook, {
                content: message
            });
        });
    }
    alert(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield axios.post(this.webhook, {
                content: `<@${this.userID}> \n ${message}`
            });
        });
    }
    get webHook() {
        return this.webhook;
    }
    get user() {
        return this.user;
    }
}
exports.default = Dislog;
