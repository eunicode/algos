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

Don't mix package managers (yarn and npm).
