import { MatchData } from './MatchData';

//interfaces describe t&cs a delegate must satisfy
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

//coordinator of delegates
export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]) {
    let output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
