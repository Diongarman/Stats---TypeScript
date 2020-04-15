import { OutputTarget } from './../summary';
import fs from 'fs';

export class HtmlReport {
  constructor(public filename: string) {}
  print(report: string) {
    const html = `
        <div>
            <h1>Analysis Report</h1>
            <div> ${report}</div>
        </div>
        
        `;
    fs.writeFileSync(this.filename, html);
  }
}
