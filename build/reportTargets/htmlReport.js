"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(filename) {
        this.filename = filename;
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n        <div>\n            <h1>Analysis Report</h1>\n            <div> " + report + "</div>\n        </div>\n        \n        ";
        fs_1.default.writeFileSync(this.filename, html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
