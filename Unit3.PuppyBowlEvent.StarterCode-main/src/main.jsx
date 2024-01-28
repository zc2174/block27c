// Import the React and ReactDOM libraries
// React is for defining components and ReactDOM is for rendering them in the DOM
import React from 'react'
import ReactDOM from 'react-dom'


// Import the main App component
import App from './App.jsx'

// Import the CSS file
import './index.css'


// Import the Redux store
// The store is where you keep the app's state
import store from '../app'

// Import the Provider component from react-redux
// Provider makes the Redux store available to any nested components that need to access it
import { Provider} from 'react-redux'

// Call ReactDOM.render to render our App component in the DOM
// Wrap the App in a Provider to give it access to the Redux store
// Also, wrap it in React.StrictMode, which is a wrapper component that checks for potential problems in the app during development
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

);
