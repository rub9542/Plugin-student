import rolesApi from '../../utils/studentApiServices'
import selectors from '../Auth//selectors'
import userApi from '../../utils/userApiServices'
import request from '../../utils/request'
export const setStudentData = payload => {
  return {
    type: 'SET_STUDENT_DATA',
    payload,
  }
}
export const getStudentData = studentId => async (dispatch, getState) => {
  //  dispatch(updateStudentData(1))

  try {
    const response = await rolesApi.get(`/${studentId}`)
    let info = response.data.data
    dispatch(setStudentData(info))
    console.log('student data fetched successfully')
  } catch (error) {
    console.log('Error in adding student', error)
  }
}
export const updateStudentData = () => async (dispatch, getState) => {
  const state = getState()

  const stdData = selectors.getData(state)

  try {
    await rolesApi.put(`/${stdData.admin.student_id}`, { ...stdData })
    console.log('student data updated successfully')
  } catch (error) {
    console.log('Error in publishing role', error)
  }
}
export const removeStudentData = () => async (dispatch, getState) => {
  const state = getState()
  const getData = selectors.getData(state)
  try {
    await rolesApi.delete(`/${getData.admin.student_id}`)
    dispatch(getStudentData(studentId))
    console.log('Student data deleted successfully')
  } catch (error) {
    console.log('Error in deleting role', error)
  }
}
export const getMetric = () => async (dispatch, getState) => {
  const state = getState()
  const getData = selectors.getData(state)

  try {
    const data = await rolesApi.get(`/${getData.admin.student_id}/metrics`)
    // let info=data?.data?.data
    console.log('Metric data fetched successfully')
  } catch (error) {
    console.log('Error in getting metric data', error)
  }
}
export const postStatus = () => async (dispatch, getState) => {
  const state = getState()
  const getData = selectors.getData(state)

  try {
    await rolesApi.post(`/${getData.admin.student_id}/status`, { status: -2 })
    console.log('Status posted successfully')
  } catch (error) {
    console.log('Error in duplicating role', error)
  }
}
export const postBackList = () => async (dispatch, getState) => {
  const state = getState()
  const getData = selectors.getData(state)

  try {
    await rolesApi.post(`/${getData.admin.student_id}/backlist`, {
      blacklistedStatus: true,
      currentCourse: {
        attendanceBacklisted: false,
        conductBacklisted: false,
        collegeFeeBacklisted: false,
      },
    })
    console.log('Status posted successfully')
  } catch (error) {
    console.log('Error in duplicating role', error)
  }
}
export const deleteBulk = studentId => async (dispatch, getState) => {
  const state = getState()
  try {
    await rolesApi.delete(`/deleteBulk`, {
      studentIds: [
        {
          studentId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        },
      ],
    })
    console.log('bulk students data deleted successfully')
  } catch (error) {
    console.log('Error in duplicating role', error)
  }
}
export const notInterested = () => async (dispatch, getState) => {
  const state = getState()
  const getData = selectors.getData(state)
  try {
    await rolesApi.post(`/${getData.admin.student_id}/notintrested`, {
      reason: 'goingForHigherStudies',
      description: 'sss',
    })
    console.log('no interest api integrated successfully')
  } catch (error) {
    console.log('Error in duplicating role', error)
  }
}

export const verifyOtp = otp => async (dispatch, getState) => {
  const state = getState()
  const getData =selectors.getData(state)
  console.log('in veriify actions', otp)
  try {
    await request.post(`/user/verifyotp/${getData.admin._id}/${otp}`)
    console.log('otp verified successfully')
  } catch (error) {
    console.log('Error in duplicating role', error)
  }
}
  export const sendOtp = () => async (dispatch, getState) => {
    const state = getState()
    const getData =selectors.getData(state)
    try {
        await request.post(`/user/sendotp/${getData.admin._id}`)
      console.log('otp requested successfully')        
      } catch(error){
      console.log('Error in duplicating role', error)
    }
  }

  export const resetPwd = (data) => async (dispatch, getState) => {
    const state = getState()

    // const stdData = selectors.getData(state)
    // console.log('std data', stdData)
   
    try {
      await request.put(`/user/resetpassword/`,{...data})
      console.log('password reset  successfully')

    } catch(error){
      console.log('Error in publishing role', error)
    }
  }
