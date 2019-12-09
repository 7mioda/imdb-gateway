import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server-express';
import schemas from '../../src/domain';

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
