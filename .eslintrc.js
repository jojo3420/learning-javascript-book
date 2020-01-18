module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    // [첫번째 요소는 숫자: 0:규칙무시, 1: 실수, 2:에러,  ]
    // 스텐다드의 콤마 댕글은 붙이지 않는거이나 무시함
    "comma-dangle": [0],
    // 인덴트 탭간격 2로 변경하여 2만큼이 아닐경우 에러로 간주함
    indent: [2, 2],
    // 스탠다드 규칙의 세미 콜론은 붙이지 않는 것이나 무시함
    semi: [0]
  }
};
