# ReactJS Sandbox
### ReactJS Sandbox with webpack 3
### Installation

##### 1. Main App (In project directory)
```npm install``` or ```yarn install```
##### 2. ESLint (Install as global)
```npm install -g eslint``` or ```yarn global add eslint```
##### 3. Stylelint (Install as global)
```npm install -g stylelint``` or ```yarn global add stylelint```

### How to use it

##### 1. Start WebpackHotMiddleware Server (dev)
```npm run start``` or ```yarn start```

##### 2. Start WebpackDevServer with Hot Reload (dev)
```npm run start:dec``` or ```yarn start:dev```

##### 3. Build project (bundle files to dist directory)
```npm run build``` or ```yarn build```

##### 4. ESLint source code
```npm run lint``` or ```yarn lint```
> To fix simple ESLint errors
```npm run lint:fix``` or ```yarn lint:fix```

##### 5. Mocha test (only .jsx files)
```npm test``` or ```yarn test```

### Delpoy (production)

##### 1a. Start Express Production Server
```npm run server``` or ```yarn server```

##### 1b. Start Express Production Server in DEBUG mode (morgan)
```DEBUG=1 npm run server``` or ```DEBUG=1 yarn server```

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
