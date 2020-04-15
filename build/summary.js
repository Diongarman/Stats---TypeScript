"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var htmlReport_1 = require("./reportTargets/htmlReport");
var WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
//coordinator of delegates
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    //we are using the static method to return a specific preconfigured instance of this class
    Summary.initWinsAnalysisHtmlReportDelegates = function (teamName, fileName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new htmlReport_1.HtmlReport(fileName));
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
