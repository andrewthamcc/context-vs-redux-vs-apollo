import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./ApolloClient";
import { Provider } from "react-redux";
import store from "./redux";

// material-ui
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// components
import Apollo from "./components/Apollo";
import Redux from "./components/Redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h3" align="center" gutterBottom>
              Redux vs Apollo
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Redux />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Apollo />
              </Grid>
            </Grid>
          </Container>
        </ApolloProvider>
      </Provider>
    </div>
  );
}

export default App;
