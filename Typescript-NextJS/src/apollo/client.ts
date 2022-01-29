// // TODO create rule for eslint naming-convention
// /* eslint-disable @typescript-eslint/naming-convention */

// import { useMemo } from 'react';

// import {
//   ApolloClient,
//   InMemoryCache,
//   createHttpLink,
//   NormalizedCacheObject,
//   DefaultOptions,
// } from '@apollo/client';

// const defaultOptions: DefaultOptions = {
//   watchQuery: {
//     fetchPolicy: 'no-cache',
//     errorPolicy: 'ignore',
//   },
//   query: {
//     fetchPolicy: 'no-cache',
//     errorPolicy: 'all',
//   },
// };

// const cache = new InMemoryCache({
//   resultCaching: false,
// });

// let apolloClient: ApolloClient<NormalizedCacheObject>;

// function createIsomorphLink() {
//   return createHttpLink({
//     uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
//     credentials: 'same-origin',
//   });
// }

// function createApolloClient() {
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined',
//     link: createIsomorphLink(),
//     cache,
//     defaultOptions,
//   });
// }

// export function initializeApollo(initialState = null) {
//   const _apolloClient = apolloClient ?? createApolloClient();

//   // If your page has Next.js data fetching methods that use Apollo Client, the initial state
//   // gets hydrated here
//   if (initialState) {
//     _apolloClient.cache.restore(initialState);
//   }
//   // For SSG and SSR always create a new Apollo Client
//   if (typeof window === 'undefined') return _apolloClient;
//   // Create the Apollo Client once in the client
//   if (!apolloClient) apolloClient = _apolloClient;

//   return _apolloClient;
// }

// export function useApollo(initialState: null | undefined) {
//   const store = useMemo(() => initializeApollo(initialState), [initialState]);
//   return store;
// }

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  DefaultOptions,
} from '@apollo/client';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const cache = new InMemoryCache({
  resultCaching: false,
});

/**
 * The credentials: 'include' allows cookies to be automatically sent
 * along with the request 'include' because backend is on another domain.
 *
 * @see https://www.apollographql.com/docs/react/networking/authentication/#cookie
 */
const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
});

const client = new ApolloClient({
  connectToDevTools: true,
  link,
  cache,
  defaultOptions,
});

export default client;
