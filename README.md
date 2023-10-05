# Generación de Funcionalidades PWA en aplicación existente
¿ Que pasos hace falta para convertir esta app en una progressive Web App?
1. Package.json -> Instalar todas las dependencias de Workbox
"workbox-background-sync": "^6.6.0",
"workbox-broadcast-update": "^6.6.0",
"workbox-cacheable-response": "^6.6.0",
"workbox-core": "^6.6.0",
"workbox-expiration": "^6.6.0",
"workbox-google-analytics": "^6.6.0",
"workbox-navigation-preload": "^6.6.0",
"workbox-precaching": "^6.6.0",
"workbox-range-requests": "^6.6.0",
"workbox-routing": "^6.6.0",
"workbox-strategies": "^6.6.0",
"workbox-streams": "^6.6.0"
   -> npm install (si y solo si, se ha clonado)
   -> npm run build

2. Crear los archivos relacionados con el service worker (service-worker.js + serviceWorkerRegistration.js)
   -> Copiar las carpetas desde otro proyecto y pegarlas en .../src/
   -> npm install -g serve (solo la primera vez)
   -> serve -s build -l 5000 (-l 5000 corre en pto 5000 )
   ó
   -> npm run server-prod

3. Referenciar el serviceWorker desde index.js
   -> import * as serviceWorkerRegistration from './serviceWorkerRegistration';
   ...
   ...
   ...
   -> serviceWorkerRegistration.register();

 





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
