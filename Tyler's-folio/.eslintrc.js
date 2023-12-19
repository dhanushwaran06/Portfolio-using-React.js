// // module.exports = {
// //     'env': {
// //         'browser': true,
// //         'es2021': true
// //     },
// //     'extends': [
// //         'eslint:recommended',
// //         'plugin:react/recommended'
// //     ],
// //     'overrides': [
// //     ],
// //     'parserOptions': {
// //         'ecmaVersion': 'latest',
// //         'sourceType': 'module'
// //     },
// //     'plugins': [
// //         'react'
// //     ],
// //     'rules': {
// //         'indent': [
// //             'error',
// //             4
// //         ],
// //         'linebreak-style': [
// //             'error',
// //             'windows'
// //         ],
// //         'quotes': [
// //             'error',
// //             'single'
// //         ],
// //         'semi': [
// //             'error',
// //             'never'
// //         ]
// //     }
// // }


// //updated models

module.exports = {
    env: {
      commonjs: true,
      node: true,
      browser: true,
      es6: true,
      jest: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    globals: {},
    parser: "babel-eslint",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2023,
      sourceType: "module",
    },
    plugins: ["react", "import", "react-hooks"],
    ignorePatterns: ["node_modules/"],
    
    settings: {
      react: {
        version: "latest", // "detect" automatically picks the version you have installed.
      },
    },
    rules: {
        "react/prop-types": "off"
      }
  };



