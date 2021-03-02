const clear = require('clear');

const files = require('./lib/files');
const ui = require('./lib/ui');

const inquirer = require('./lib/inquirer');

clear();

if (!files.directoryExists('themes')) {
  ui.locationCheck();
  process.exit();
}

ui.title();

const run = async () => {
  inquirer.askWhatIsGoingToBeMigrated();
};

run();
