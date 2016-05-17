# textlint-rule-chapter-difficulty-stars

this is a linter plugin for japanese text.

このtestlintプラグインは[dwango/scala_text](https://github.com/dwango/scala_text)のために作成されています。
そのため一般的な文章ルールにはないルールを検査しています。

この[textlint](https://github.com/textlint/textlint)-ruleは次の2つの規則を検査します。

- #(h1), ##(h2)に`★+`を含む
- ###(h3)より深い見出しに`★+`を含まない

## Installation

ruleのインストールは以下のように行います。

まずnpmのライブラリとしてインストールを行います。

```
npm install -D textlint textlint-rule-chapter-difficulty-stars
```

その後、.textlintrcで以下のようにrulesを記述します。

```js
{
    "rules": {
        "chapter-difficulty-stars": true
    }
}
```
