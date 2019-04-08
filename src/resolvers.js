const { books } = require('./fixture')
const {
  transformOpportunity,
  transformBackgroundSkills,
} = require('./transform')

module.exports = {
  Query: {
    Opportunity: async (obj, args, { dataSources }, info) => {
      const response = await dataSources.opportunityAPI.getOpportunity()
      const transformedData = transformOpportunity(response)
      return transformedData
    },
    skills: async (obj, args, { dataSources }, info) => {
      const response = await dataSources.opportunityAPI.getSkills()
      const transformedData = transformBackgroundSkills(response)
      return transformedData
    },
    backgrounds: async (obj, args, { dataSources }, info) => {
      const response = await dataSources.opportunityAPI.getBackgrounds()
      const transformedData = transformBackgroundSkills(response)
      return transformedData
    },
  },
  Mutation: {
    UpdateOpportunity: async (obj, args, { dataSources }, info) => {
      const body = args.input
      const response = await dataSources.opportunityAPI.updateMutation(body)
      const transformedData = transformOpportunity(response)
      console.log('Success response', response.status)
      return transformedData
    },
  },
}
