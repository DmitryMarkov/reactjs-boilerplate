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

##### 1. Start dev server with Hot Reload
```npm start``` or ```yarn start```

##### 2. Start hot middleware server
```npm run server``` or ```yarn start:midd```

##### 3. Build project (emit files to dist directory)
```npm run start:midd``` or ```yarn build```

##### 4. Analyze project (size of dependencies)
```npm run analyze``` or ```yarn analyze```

##### 5. ESLint source code
```npm run lint``` or ```yarn lint```
> To fix simple ESLint errors
```npm run lint:fix``` or ```yarn lint:fix```

##### 5. Mocha test (only .jsx files)
```npm test``` or ```yarn test```

### Deploy on Nginx (React Router v4 BrowserRouter settings)
Add the following code to **_/etc/nginx/yourconfig.conf_**
```bash
location / {
  if (!-e $request_filename){
    rewrite ^(.*)$ /index.html break;
  }
}
```
### Deploy on Apache (React Router v4 BrowserRouter settings)
Add the following code to **_.htaccess_**
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```
