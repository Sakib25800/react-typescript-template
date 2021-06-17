<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
=======
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
>>>>>>> 8e671b42935e2f999994967426778016ff93aaf2
