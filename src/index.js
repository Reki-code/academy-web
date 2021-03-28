import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import App from './App'
import theme from './theme'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={1500}
      >
        <Router>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <App />
        </Router>
      </SnackbarProvider>
    </ApolloProvider>
  </ThemeProvider>,
  document.querySelector('#root'),
);
