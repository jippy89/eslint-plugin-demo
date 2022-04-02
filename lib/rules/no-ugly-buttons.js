/**
 * @fileoverview Button must have some styling
 * @author Jip Irfandy
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Button must have some styling",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here
    const ERROR_MSG_NOT_STYLED = 'Buttons must be styled with a btn class at least.';

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      JSXOpeningElement(node) {
        const nodeType = node.name.name;
        if (nodeType !== 'button') {
          return;
        }
        const legalClassNameAttributes = node.attributes.filter(attr => {
          const isClassName = attr.type === 'JSXAttribute' && attr.name.name === 'className';
  
          return isClassName && (
            attr.value.type !== 'Literal' || attr.value.value.includes('btn')
          );
        });
        if (!legalClassNameAttributes.length) {
          context.report({
            node: node,
            message: ERROR_MSG_NOT_STYLED
          })
        }
      }
    };
  },
};
