const inquirer = require('inquirer');

const migrationItemList = require('../schemas/migrationItemList');

module.exports = {
  askWhatIsGoingToBeMigrated: () =>
    inquirer.prompt(migrationItemList).then((answers) => {
      console.log(answers);
    }),
};
