"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DBManager_1 = __importDefault(require("./DBManager"));
class TestModel extends DBManager_1.default {
    constructor() {
        super();
        console.log(this.db_connection);
    }
}
