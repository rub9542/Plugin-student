import PageNotFound from 'routes/Components/PageNotFound'
import UserSignin from 'modules/Auth/Container/index'
import Students from 'modules/Students/Container/index'
import Roles from 'modules/Roles/Container/index'

//components for activation of student account
import PageOne from 'modules/Onboarding/ActivateAccount/PageOne/PageOne'
import PageTwo from 'modules/Onboarding/ActivateAccount/PageTwo/PageTwo'
import PageThree from 'modules/Onboarding/ActivateAccount/PageThree/PageThree'
import PageFour from 'modules/Onboarding/ActivateAccount/PageFour/PageFour'
import FinalPage from 'modules/Onboarding/ActivateAccount/FinalPage/FinalPage'

//components for not interested pages
import PageOneNI from 'modules/Onboarding/NotInterested/PageOne/PageOneNI'
import FinalPageNI from 'modules/Onboarding/NotInterested/FinalPage/FinalPageNI'

//Register pages
import PersonalInfo from 'modules/Onboarding/Register/PersonalInfo'
import Education from 'modules/Onboarding/Register/Education'
import ProjectInternship from 'modules/Onboarding/Register/ProjectInternship'
import WorkExperience from 'modules/Onboarding/Register/WorkExperience'
import CourseTraining from 'modules/Onboarding/Register/CourseTraining/'
import ProofDocuments from 'modules/Onboarding/Register/ProofDocuments'
import AdditionalDetails from 'modules/Onboarding/Register/AdditionalDetails'

export const anonymous = [
  {
    routePath: '/signin',
    Component: UserSignin,
  },
]

export const authenticated = [
  {
    routePath: '/students',
    Component: Students,
  },
  {
    routePath: '/roles',
    Component: Roles,
  },
  {
    routePath: '*',
    Component: PageNotFound,
  },
]
export const onboard=[
  {
    routePath: '/onboarding/activate/:studentId',
    Component: PageOne,
  },
  {
    routePath: '/onboarding/checkotp',
    Component: PageTwo,
  },
  {
    routePath: '/onboarding/otpverified',
    Component: PageThree,
  },
  {
    routePath: '/onboarding/setpwd',
    Component: PageFour,
  },
  {
    routePath: '/onboarding/final',
    Component: FinalPage,
  },
  {
    routePath: '/not-interested/1/:studentId',
    Component: PageOneNI,
  },
  {
    routePath: '/not-interested/2',
    Component: FinalPageNI,
  },
  {
    routePath: '/onboarding/register/personal-info',
    Component: PersonalInfo,
  },
  {
    routePath: '/onboarding/register/education',
    Component: Education,
  },
  {
    routePath: '/onboarding/register/project-internship',
    Component: ProjectInternship,
  },
  {
    routePath: '/onboarding/register/work-experience',
    Component: WorkExperience,
  },
  {
    routePath: '/onboarding/register/course-training',
    Component: CourseTraining,
  },
  {
    routePath: '/onboarding/register/proof-documents',
    Component: ProofDocuments,
  },
  {
    routePath: '/onboarding/register/additional-details',
    Component: AdditionalDetails,
  },
] 