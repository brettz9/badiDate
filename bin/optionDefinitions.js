'use strict';

const pkg = require('../package.json');

const optionDefinitions = [
  {
    alias: 'd',
    defaultOption: true,
    description: 'Date to pass to Badí\' constructor (or empty to ' +
      'get today\'s date).',
    name: 'date',
    type: String,
    typeLabel: '{underline date}'
  },
  {
    description: 'Format string',
    name: 'format',
    type: String
  },
  {
    description: 'Language code',
    name: 'language',
    type: String
  },
  {
    description: 'Whether to provide an entire JSON object with full details.',
    name: 'verbose',
    type: Boolean
  },
  {
    description: 'Latitude of target location',
    name: 'latitude',
    type: Number
  },
  {
    description: 'Longitude of target location',
    name: 'longitude',
    type: Number
  },
  {
    description: 'Timezone ID per IANA time zone database',
    name: 'timezoneId',
    type: String
  }
];

const cliSections = [
  {
    // Add italics: `{italic textToItalicize}`
    content: pkg.description +
      '\n\n{italic badi-date [--verbose] [aDate]}'
  },
  {
    optionList: optionDefinitions
  }
];

exports.definitions = optionDefinitions;
exports.sections = cliSections;
