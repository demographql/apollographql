const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const OpportunityAPI = require('./datasources/opportunity')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    opportunityAPI: new OpportunityAPI(),
  }),
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
