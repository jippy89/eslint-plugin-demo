/**
 * @fileoverview Button must have some styling
 * @author Jip Irfandy
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-ugly-buttons"),
  RuleTester = require("eslint").RuleTester;

// Notice that we need to specify that we will be using JSX via `RuleTester.setDefaultConfig`.
// This will allow our rule to be tested with a parser that knows about JSX.
RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ERROR_MSG_NOT_STYLED = 'Buttons must be styled with a btn class at least.';

const ruleTester = new RuleTester();
ruleTester.run("no-ugly-buttons", rule, {
  valid: [
    {
      code: '<button className="btn"></button>'
    }
  ],

  invalid: [
    {
      code: "<button></button>",
      errors: [
        {
          message: ERROR_MSG_NOT_STYLED,
          type: "JSXOpeningElement"
        }
      ],
    },
  ],
});
