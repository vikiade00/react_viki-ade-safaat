import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://safe-eft-41.hasura.app/v1/graphql",
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    "x-hasura-admin-secret": "itbi9cmVgwYpcShzjlxhPHVj1CF8lYLAMFOLfivB4oBZwV6BcuDDzfWdR2YYEyZz",
  },
});
