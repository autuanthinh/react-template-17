

###
**Integrate**

1. **Redux saga**

- redux
- react-redux
- redux-saga
- redux-injectors
- redux-devtools-extension
- history
- @reduxjs/toolkit
- @types/react-redux
- immutable
- reselect

2. **Redux Router**

- "react-router": "^5.2.1"
- "react-router-dom": "^5.3.0"
- "@types/react-router-dom": "^5.3.2"
- "connected-react-router": "^6.8.0"

3. **Stylesheet**

- "node-sass": "^6.0.1"

4. **Multi language**

- "shelljs": "^0.8.4"
- "plop": "^3.0.5"
- "@babel/node": "^7.16.5"
- "@babel/preset-env": "^7.16.5"
- "@babel/preset-react": "^7.16.5"
- "@types/react-intl": "^2.3.18"
- "intl": "^1.2.5"
- "react-intl": "^2.9.0"
- "babel-plugin-react-intl": "^8.2.25"

5. **Override webpack by craco**

- "@craco/craco": "^6.4.3"
- "craco-alias": "^3.0.1"
- "craco-swc": "^0.1.3"

**Configuration**

1.  **Scalable project**

> const AsyncHome = asyncComponent(() => import('../components/Home'));

3.  **_Genarate new language_**

> yarn generate

3.  **_Update all existed language_**

> yarn extract-intl

4.  **_Override webpack by craco_**

> reference config in craco.config.js

5.  **_Extra environment with env-cmd_**

> - "start:dev": "env-cmd -f env/.env.development.js npm run start"
> - "build:dev": "env-cmd -f env/.env.development.js npm run build"
> - Prefix env must be REACT_APP\_

**Build & Deploy**

1.  **Build**

> **_Environment production_**
> - `yarn build:prod`

2.  **Deploy**

> **_Environment dev_**
> - `yarn start:dev`

**Unit test**

> **_Normal test_**
> - `yarn test`

> **_Test coverage_**
> - `yarn test -- --coverage`
> - reference config in package.json

**Install nvm to manage version**

> **_Get list node remote version_**
> - `nvm ls-remote`

> **_Install node_**
> - `nvm install 16.14.2`

> **_Get list node installed version_**
> - `nvm ls-remote`

> **_Switch to other version_**
> - `nvm use 16.14.2` (current)
> - `nvm use 16.14.2 --default` (default)`
> - `nvm use --lts` (latest in list installed)`

**Note**

> Please install `yarn` to run command instead of `npm`
