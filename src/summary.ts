import { MatchData } from './MatchData';

import { HtmlReport } from './reportTargets/htmlReport';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';

//interfaces describe t&cs a delegate must satisfy
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

//coordinator of delegates
export class Summary {
  //we are using the static method to return a specific preconfigured instance of this class
  static initWinsAnalysisHtmlReportDelegates(
    teamName: string,
    fileName: string
  ): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport(fileName));
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]) {
    let output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
