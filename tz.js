const moment = require('moment-timezone');
const yargs = require('yargs');

moment.tz.setDefault('America/New_York');

if (yargs.argv._.length < 1) {
  console.log('Incorrectly formatted querey\nUsage: npm tz.js <timezone>');
  process.exit(1);
} else {
  const target = yargs.argv._[0];
  if (yargs.argv.format) {
    console.log(
      `The time here is ${moment()
        .tz('America/New_York')
        .format('dddd, MMMM Do YYYY, h:mm:ss a')}\nThe time in ${target
        .split('/')[1]
        .replace('_', ' ')} is ${moment()
        .tz(target)
        .format('dddd, MMMM Do YYYY, h:mm:ss a')}`
    );
  } else {
    console.log(
      `The time here is ${moment()
        .tz('America/New_York')
        .format()}\nThe time in ${target
        .split('/')[1]
        .replace('_', ' ')} is ${moment().tz(target).format()}`
    );
  }
}
