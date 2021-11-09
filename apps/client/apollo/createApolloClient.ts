import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

export function createApolloClient() {
  const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_API_SERVER });

  /*const authLink = setContext(async () => {
    const { token } = await getToken();

    return {
      headers: {
        'x-platform': platform,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });*/

  /*const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (!graphQLErrors) {
      return forward(operation);
    }

    const hasAuthError = graphQLErrors.some(
      (error) => error.extensions.code === 'UNAUTHENTICATED'
    );

    if (!hasAuthError) {
      return;
    }

    return fromPromise(
      refreshToken().then((props) => {
        const { headers } = operation.getContext();
        operation.setContext({
          headers: {
            ...headers,
            authorization: props?.token ? `Bearer ${props?.token}` : '',
          },
        });

        return forward(operation);
      })
    ) as never;
  });*/

  const link = ApolloLink.from([httpLink]);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}
