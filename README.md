# BioStock

## Backend Info:
The content for biostock is served through Strapi (headless CMS + API).  We use Strapi CMS to manage the stock photos. 


## Fonts:
Currently using typeface-signika.  Installed through npm.  Visit [https://www.npmjs.com/package/typeface-signika](https://www.npmjs.com/package/typeface-signika) for details.  Also to play with the font, checkout: [Google Fonts](https://fonts.google.com/specimen/Signika).

## GraphQL:
Using the following packages:
- *apollo-boost*: Package for setting up apollo client: a library that leverages the power of a GraphQL.
    - contains ApolloClient: establishes a connection to the GraphQL endpoint
- *react-apollo*: View layer integration for React
    - contains the ApolloProvider component that assists in attaching the instance of ApolloClient to the React app.
    - contains the Query component used to request data
    - contains the *Mutation* component: used to submit the Requests data to Strapi
- *graphql-tag*: Necessary package to help parse GraphQL queries
- *graphql*: Used to parse GraphQL queries

## Email:
Strapi provides us with an email endpoint.  We send a POST to /email.  The post contains the following object:
```
{ to: 'user@ubc.ca',
  subject: 'Strapi Email',
  text: 'hello world' }
```

## React Router:
The App Component is set inside a route, so we are able to access the component props necessary to complete our custom routing.

- Modal Routes: the modal routes are designed to push a modal to screen when our route is coming from the gallery, when users visit the image alone via url, an image page is rendered instead of the gallery
    - If the modal check comes back false, the ImageSoloPage component is rendered
    - The modal component has onClose() function that uses the history prop from React Router to go back to the gallery when closed

## React Hooks:
Custom hook is used for handling form inputs, the return obj provides the value and an event handler.  This can then be associated to each field, which then can be used as the state for the request submission.

This is being used in the Requests page, a custom hook is created which returns the value (state) and an onChange function.  This is then placed into a Material UI component using the spread operator

```
<TextField
    variant="outlined"
    multiline
    margin="normal"
    rows="4"
    required
    fullWidth
    label="Description"
    {...description}
/> 
```


### React.useEffect : used to make side effects: invoked on the initial render & all subsequent re-renders.  
We use useEffect for our Search feature, after setting the state for our search feature, the state needs to be reset, but we already are redirected to a new page.  We use useState to set the state initially once the menu bar is rendered

## Axios:
Axios is a promise based HTTP client for the browser and node.js
We use axios primarily for our email system: when sending a request, an email request needs to be posted and sent to our admins so they are notified of the request.

## Material UI:
The App is mobile friendly.  We are using Material UI Hook API to implement ```makeStyle``` 

The styles package also includes breakpoints which allow the use of the inline styles to hide and show certain display components based on the app size.  Breakpoints is currently being used on the web application menu:
```[theme.brekpoints.up('sm')]:```
```[theme.brekpoints.down('sm')]:```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


