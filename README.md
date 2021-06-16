# react-typescript-template
This is a template project for a React-Typescript based project with eslint and prettier. 

### Features
* Linting with [eslint](https://eslint.org/)
* Code formatting with [prettier](https://prettier.io/)
* Testing with [jest](https://jestjs.io/) 
* Package management with [npm](https://www.npmjs.com/)
## Template structure 
📦react-typescript-template
<br /> 
┣ 📦src
<br /> 
  ┣ 📂pages
  <br /> 
  ┃ ┣ 📜index.ts
  <br />
  ┃ ┗ 📜HomePage.ts
  <br /> 
  ┣ 📂components
  <br />
  ┃ ┣ 📂common
  <br />
  ┃ ┃ ┣ 📜button.ts
  <br />
  ┃ ┃ ┗ 📜index.ts
  <br />
  ┃ ┃ ┗ 📂Navbar
  <br />
  ┃ ┃ ┃ ┣📜List.ts
  <br />
  ┃ ┃ ┃ ┣📜Items.ts
  <br />
  ┃ ┃ ┃ ┗📜index.ts
  <br />
  ┃ ┗ 📜index.ts
  <br />
  ┣ 📂layouts
  <br />
  ┃ ┣ 📜index.ts
  <br />
  ┃ ┗ 📜DashboardLayout.ts
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
  ┃ ┗ 📜users.ts
  <br />
  ┣ 📂hooks
  <br />
  ┣ ┗📜useForm.ts
  <br />
  ┣ 📂context
  <br />
  ┣ ┗📜AuthContext.ts
  <br />
  ┣ 📂utils
  <br />
  ┣ ┣📜sortNums.ts
  <br />
  ┣ ┗📜index.ts
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
### General rules 
* If a utility function is a one time function it must be kept in the component file. <br />
* All folders should contain an index.ts which should export all the relevant files. <br />
* Do not use ```export default``` [(reason)](https://basarat.gitbook.io/typescript/main-1/defaultisbad)
###   Pages 
This folder contains the combination of multiple components and is the actual component displayed on the page, it is also a stateful component.
### Components 
This folder contains multiple folders of each component and their multiple parts that return jsx.
Recommended to be stateless.
* ##### /common
&nbsp;&nbsp;&nbsp;Contains components that are used by other components.
### Layouts
Higher order components that contain templates for each page.
### Interfaces 
Contains interfaces used by many functions.
### Fixtures
Contains data that never changes and can also contain constants.
### Lib
Contains all api calls
### Hooks 
Contains all hooks.
### Context
Contains all useContext.
### Utils
Contains useful functions used by many components.
### Styles
Contains css files.
## React 
### Creating components
```javascript
import * as React from 'react';

export interface Props {
  firstName: string;
  lastName: number
}

interface State {
  text: string;
}

export function UserCard({name, lastName}: Props) {
  const [state, setState] = React.useState<State>({text: "state"});

  return (
    <div>
      <div>{state.text}</div>
      <div>{name}</div>
      <div>{lastName}</div>
    </div>
  )
}

function getUserData(firstName, lastName) {
  return firstname + '' + lastName;
}
```
Notice:
1. Both props and state have their own interface
2. The react component does not have an interface as it will be inferred
3. React function is not exported by default
4. The one time utility function is kept within the component using it  
### Creating context
```javascript
import * as React from 'react';

const AuthContext = React.useContext(null);

export interface Props {
  children: React.ReactNode;
}

export function AuthProvider({children}: Props) {
  const [auth, setAuth] = React.useState(null);
  
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useRoom = () => React.useContext(AuthContext)
```
Notice:
1. A HOC is created to wrap the provider around the children
2. A hook is created that is shorthand for useContext for easier use
