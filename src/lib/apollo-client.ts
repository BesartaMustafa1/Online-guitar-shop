import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://graphql-api-brown.vercel.app/api/graphql',
  }),
  cache: new InMemoryCache(),
});
