module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module",
    "ecmaVersion": 7
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "quotes": [2, "single"], //单引号
    'indent': [ 'error', 2 ],
    "no-console": 0, //不禁用console
    "no-var": 0, //对var警告
    "semi": 0, //不强制使用分号
    "no-irregular-whitespace": 0, //不规则的空白不允许
    "no-trailing-spaces": 1, //一行结束后面有空格就发出警告
    "camelcase": 0, //强制驼峰法命名
    "jsx-quotes": [2, "prefer-double"], //强制在JSX属性（jsx-quotes）中一致使用双引号
    "react/jsx-indent-props": [2, 2], //验证JSX中的props缩进
  },
  "settings": {
    "import/ignore": [
      "node_modules"
    ]
  }
};