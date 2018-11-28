INSTALL DEPENDENCIES

ESLint + Prettier
`npm install -D eslint prettier`

ESLint
`npm install eslint --save-dev`

Prettier

```
npm install --save-dev --save-exact prettier
`yarn add prettier --dev --exact
```

eslint-config-airbnb-base<br>
eslint-plugin-import<br>
`npx install-peerdeps --dev eslint-config-airbnb-base`

eslint-config-prettier (disables formatting for ESLint) <br>
eslint-plugin-prettier (allows ESLint to show formatting errors as we type)<br>
`npm install -D eslint-config-prettier eslint-plugin-prettier`

---

Integrating Prettier + ESLint + Airbnb Style Guide in VSCode<br>
https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a

eslint-config-airbnb<br>
https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React.
If you don't need React, see eslint-config-airbnb-base

eslint-config-airbnb-base<br>
https://www.npmjs.com/package/eslint-config-airbnb-base

---

Wes Bos .eslintrc
https://github.com/wesbos/dotfiles/blob/master/.eslintrc

---

DISABLE ESLINT ON FILES

Disable ESLint for a file
https://evanhahn.com/disable-eslint-for-a-file/

`/* eslint-disable */`

Turning off eslint rule for a specific file<br>
https://stackoverflow.com/questions/34764287/turning-off-eslint-rule-for-a-specific-file

```
/* eslint no-use-before-define: 0 */  // --> OFF
/* eslint no-use-before-define: 2 */  // --> ON
```

.eslintignore file

```
/* eslint-disable */
/* eslint-enable */
```

---

ESLint Rules

Disallow return before else (no-else-return)
https://eslint.org/docs/rules/no-else-return

consistent-return
https://eslint.org/docs/rules/consistent-return

Require or disallow named function expressions (func-names)
https://eslint.org/docs/rules/func-names

operator-assignment
https://eslint.org/docs/rules/operator-assignment

no-plusplus
https://eslint.org/docs/rules/no-plusplus

---

Don't mix package managers (yarn and npm).
