/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  editorconfig: true,
  // useTabs: false,
  // tabWidth: 2,
  // printWidth: 80,
  // endOfLine: 'lf',

  // Точка с запятой в конце оператора
  semi: true,

  // Всегда одинарные ковычки
  singleQuote: true,

  // Двойные ковычки для JSX
  jsxSingleQuote: false,

  // Ковычки для названий свойств объекта (consistent - если хотябы одно свойство требует ковычки то будут обернуты все)
  quoteProps: 'consistent',

  // Запятая после последнего элемента массива или объекта
  trailingComma: 'es5',

  // Пробелы внутри фигурных скобок import { get } from 'lodash';
  bracketSpacing: true,

  // Закрывающая ковычка тэга ">" на новой строке для JSX
  bracketSameLine: false,

  // Круглые скобки для параметров стрелочных функций (x) => x;
  arrowParens: 'always',

  // JSX атрибуты каждый на новой строке
  singleAttributePerLine: true,

  overrides: [
    {
      files: '*.yml',
      options: {
        // Двойные ковычки
        singleQuote: false,
      },
    },
  ],

  plugins: [
    // Сортирует импорты
    '@ianvs/prettier-plugin-sort-imports',
  ],

  importOrder: [
    '.(css|scss)$',
    '',
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    // Встроенные модули Node.js
    '<BUILTIN_MODULES>',
    '',
    '^react$',
    '^react/(.*)$',
    '^react([^/]+.*)$',
    '',
    '^@strapi$',
    '^@strapi/(.*)$',
    '^@strapi([^/]+.*)$',
    '',
    '^next$',
    '^next/(.*)$',
    '^next([^/]+.*)$',
    '^@next$',
    '^@next/(.*)$',
    '^@next([^/]+.*)$',
    '',
    '^lodash$',
    '^lodash/(.*)$',
    '',
    // Импорт, не сопоставленный с другими специальными словами или группами.
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/validation/(.*)$',
    '',
    '^@/components/(.*)$',
    '^@/ui/(.*)$',
    // Относительный импорт
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};
