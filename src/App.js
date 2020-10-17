import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks"
import client from "./ApolloClient"
import { Provider } from "react-redux";
import store from "./redux";

// material-ui
import Container from "@material-ui/core/Container"

// components
import Apollo from "./components/Apollo"
import Redux from "./components/Redux"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Container maxWidth="md">
            <Apollo />
            <Redux />
          </Container>
        </ApolloProvider>
      </Provider>
    </div>
  );
}

export default App;
