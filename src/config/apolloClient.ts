import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://10.0.2.2:5200/graphql",
    fetch: (url, options) => {
        return fetch(url, options);
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
