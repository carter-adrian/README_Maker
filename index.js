const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const api = require('.utils/api.js')
const generateMarkown = require('/utils/generateMarkdown.js')