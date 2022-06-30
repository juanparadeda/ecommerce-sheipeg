# eCommerce project: Sheipeg Photography Store

This is a project for the React.js training I'm taking in Coderhouse : https://www.coderhouse.com/
The purpose of the training is to apply the previously acquired knowledge of HTML, CSS, SASS, Vanilla JS, plus the concepts learned in this React.js training, to build the Front End of an eCommerce store. 

This project emulates a photography store. The home page shows the entire catalog stored in Firebase. Clicking on the filter button, allows you to filter by brand, or mount type.  Keep in mind that, although all photography lenses have one mount type, many cameras (particularly APS-C sensor cameras) are compatible with 2 mount types. Also, there are lenses manufacturers who produce lenses for the main camera brands. So you have Sigma and Lensbaby lenses which may be compatible with Nikon or Canon mount types.

When you navigate to a category page, you'll only see products from that category. The category pages have the filters available which will apply with an AND logical operator on top of the category filter. The page `/accesorios` is the only page in which the filter button is not available. Camera accesories have a ton of classifications and at this time doing that was an effort beyond scope.

You can navigate to specific products and see a big image of the product, the add to cart small box, a description, and a compatible products section at the bottom. This compatible products section works for cameras and lenses. Lenses would show cameras which support the mount type of the lens. Cameras would show lenses which have one of the supported mount types of the camera.

You can add products to cart. If a product has 6 items in stock. You can add all 6 to the cart. But the stock will not be updated at this point. However, the function will prevent you from adding more of those to the cart.

Once you're ready for checkout, you can browse to the cart page clicking in the cart icon or in the button after adding the product to cart. You can remove products from cart, empty the cart, or proceed with emulated payment. 

Once you emulate payment, provide your data, your data passes basic validation, and you submit your order, then the stock will be updated for the products in Firebase. If a product runs out of stock, then the add to cart button will be disabled.

After you confirmed your order, the page will take you to the `/ordenes` page which will show you ALL submitted orders in Firebase. Of course in a real project this would have to be filtered so you can only see orders belonging to your user, but having users authenticated is also out of scope here



A .gif file was included, showing the overall site experience. It is at the home directory of this project: `/ecommerce-sheipeg.gif`

![GIF ANIMATION](/ecommerce-sheipeg.gif)





## Required dependancies to be installed

You will need node.js installed locally to be able to install further dependancies. You can download node.js for your OS from this website: https://nodejs.org/en/

Then you will need to create a react app by running `npx create-react-app your-directory`. your-directory is the directory (or folder, if you speak Windows, lol) where your react app will run

To get your app to run locally and get a preview of the app in your browser, first place yourself in your app directory `cd your-directory` and then run `npm start`

After a while, a browser window should open up, on the url `http://localhost:3000`, showing the react logo rotating smoothly. For network access to your local app, other hosts in the network might browse to `http://192.168.0.137:3000`

This project uses react-router-dom for link routing. You need to install this dependancy by typing `npm install react-router-dom`

This project uses Material UI component library. To install this library, type `npm install @mui/material @emotion/react @emotion/styled`. You will also need one additional package.json dependancy for the icons: `npm install @mui/icons-material`.

This project uses react-hook-form for data input validation. To install this dependancy with npm: `npm install react-hook-form`.

This project uses swiper.js for the carousel banner. To install this dependancy with npm: `npm install swiper`.


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
