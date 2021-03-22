import {    
    ApolloClient,
    InMemoryCache
} from '@apollo/client';

console.log('asd')

const api = new ApolloClient({
    uri: "http://localhost:8050",
    cache: new InMemoryCache()
});

export default api;