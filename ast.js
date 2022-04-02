// For the Javascript pane

const btnWithWrongStyle = <button className="wrong"></button>;
const btnWith = <button></button>;
const trueBtn = <button className="btn lol"></button>


// For the "Transform" pane
const ERROR_MSG_NOT_STYLED = 'Buttons must be styled with a btn class at least.';

export default function(context) {
  return {
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
  }
}