import { ConsoleReport } from './reportTargets/consoleReport';
import { HtmlReport } from './reportTargets/htmlReport';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { Summary } from './summary';

import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

let reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();

//let summary = new Summary(new WinsAnalysis('Leicester'), new ConsoleReport());
let summary = new Summary(
  new WinsAnalysis('Leicester'),
  new HtmlReport('report.html')
);

summary.buildAndPrintReport(reader.matches);
