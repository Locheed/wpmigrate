const migrationItemList = {
  type: 'checkbox',
  name: 'type',
  message:
    'What you would like to migrate from production/staging environment to local?',
  choices: ['Database', 'Theme', 'Plugins', 'Media files'],
  filter: (value) => value.map((val) => val.toLowerCase()),
};

const serverHost = {
  type: 'string',
  name: 'host',
  message:
    'Production/staging server host with username (eg. username@hostname.com):',
  validate: (value) => {
    const pass = value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    if (pass) return true;

    return 'That was not a valid hostname (username@hostname.com)!';
  },
};

const serverPort = {
  type: 'string',
  name: 'port',
  message: 'Production/staging server port:',
  validate: (value) => {
    const isNumeric = !Number.isNaN(Number(value));
    const numberLengthIsAtleastTwo = value.length >= 2;

    if (isNumeric && numberLengthIsAtleastTwo) return true;
    if (!isNumeric) return 'Port number has to be a number!';
    if (!numberLengthIsAtleastTwo) {
      return 'Valid port number has to be atleast two numbers long!';
    }
  },
};

const serverPassword = {
  type: 'password',
  name: 'password',
  message:
    'Production/staging server password. Leave blank if your server uses SSL-key:',
};

module.exports = {
  migrationItemList,
  serverHost,
  serverPort,
  serverPassword,
};
