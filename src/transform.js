const getNameId = nationality => {
  const { id, name } = nationality
  return {
    id,
    name,
  }
}

const getLogisticsInfo = logistics => {
  const {
    food_covered,
    food_weekends,
    accommodation_covered,
    accommodation_provided,
  } = logistics
  return {
    foodCovered: food_covered,
    foodProvided: food_weekends,
    accommodationCovered: accommodation_covered,
    accommodationProvided: accommodation_provided,
  }
}

const getLegalInfo = legalInfo => {
  const {
    visa_link,
    visa_type,
    visa_duration,
    health_insurance_info,
  } = legalInfo
  return {
    visaLink: visa_link,
    visaType: visa_type,
    visaDuration: visa_duration,
    healthInsuranceInfo: health_insurance_info,
  }
}

const getActivities = (activity, index) => {
  return {
    id: index,
    name: activity,
  }
}

const getRoleInfo = roleInfo => {
  return {
    city: roleInfo.city,
    activities: roleInfo.learning_points_list.map(getActivities),
    selectionProcess: roleInfo.selection_process,
  }
}

const getSpecificsInfo = specificsInfo => {
  const { salary, computer, expected_work_schedule } = specificsInfo
  return {
    salary,
    computer,
    workSchedule: expected_work_schedule,
  }
}

const getSdgInfo = sdgInfo => {
  const { sdg_target } = sdgInfo
  const {
    id,
    target,
    parent_id,
    description,
    goal_id,
    goal_index,
    target_index,
  } = sdg_target
  return {
    id: sdgInfo.id,
    sdgTarget: {
      id,
      target,
      parentId: parent_id,
      description,
      goalId: goal_id,
      goalIndex: goal_index,
      targetIndex: target_index,
    },
  }
}

const getHostlcInfo = hostlcInfo => {
  const { id, name, full_name, parent_id, country } = hostlcInfo
  return {
    id,
    name,
    fullName: full_name,
    parentId: parent_id,
    country,
  }
}

const transformOpportunity = response => {
  console.log('aravind', JSON.stringify(response))

  const {
    id,
    title,
    location,
    description,
    duration,
    available_openings,
    earliest_start_date,
    latest_end_date,
    applications_close_date,
    nationalities,
    skills,
    backgrounds,
    languages,
    logistics_info,
    legal_info,
    role_info,
    specifics_info,
    sdg_info,
    host_lc,
  } = response
  const transformed = {
    id,
    title,
    location,
    description,
    duration,
    positions: available_openings,
    earliestStartDate: earliest_start_date,
    latestEndDate: latest_end_date,
    applicationsCloseDate: applications_close_date,
    nationalities: nationalities.map(getNameId),
    skills: skills.map(getNameId),
    backgrounds: backgrounds.map(getNameId),
    languages: languages.map(getNameId),
    logistics_info: getLogisticsInfo(logistics_info),
    legal_info: getLegalInfo(legal_info),
    role_info: getRoleInfo(role_info),
    specifics_info: getSpecificsInfo(specifics_info),
    sdg_info: getSdgInfo(sdg_info),
    host_lc: getHostlcInfo(host_lc),
  }
  return transformed
}

const getBackgroundSkillsData = data => {
  const { id, name, matching_with_opportunity } = data
  return {
    id,
    name,
    matchingOpportunity: matching_with_opportunity,
  }
}
const transformBackgroundSkills = response => {
  return response.map(getBackgroundSkillsData)
}

module.exports = {
  transformOpportunity,
  transformBackgroundSkills,
}
