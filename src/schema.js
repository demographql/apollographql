const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    Opportunity: Opportunity
    skills: [BackgroundsSkillsList]
    backgrounds: [BackgroundsSkillsList]
  }

  input RoleInfoDetails {
    city: String
    selection_process: String
  }

  input SpecificsInfoDetails {
    salary: String
  }

  input BackgroundSkillList {
    option: String
    level: Int
    id: Int
    name: String
  }

  input UpdateOpportunityRequest {
    title: String
    description: String
    role_info: RoleInfoDetails
    specifics_info: SpecificsInfoDetails
    backgrounds: [BackgroundSkillList]
    skills: [BackgroundSkillList]
  }

  input UpdateOpportunityDetails {
    opportunity: UpdateOpportunityRequest
  }
  type Mutation {
    UpdateOpportunity(input: UpdateOpportunityDetails!): updateResponse
  }

  type updateResponse {
    id: Int
    title: String
    location: String
    description: String
    duration: Int
    positions: Int
    earliestStartDate: String
    latestEndDate: String
    applicationsCloseDate: String
    nationalities: [OpportunityValue]
    skills: [OpportunityValue]
    backgrounds: [OpportunityValue]
    languages: [OpportunityValue]
    logistics_info: Logistics
    legal_info: LegalData
    role_info: RoleInfo
    specifics_info: SpecificsInfo
    sdg_info: SdgInfo
    host_lc: HostLc
  }
  type Opportunity {
    id: Int
    title: String
    location: String
    description: String
    duration: Int
    positions: Int
    earliestStartDate: String
    latestEndDate: String
    applicationsCloseDate: String
    nationalities: [OpportunityValue]
    skills: [OpportunityValue]
    backgrounds: [OpportunityValue]
    languages: [OpportunityValue]
    logistics_info: Logistics
    legal_info: LegalData
    role_info: RoleInfo
    specifics_info: SpecificsInfo
    sdg_info: SdgInfo
    host_lc: HostLc
  }
  type OpportunityValue {
    id: Int
    name: String
  }
  type Logistics {
    foodCovered: String
    foodProvided: String
    accommodationCovered: String
    accommodationProvided: String
  }
  type LegalData {
    visaLink: String
    visaType: String
    visaDuration: String
    healthInsuranceInfo: String
  }
  type RoleInfo {
    city: String
    activities: [OpportunityValue]
    selectionProcess: String
  }
  type SpecificsInfo {
    salary: String
    computer: String
    workSchedule: FromTodate
  }
  type FromTodate {
    from: String
    to: String
  }
  type SdgInfo {
    id: Int
    sdgTarget: SdgTarget
  }
  type SdgTarget {
    id: Int
    target: String
    parentId: Int
    description: String
    goalId: Int
    goalIndex: Int
    targetIndex: Int
  }
  type HostLc {
    id: Int
    name: String
    fullName: String
    parentId: Int
    country: String
  }

  type BackgroundsSkillsList {
    id: Int
    name: String
    matchingOpportunity: String
  }
`

module.exports = typeDefs
