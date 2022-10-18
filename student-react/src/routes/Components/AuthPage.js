import React, { useEffect } from 'react'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import Page from 'modules/Page/Container/index'
import { authenticated,onboard } from 'routes/config/user'
import Flex from 'components/Flex'
import styled from 'styled-components'
import PageOne from '../../modules/Onboarding/ActivateAccount/PageOne/PageOne'
const PageFlex = styled(Flex)`
  overflow: hidden;
`
const AuthPage = ({ isAuthenticated }) => {
  const navigate = useNavigate()
  const params= useParams()
  useEffect(() => {
    if(!Object.values(params)[0].includes('onboarding') && !Object.values(params)[0].includes('not-interested') && !isAuthenticated){
      navigate('/user/signin')
    }
    // if (!isAuthenticated) {
    //   navigate('/user/signin')
    // }
  }, [isAuthenticated])

  return (
    <PageFlex>
        
          <Page>
            <Routes>
            <Route
                    key={'/onboarding/activate/:studentId'}
                    path={'/onboarding/activate/:studentId'}
                    element={<PageOne />}
                  ></Route>
              {onboard.map(({ routePath, Component }) => {
                return (
                  <Route
                    key={routePath}
                    path={routePath}
                    element={<Component />}
                  ></Route>
                )
              })}
            </Routes>
          </Page>
        
      
      {isAuthenticated && (
        <>
          <Page>
            <Routes>
            {/* <Route
                    key={'/onboarding/activate/:studentId'}
                    path={'/onboarding/activate/:studentId'}
                    element={<PageOne />}
                  ></Route> */}
              {authenticated.map(({ routePath, Component }) => {
                return (
                  <Route
                    key={routePath}
                    path={routePath}
                    element={<Component />}
                  ></Route>
                )
              })}
            </Routes>
          </Page>
        </>
      )}
    </PageFlex>
  )
}

export default AuthPage
