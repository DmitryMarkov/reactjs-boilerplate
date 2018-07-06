# ReactJS Boilerplate
### ReactJS Boilerplate with Webpack 4
### Installation

##### 1. Main App (In project directory)
```npm i``` or ```yarn```
##### 2. ESLint (Install as global)
```npm i -g eslint``` or ```yarn global add eslint```
##### 3. Stylelint (Install as global)
```npm i -g stylelint``` or ```yarn global add stylelint```

### How to use it

##### 1a. Start WebpackHotMiddleware Server (dev)
* ```npm start``` or ```yarn start```
* ```npm start:analyze``` or ```yarn start:analyze```

##### 1b. Start WebpackHotMiddleware Server (dev) on different port
* ```npm start {PORT}``` or ```yarn start {PORT}```

##### 1c. Start WebpackHotMiddleware Server (dev) in DEBUG mode (morgan)
* ```DEBUG=1 npm start``` or ```DEBUG=1 yarn start```
* ```npm start 3000 1``` or ```yarn start 3000 1```

##### 2. Start WebpackDevServer with Hot Reload (dev)
* ```npm run start:dev``` or ```yarn start:dev```
* ```npm run start:dev:analyze``` or ```yarn start:dev:analyze```

##### 3a. Build project (dist directory)
* ```npm run build``` or ```yarn build```
* ```npm run build:analyze``` or ```yarn build:analyze```

##### 3b. Build UMD library (lib directory)
* ```npm run build:lib``` or ```yarn build:lib```
* ```npm run build:lib:analyze``` or ```yarn build:lib:analyze```

##### 3c. Bundle analyzer (JSON format)
* ```npm run analyze {file_name}``` or ```yarn analyze {file_name}```

##### 4. ESLint source code
* ```npm run lint``` or ```yarn lint```
> To fix simple ESLint errors
```npm run lint:fix``` or ```yarn lint:fix```

##### 5. Mocha test
* ```npm test``` or ```yarn test```

##### 6. Mocha watcher
* ```npm run test:watch``` or ```yarn test:watch```

##### 7. Test coverage
* ```npm run test:cover``` or ```yarn test:cover```

### Delpoy (production)

##### 1a. Start Express Production Server (build project first!)
* ```npm run server``` or ```yarn server```

##### 1b. Start Express Production Server on different port
* ```npm run server {PORT}``` or ```yarn server {PORT}```

##### 1c. Start Express Production Server in DEBUG mode (morgan)
* ```DEBUG=1 npm run server``` or ```DEBUG=1 yarn server```
* ```npm run server 3000 1``` or ```yarn server 3000 1```

##### 2. Settigs for Nginx (React Router v4 BrowserRouter settings)
Add the following code to **_/etc/nginx/yourconfig.conf_**
```bash
location / {
  if (!-e $request_filename){
    rewrite ^(.*)$ /index.html break;
  }
}
```
##### 3. Settings for Apache (React Router v4 BrowserRouter settings)
Add the following code to **_.htaccess_**
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```
