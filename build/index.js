"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let fileContent = fs_1.default
    .readFileSync('./football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map((item) => {
    return item.split(',');
});
let count = 0;
let MunUMathes = fileContent.filter(item => {
    return item.includes('Man United');
});
console.log(MunUMathes);
MunUMathes.map(item => {
    if (item.includes('A')) {
        count++;
    }
});
console.log(count);
