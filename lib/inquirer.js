const inquirer = require('inquirer');

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
      }),
};
