# react-typescript-template
This is a template project for a React-Typescript based project with eslint and prettier. 

## Template structure 
📦react-typescript-template
<br /> 
┣ 📦src
<br /> 
  ┣ 📂pages
  <br /> 
  ┃ ┣ 📜index.js
  <br />
  ┃ ┗ 📜HomePage.js
  <br /> 
  ┣ 📂components
  <br />
  ┃ ┣ 📂common
  <br />
  ┃ ┃ ┣ 📜button.js
  <br />
  ┃ ┃ ┗ 📜index.js
  <br />
  ┃ ┃ ┗ 📂Navbar
  <br />
  ┃ ┃ ┃ ┣📜List.js
  <br />
  ┃ ┃ ┃ ┣📜Items.js
  <br />
  ┃ ┃ ┃ ┗📜index.js
  <br />
  ┃ ┗ 📜index.js
  <br />
  ┣ 📂containers
  <br />
  ┃ ┣ 📜index.js
  <br />
  ┃ ┗ 📜navbar.js
  <br />
  ┃ ┗📂interfaces
  <br />
  ┃  ┃ ┗📜user.ts
  <br />
  ┣ 📂fixtures
  <br />
  ┃ ┗ 📜data.json
  <br />
  ┣ 📂lib
  <br />
  ┃ ┗ 📜users.js
  <br />
  ┣ 📂hooks
  <br />
  ┣ ┗📜useForm.js
  <br />
  ┣ 📂context
  <br />
  ┣ ┗📜AuthContext.js
  <br />
  ┣ 📂utils
  <br />
  ┣ ┣📜sortNums.js
  <br />
  ┣ ┗📜index.js
  <br />
  ┣ 📂styles
  <br />
  ┣ ┗📜global.css
  <br />
  ┣ 📜App.tsx
  <br />
  ┣ 📜index.tsx
  <br />
  ┣ 📜react-app-env.d.ts
  <br />
 ┣ 📜tsconfig.json
 <br />
 ┣ 📜.gitignore
 <br />
 ┣ 📜.prettierignore
 <br />
 ┣ 📜.prettierrc
 <br />
 ┣ 📜.eslintrc
 <br />
 ┣ 📜.env 
 <br />
 ┣ 📜README.md
 <br />
 ┣ 📜package.json
 <br />
 ┣ 📜package-lock.json
 <br />
## General rules 
* If a utility function is a one time function it must be kept in the component file. <br />
* All folders should contain an index.ts which should export all the relevant files. <br />
* Do not use ```export default``` [(reason)](https://basarat.gitbook.io/typescript/main-1/defaultisbad)
### Pages 
This folder contains the combination of multiple components and is the actual component displayed on the page, it is also a stateful component.
### Components 
This folder contains multiple folders of each component and their multiple parts that return jsx.
Recommended to be stateless.
* #### /common
&nbsp;&nbsp;&nbsp;Contains components that are used by other components.
### Containers
Like pages, it is also combination of multiple components and is the actual component displayed, it is also a stateful component. <br />
Should only be used for complex pages made from many stateful components.
### Interfaces 
Contains all the interfaces the programs uses
### Fixtures
Contains data that never changes
### Lib
Contains all api calls
### Hooks 
Contains all hooks
### Context
Contains all useContext
### Utils
Contains useful functions used by many components
### Styles
Contains css files


