/**
 * Language Generator
 */
const fs = require('fs');
const { exec } = require('child_process');

function languageIsSupported(language) {
  try {
    fs.accessSync(`src/translations/${language}.json`, fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

const baseURI = '../../src/';

module.exports = {
  description: 'Add a language',
  prompts: [
    {
      type: 'input',
      name: 'language',
      message: 'What is the language you want to add i18n support for (e.g. "fr", "de")?',
      default: 'fr',
      validate: value => {
        if (/.+/.test(value) && value.length === 2) {
          return languageIsSupported(value) ? `The language "${value}" is already supported.` : true;
        }

        return '2 character language specifier is required';
      },
    },
  ],

  actions: ({ test }) => {
    const actions = [];
    actions.push({
      type: 'modify',
      path: baseURI + 'i18n.js',
      pattern: /('react-intl\/locale-data\/[a-z]+';\n)(?!.*'react-intl\/locale-data\/[a-z]+';)/g,
      templateFile: './language/intl-locale-data.hbs',
    });
    actions.push({
      type: 'modify',
      path: baseURI + 'i18n.js',
      pattern: /(\s+'[a-z]+',\n)(?!.*\s+'[a-z]+',)/g,
      templateFile: './language/app-locale.hbs',
    });
    actions.push({
      type: 'modify',
      path: baseURI + 'i18n.js',
      pattern: /(from\s'.\/translations\/[a-z]+.json';\n)(?!.*from\s'.\/translations\/[a-z]+.json';)/g,
      templateFile: './language/translation-messages.hbs',
    });
    actions.push({
      type: 'modify',
      path: baseURI + 'i18n.js',
      pattern: /(addLocaleData\([a-z]+LocaleData\);\n)(?!.*addLocaleData\([a-z]+LocaleData\);)/g,
      templateFile: './language/add-locale-data.hbs',
    });
    actions.push({
      type: 'modify',
      path: baseURI + 'i18n.js',
      pattern:
        /([a-z]+:\sformatTranslationMessages\('[a-z]+',\s[a-z]+TranslationMessages\),\n)(?!.*[a-z]+:\sformatTranslationMessages\('[a-z]+',\s[a-z]+TranslationMessages\),)/g,
      templateFile: './language/format-translation-messages.hbs',
    });
    actions.push({
      type: 'add',
      path: baseURI + 'translations/{{language}}.json',
      templateFile: './language/translations-json.hbs',
      abortOnFail: true,
    });

    if (!test) {
      actions.push(() => {
        const cmd = 'npm run extract-intl';
        exec(cmd, (err, result) => {
          if (err) throw err;
          process.stdout.write(result);
        });
        return 'modify translation messages';
      });
    }

    return actions;
  },
};
