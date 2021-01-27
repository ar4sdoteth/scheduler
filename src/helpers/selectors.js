function getAppointmentsForDay(state, day) {

  const filteredAppointments = state.days.filter(curDay => curDay.name === day)
  
  if (filteredAppointments.length === 0) {
    return filteredAppointments
  }
  
  return filteredAppointments[0].appointments.map((appointment) => {
    return state.appointments[appointment]
  })
}

const getInterview = function(state, interview) {
  if(!interview) {
    return null;
  }
  const interviewerId = interview.interviewer
  for (let interviewInfo in state.interviewers) {
    if(state.interviewers[interviewInfo].id === interviewerId) {
      return {
        student: interview.student,
        interviewer: state.interviewers[interviewInfo]
      }
    }
  }
}

const getInterviewersForDay = function(state, day) {

  // console.log(`state.interviewers`, state.interviewers)
  // console.log(`state.days`, state.days)
  const filteredDay = state.days.filter(curDay => curDay.name === day)
  
  if (filteredDay.length === 0) {
    return filteredDay
  }
  // console.log(`filteredDay`, filteredDay)
  return filteredDay[0].interviewers.map((interviewer) => {
    return state.interviewers[interviewer]
  })
}

export { getAppointmentsForDay, getInterview, getInterviewersForDay };