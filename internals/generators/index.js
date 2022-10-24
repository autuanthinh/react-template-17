/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */
const languageGenerator = require('./language/index.js');

module.exports = plop => {
  plop.setGenerator('language', languageGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
