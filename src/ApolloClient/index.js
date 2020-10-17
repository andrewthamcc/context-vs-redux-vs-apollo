import ApolloClient, {InMemoryCache} from "apollo-boost"
import initialState from "../GraphQL/initialState"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  resolvers: {
    Mutation: {}
  }
})

client.writeData({data: {...initialState}})

export default client;