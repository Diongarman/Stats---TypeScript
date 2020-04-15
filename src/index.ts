import { Summary } from './summary';
import { MatchReader } from './MatchReader';

//below refactor replaces: let reader = new MatchReader(new CsvFileReader('football.csv'));
let reader = MatchReader.initCsvFileReader('football.csv');
//below refactor replaces:  let summary = new Summary(new WinsAnalysis('Leicester'), new ConsoleReport());
let summary = Summary.initWinsAnalysisHtmlReportDelegates(
  'Man United',
  'report.html'
);

reader.load();
summary.buildAndPrintReport(reader.matches);
