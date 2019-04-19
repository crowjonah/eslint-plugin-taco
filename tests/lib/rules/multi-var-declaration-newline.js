'use strict';

const rule = require("../../../lib/rules/multi-var-declaration-newline");
const { RuleTester } = require('eslint');
const ruleTester = new RuleTester();

const parserOptions = { ecmaVersion: 2018, sourceType: 'module' };

const errors = [
    {
      message: rule.meta.messages.always,
      type: 'VariableDeclaration'
    }
  ];

ruleTester.run("multi-var-declaration-newline", rule, {
    valid: [
        {
            parserOptions,
            options: ['always'],
            code: `
const
A_STRING = 'string',
ANOTHER_STRING = 'another-string'`
        }
    ],

    invalid: [
        {
            parserOptions,
            options: ['never'],
            errors,
            code: `
const A_STRING = 'string'
const ANOTHER_STRING = 'another-string'`
        }
    ]
});
