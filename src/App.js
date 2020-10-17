import React from "react";
import TodoContext from "./Context/TodoContext";
import { Provider } from "react-redux";
import store from "./redux";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./ApolloClient";

// material-ui
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// components
import Context from "./components/Context";
import Redux from "./components/Redux";
import Apollo from "./components/Apollo";

function App() {
  return (
    <div className="App">
      <Container
        maxWidth="xl"
        style={{ paddingTop: "24px", paddingBottom: "24px" }}
      >
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          Context vs Redux vs Apollo
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <TodoContext>
              <Context />
            </TodoContext>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Provider store={store}>
              <Redux />
            </Provider>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <ApolloProvider client={client}>
              <Apollo />
            </ApolloProvider>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
