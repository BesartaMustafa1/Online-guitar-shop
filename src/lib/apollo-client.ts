import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://YOUR-GQL-ENDPOINT/graphql',
  }),
  cache: new InMemoryCache(),
});
