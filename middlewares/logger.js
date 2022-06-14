const fs = require('fs');

// const fs = require('fs/promises');

const content = 'Some content!';

function logger(req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  let loggedInfo = `${new Date()} ${req.method} ${req.path} ${ip}`;
  console.log(`${new Date()} ${req.method} ${req.path} ${ip}`);
  // fs.writeFile('logs.txt', log, { flag: 'a+' }, (err) => {})

  loggingLogs(loggedInfo);

  next();
}

////// TRYING TO CALL THE FUNCTION
function loggingLogs(loggedInfo) {
  fs.appendFileSync('logs.log', loggedInfo);
  /// logs.log is inside the DATA folder but no matter if I call this one or just logs.txt which is in the same folder, it doesn't write the on the file.
  // , (err) => {
  //   if (err) {
  //     console.error(err);
  //   }
  // });
}
// fs.writeFile('logs.txt', log, { flag: 'a+' }, (err) => {});

// fs.appendFile('logs.txt', log, (err) => {
//   if (err) {
//     console.error(err);
//   }
//   // done!
// });

module.exports = logger;
