// my-reporter.js
const mocha = require('mocha');
const { Base } = mocha.reporters;

class MyReporter extends Base {
  constructor(runner) {
    super(runner);
    let passes = 0;
    let failures = 0;
    let testsDetails = [];

    runner.on('pass', (test) => {
      passes++;
      testsDetails.push({ title: test.title, state: 'pass' });
    });

    runner.on('fail', (test, err) => {
      failures++;
      testsDetails.push({ title: test.title, state: 'fail', err });
    });

    runner.on('end', () => {
      console.log(`${passes} success ✅`);
      console.log(`${failures} failed ❌`);
      console.log('');
      testsDetails.forEach((t, i) => {
        const symbol = t.state === 'pass' ? '✅' : '❌';
        const reason = t.state === 'fail' ? ` [${t.err.message}]` : '';
        console.log(`Task ${i + 1}: ${symbol} ${t.title}${reason}`);
      });
    });
  }
}

module.exports = MyReporter;
