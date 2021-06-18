# react-typescript-template

This is a template project for a React-Typescript based project with eslint and prettier.

# Features
* Linting with [eslint](https://eslint.org/)
* Code formatting with [prettier](https://prettier.io/)
* Testing with [jest](https://jestjs.io/) 
* Package management with [npm](https://www.npmjs.com/)
# Template structure 
<pre>
🌳 react-typescript-template
├── 📁 public
|  ├── 📄 favicon.ico
|  ├── 📄 index.html
|  ├── 🖼️ logo192.png
|  ├── 🖼️ logo512.png
|  ├── 📄 manifest.json
|  └── 📄 robots.txt
├── 📦 src
|  ├── 📄 App.tsx
|  ├── 📄 index.tsx
|  ├── 📄 react-app-env.d.ts
|  ├── 📁 components
|  |  ├── 📁 common
|  |  |  ├── 📄 index.ts
|  |  |  ├── 📄 Logo.tsx
|  |  ├── 📄 index.ts
|  |  └── 📄 UserCard.tsx
|  ├── 📁 context
|  |  └── 📄 example.tsx
|  ├── 📁 fixtures
|  |  └── 📄 data.ts
|  |  └── 📄 index.ts
|  ├── 📁 hooks
|  |  └── 📄 useForm.tsx
|  |  └── 📄 index.tsx
|  ├── 📁 interfaces
|  |  └── 📄 Examples.ts
|  |  └── 📄 index.ts
|  ├── 📁 layouts
|  |  └── 📄 LayoutExample.tsx
|  |  └── 📄 index.tsx
|  ├── 📁 lib
|  |  ├── 📄 index.ts
|  |  └── 📄 user.ts
|  ├── 📁 pages
|  |  ├── 📄 Home.tsx
|  |  └── 📄 index.ts
|  ├── 📁 styles
|  |  └── 📄 global.css
|  └── 📁 utils
|     ├── 📄 getUser.ts
|     └── 📄 index.ts
├── 📄 .env
├── 📄 .eslintrc
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 README.md
└── 📄 tsconfig.json
</pre>
### General rules 
* If a utility function is a one time function it must be kept in the component file. <br />
* All folders should contain an index.ts which should export all the relevant files. <br />
* Do not use ```export default``` [(reason)](https://basarat.gitbook.io/typescript/main-1/defaultisbad)
* All folders should have a index.ts to export all symbols
###   Pages 
This folder contains the combination of multiple components and is the actual component displayed on the page, it is also a stateful component.

### Components

This folder contains multiple folders of each component and their multiple parts that return jsx.
Recommended to be stateless.

- ##### /common
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
# React 
### Creating components

```javascript
import * as React from "react";

export interface Props {
  firstName: string;
  lastName: number;
}

interface State {
  text: string;
}

export function UserCard({ name, lastName }: Props) {
  const [state, setState] = React.useState < State > { text: "state" };

  return (
    <div>
      <div>{state.text}</div>
      <div>{name}</div>
      <div>{lastName}</div>
    </div>
  );
}

function getUserData(firstName, lastName) {
  return firstname + "" + lastName;
}
```

Notice:

1. Both props and state have their own interface
2. The react component does not have an interface as it will be inferred
3. React function is not exported by default
4. The one time utility function is kept within the component using it

### Creating context

```javascript
import * as React from "react";

const AuthContext = React.useContext(null);

export interface Props {
  children: React.ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = React.useState(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useContext = () => React.useContext(AuthContext)
```
# Snippets
### Create context 
```json 
{
    "Create new context": {
        "prefix": "rtctx",
        "body": [
            "import * as React from 'react';",
            "\nexport interface Props {\n\tchildren: React.ReactNode\n}",
            "\nconst $1Context = React.createContext({});",
            "\nexport function $1Provider({children}: Props) {",
            "\tconst [$2, set$3] = React.useState($4);\n",
            "\treturn (",
            "\t\t<$1Context.Provider value={{ $2, set$3 }}>",
            "\t\t\t{children}",
            "\t\t</$1Context.Provider>",
            "\t)",
            "}",
            "\nexport const use$1 = () => React.useContext($1Context);"
        ],
        "description": "Creates typescript context hook + provider wrapper"
    }
}
```
