const INITIAL_STATE = {
  admin: {},
  student: {},
  studentPersonalProfile: {},
  currentCourse: {},
  education: [],
  resume: {},
}

export const onboarding = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_STUDENT_DATA':
      let admin = state.admin
      let student = state.student
      let studentPersonalProfile = state.studentPersonalProfile
      let currentCourse = state.currentCourse
      let education = state.education
      let resume = state.resume
      let pay = action.payload
      student.uniRollNo = pay.uniRollNo
      student.startBatch = pay.startBatch
      student.endBatch = pay.endBatch
      student.middelName = pay.middelName
      student.passedOut = pay.passedOut
      student.instituteCampusId = pay.instituteCampusId
      admin = { ...pay.admin }
      studentPersonalProfile = { ...pay.studentPersonalProfile }
      currentCourse = { ...pay.currentCourse }
      education = [...pay.educationProfile]
      resume = { ...pay.resume }
      return {
        ...state,
        admin: admin,
        student: student,
        studentPersonalProfile: studentPersonalProfile,
        resume: resume,
        education: education,
        currentCourse: currentCourse,
      }
    default:
      return state
  }
}
