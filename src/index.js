import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import App from './App'
import theme from './theme'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <ApolloProvider client={client}>
      <CssBaseline />
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  document.querySelector('#root'),
);
