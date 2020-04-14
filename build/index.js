"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var matchResult_1 = require("./matchResult");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if ((match[1] === 'Man United' && match[5] === matchResult_1.MatchResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === matchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(reader.data);
console.log('Man United Wins: ', manUnitedWins);
