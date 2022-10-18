/**
 * This array of objects contains values, names and validation functions as well as the error messages
 * for the fields.
 *
 */

export const educationDetail = props => {
  return [
    {
      name: 'educationLevel',
      required: true,
      value: props.type,
      validation: function (e) {
        return true
      },
      message: '',
      messageShow: false,
    },
    {
      name: 'institutionName',
      required: true,
      value: '',
      validation: function (e) {
        return e.target.value.length > 0
      },
      message: 'Please enter the institute name',
      messageShow: false,
    },
    {
      name: 'board',
      required: true,
      value: '',
      validation: function (e) {
        return e.target.value.length > 0
      },
      message: `Please enter the correct information`,
      messageShow: false,
    },
    {
      name: 'startedOn',
      required: true,
      value: '',
      validation: function (e) {
        return e.target.value !== null
      },
      message: `Please enter the start date`,
      messageShow: false,
    },
    {
      name: 'endedOn',
      required: true,
      value: '',
      validation: function (e) {
        return e.target.value !== null
      },
      message: `Please enter the end date`,
      messageShow: false,
    },
    {
      name: 'cumulativeType',
      required: true,
      value: '',
      validation: function (e) {
        return e.target.value !== ''
      },
      message: `Please select type of marks`,
      messageShow: false,
    },
    {
      name: 'marks',
      required: true,
      value: '',
      validation: function (e) {
        return typeof e.target.value === Number
      },
      message: `Please enter marks`,
      messageShow: false,
    },
    {
      name: 'state',
      required: true,
      value: '',
      validation: function (e) {
        return e.target.value.length > 0
      },
      message: `Please enter state`,
      messageShow: false,
    },
    {
      name: 'city',
      required: true,
      value: '',
      validation: function (e) {
        return e.target.value.length > 0
      },
      message: `Please enter city`,
      messageShow: false,
    },
    {
      name: 'country',
      required: true,
      value: '',
      validation: function (e) {
        return e.target.value.length > 0
      },
      message: `Please enter country`,
      messageShow: false,
    },
    {
      name: 'tcUrl',
      required: true,
      value: '',
      validation: function (e) {
        return e.target.value.length > 0
      },
      message: `Please upload the migration certificate`,
      messageShow: false,
    },
    {
      name: 'markSheetUrl',
      required: true,
      value: '',
      validation: function (e) {
        return e.target.value.length > 0
      },
      message: `Please upload marksheet`,
      messageShow: false,
    },
  ]
}
