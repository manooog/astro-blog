'use strict';

const githubEvent = require('..');
const assert = require('assert').strict;

assert.strictEqual(githubEvent(), 'Hello from githubEvent');
console.info("githubEvent tests passed");
