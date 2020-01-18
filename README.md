### learning-javascript-3-edition
 
 ### 프로젝트 생성하기
 
 1. package.json 파일이 생성하기
 
     `yarn init -y`
 
 2. src 디렉터리 생성
 
     `mkdir ./src`
 
 ### Parcel Bundler Tool 설치
 
 머신에 처음 설치 하는 경우 글로벌 설치 후 프로젝트에도 설치함
 
 1. 먼저 머신에 글로벌로 설치 한다.
 
     yarn global add parcel-bundler
 
 2. 프로젝트 루트에서도 설치 해준다. 이때 개발 디펜던시로 설치
 
     `yarn add parcel-bundler -D`
 
 ### 코드 트랜스 컴파일러 설치 - Babel
 
 1. 바벨-코어 및 바벨 ES6 프리셋 설치
 
     `yarn add babel-core babel-preset-es2015 -D`
 
 2. 바벨 설정 파일 생성 및 Parcel 에 preset 적용
 
     .babelrc 생성후 

     `{ "presets": ["es2015"] }`
 
 ### ESLint 설치 및 적용
 
 1. 머신에 ESlint 설치하기
 
     `$ yarn global add eslint`
 
 2. 프로젝트에 ESLint 적용하기
 
     `$ eslint init`
 
 *질문으로 설정하거나 .eslintrc.js 파일을 직접 만들면 된다.
 
 ? How would you like to use ESLint?
 To check syntax, find problems, and enforce code style 선택
 
 ? What type of modules does your project use?
 => JavaScript modules (import/export) 선택
 
 ? Which framework does your project use?
 => None of these 선택
 
 ? Does your project use TypeScript?
 => No 선택
 
 Where does your code run?
 => Node 선택
 
 ? How would you like to define a style for your project?
 => Use a popular style guide
 
 ? Which style guide do you want to follow?
 =>Standard: [https://github.com/standard/standard](https://github.com/standard/standard)
 
 ? What format do you want your config file to be in?
 => JavaScript 선택
 `
 
     module.exports = { 
     	env: { browser: true, es6: true }, 
     	extends: [ 'standard' ], 
     	globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' }, 
     	parserOptions: { ecmaVersion: 2018, sourceType: 'module' }, 
     	rules: { 
     		// [첫번째 요소는 숫자: 0:규칙무시, 1: 실수, 2:에러, ] 
     		// 스텐다드의 콤마 댕글은 붙이지 않는거이나 무시함 
     		"comma-dangle": [0], 
     		// 인덴트 탭간격 2로 변경하여 2만큼이 아닐경우 에러로 간주함 
     		"indent": [2, 2],
     		 // 스탠다드 규칙의 세미 콜론은 붙이지 않는 것이나 무시함 
     		"semi": [0] 
     		} 
    
     	
     };
 `
 
 3-3. 에디터)에 ESlint 적용
  
  Lanugages/Frameworks/Javascript/Code Quailty Tools/ESLint 

