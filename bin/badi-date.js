#!/usr/bin/env node
'use strict';

const {join} = require('path');
const moment = require('moment');
global.moment = moment;
require('moment-timezone');

const {cliBasics} = require('command-line-basics');

const {BadiDate, LocalBadiDate} = require('../');
const optionDefinitions = cliBasics(
  join(__dirname, './optionDefinitions.js')
);

if (!optionDefinitions) {
  process.exit(); // eslint-disable-line no-process-exit
}

const currDate = new Date();
const {
  // verbose
  latitude, longitude, timezoneId,
  date = moment.utc([currDate.getFullYear(),
    currDate.getMonth(), currDate.getDate(), 12]),
  format, language
} = optionDefinitions;

const getLocal = ![latitude, longitude, timezoneId].includes(undefined);

if (getLocal) {
  const {
    badiDate: dateObj
  } = new LocalBadiDate(date, latitude, longitude, timezoneId);
  // eslint-disable-next-line no-console
  console.log(dateObj.format(format, language));
} else {
  const dateObj = new BadiDate(date);
  // eslint-disable-next-line no-console
  console.log(dateObj.format(format, language));
}
