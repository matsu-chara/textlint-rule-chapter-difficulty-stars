// LICENSE : MIT
import TextLintTester from "textlint-tester";
import rule from "../src/chapter-difficulty-stars";

let tester = new TextLintTester();
tester.run("見出しh1, h2に難易度表記が含まれている", rule, {
  valid: [`# ペンとは何か（★）
見出しh1には難易度表記が含まれます。

## ペン is a ペン（★★）
見出しh2にも難易度表記が含まれます。

### not ペン is a ペン
見出しh3以降には難易度表記を含みません。
`],
  invalid: [
    {
      text: `# ボールペンとは何か
  ボールペンについて考える。
`,
      errors: [
        {
          message: "#(h1), ##(h2)の見出し行に難易度表記(★)がありません # ボールペンとは何か",
          line: 1,
          column: 1
        }
      ]
    },
    {
      text: `## シャープペンの芯について
  シャープなペンだ。
  `,
      errors: [
        {
          message: "#(h1), ##(h2)の見出し行に難易度表記(★)がありません ## シャープペンの芯について",
          line: 1,
          column: 1
        }
      ]
    },
    {
      text: `### 万年筆について（★★）
筆だ。
`,
      errors: [
        {
          message: "#(h3)より大きな見出し行に難易度表記(★)が含まれています ### 万年筆について（★★）",
          line: 1,
          column: 1
        }
      ]
    }
  ]
});
