import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

console.log(matches);

const HomeWin = 'H';
const AwayWin = 'A';

let manUnitedWins = 0;

for (let match of matches) {
  if (
    (match[1] === 'Man United' && match[5] === HomeWin) ||
    (match[2] === 'Man United' && match[5] === AwayWin)
  ) {
    manUnitedWins++;
  }
}

console.log('Man United Wins: ', manUnitedWins);
