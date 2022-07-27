"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Countable_1 = require("./Countable");
let fileContent = fs_1.default
    .readFileSync('./football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map((item) => {
    return item.split(',');
});
class Footbal extends Countable_1.Countable {
    data;
    team;
    homeWin;
    awayWin;
    draw;
    count = 0;
    constructor(data, team, homeWin, awayWin, draw) {
        super();
        this.data = data;
        this.team = team;
        this.homeWin = homeWin;
        this.awayWin = awayWin;
        this.draw = draw;
    }
}
const footbal = new Footbal(fileContent, 'Man United', 'H', 'A', 'D');
function count(teams) {
    teams.data
        .filter((item) => {
        return item.includes(teams.team);
    })
        .map((item) => {
        if (item.includes(teams.homeWin)) {
            teams.count++;
        }
    });
}
count(footbal);
console.log(footbal.count);
