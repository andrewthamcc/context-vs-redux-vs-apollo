import ApolloClient, { InMemoryCache } from "apollo-boost";
import initialState from "../GraphQL/initialState";
import TodoResolver from "../GraphQL/resolvers/todoResolver";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  resolvers: {
    Mutation: {
      ...TodoResolver,
    },
  },
});

client.writeData({ data: { ...initialState } });

export default client;
