const Rsync = require('rsync');

const runRsyncMigration = (answers) => {
  const rsync = new Rsync()
    .flags('chavzP')
    .set('port', answers.serverPort)
    .source(`${answers.serverHost}/data/wordpress/htdocs/wp-content/plugins/`)
    .destination('./themes')
    .set('append-verify');

  // if (answers.password === '') {
  //   rsync.set('rsh', 'ssh -i ~/.shh/id_rsa');
  // } else {
  //   rsync.set('ssh');
  // }

  rsync.execute((error, code, cmd) => {});
};

export default { runRsyncMigration };
