# eslint-plugin-taco

Rules I wanted but couldn&#39;t find elsewhere

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-taco`:

```
$ npm install eslint-plugin-taco --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-taco` globally.

## Usage

Add `taco` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "taco"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "taco/multi-var-declaration-newline": 2
    }
}
```

## Supported Rules

* Require newline between multiple variable declarations and declarators

*BAD*
```
const A_STRING = '[string]',
  ANOTHER_STRING = '[another-string]'
```

*GOOD*
```
const 
  A_STRING = '[string']',
  ANOTHER_STRING = '[another-string]'
```






