import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server';
import schemas from '../../src/features';

beforeAll(done => {
    const server = new ApolloServer({
        ...schemas,
    });
    const { query, mutate } = createTestClient(server);
    // noinspection JSUndefinedPropertyAssignment
    global.utils = {
        getMockFunction: mockData => {
            return (filter, limit, offset) =>
                mockData
                    .filter(datum => filter.every(({ field, value }) => datum[field] == value))
                    .slice(offset, offset + limit);
        },
        server,
        query,
        mutate,
    };
    done();
});
