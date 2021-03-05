const inquirer = require('inquirer');
const runRsyncMigrating = require('./startMigrating');

const {
  migrationItemList,
  serverHost,
  serverPort,
  serverPassword,
} = require('./inquirerQuestions');

module.exports = {
  askWhatIsGoingToBeMigrated: () =>
    inquirer
      .prompt([migrationItemList, serverHost, serverPort, serverPassword])
      .then((answers) => {
        console.log(answers);

        if (answers.type) runRsyncMigrating(answers);
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment");
        } else {
          console.log('Something went wrong');
        }
      }),
};
