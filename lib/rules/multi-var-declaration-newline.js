"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "require newline between multiple variable declarations and declarators",
            category: "Stylistic Issues",
            recommended: true
        },
        fixable: "whitespace",  // or "code" or "whitespace"
        schema: [
            {enum: ['always', 'never']}
        ],
        messages: {
            never: 'Unexpected newline between variable declarator and declaration.',
            always: 'Expected newline between variable declarator and declaration.'
        }
    },

    create: function (context) {
        let options = [];

        options[0] = context.options[0] || 'always';
        return {
            VariableDeclaration(node) {
              if (options[0] !== 'always' || node.declarations.length <= 1) {
                  return;
              }
              if (node.declarations[0].loc.start.line == node.loc.start.line) {
                context.report({
                    node: node.declarations[0],
                    messageId: options[0],
                    fix(fixer) {
                        return [
                          fixer.insertTextBefore(node.declarations[0], "\n")
                      ];
                    },
                });  
              }
            }
        };
    }
};
