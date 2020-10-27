import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const todosVar = makeVar([])

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read() {
            return todosVar()
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  cache,
  connectToDevTools: true,
});

export default client;
