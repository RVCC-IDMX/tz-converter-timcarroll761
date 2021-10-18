const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

if (process.argv.length !== 3) {
  console.log('Incorrectly formatted querey\nUsage: npm tz.js <timezone>');
  process.exit(1);
} else {
  const target = process.argv[2];
  console.log(
    `The time here is ${moment()
      .tz('America/New_York')
      .format()}\nThe time in ${target
      .split('/')[1]
      .replace('_', ' ')} is ${moment().tz(target).format()}`
  );
}
