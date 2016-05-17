// LICENSE : MIT
export default function(context) {
  let {Syntax,getSource, report,RuleError} = context;

  function reportResult(node, message) {
    report(node, new RuleError(message, {
      line: 0,
      column: 0
    }));
  }

  return {
    [Syntax.Header](node) {
      let text = getSource(node);
      if (node.depth <= 2 && !text.includes("★")) {
          reportResult(node, "#(h1), ##(h2)の見出し行に難易度表記(★)がありません "+ text);
      } else if (node.depth > 2 && text.includes("★")) {
          reportResult(node, "#(h3)より大きな見出し行に難易度表記(★)が含まれています " + text);
      }
    },
  };
}
