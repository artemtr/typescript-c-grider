"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
function controller(routePrefix) {
    return function (target) {
        for (const key in target.prototype) {
            console.log(key);
            exports.router.get('/login', (req, res) => {
                res.send('still');
            });
        }
    };
}
exports.controller = controller;
