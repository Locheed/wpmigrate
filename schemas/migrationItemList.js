module.exports = [
  {
    type: 'list',
    name: 'type',
    message:
      'What you would like to migrate from production environment to local?',
    choices: ['Database', 'Theme', 'Plugins', 'Media files'],
  },
];
