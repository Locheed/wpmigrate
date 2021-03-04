const chalk = require('chalk');
const figlet = require('figlet');

module.exports = {
  locationCheck: () => {
    console.log(
      chalk.red(
        'You have to be inside',
        chalk.bold('wp-content'),
        'folder when running the CLI! ',
      ),
    );
  },

  title: () =>
    console.log(
      chalk.yellow(figlet.textSync('Mika', { horizontalLayout: 'full' })),
    ),
};
