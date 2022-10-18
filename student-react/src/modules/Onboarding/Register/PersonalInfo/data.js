import React from 'react'

export const data = [
  {
    name: 'firstName',
    required: true,
    value: '',
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please enter first name',
    messageShow: false,
  },
  {
    name: 'lastName',
    required: true,
    value: '',
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please enter last name',
    messageShow: false,
  },
  {
    name: 'uniRollNo',
    required: true,
    value: 0,
    validation: function (e) {
      return e > 0
    },
    message: 'Please enter a proper roll no',
    messageShow: false,
  },
  {
    name: 'dob',
    required: true,
    value: new Date(),
    validation: function (e) {
      return true
    },
    message: 'Please provide Date of birth',
    messageShow: false,
  },
  {
    name: 'gender',
    required: true,
    value: 0,
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please select a Gender',
    messageShow: false,
  },
  {
    name: 'email',
    required: true,
    value: '',
    validation: function (e) {
      return e.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    },
    message: 'Please enter a valid email address',
    messageShow: false,
  },
  {
    name: 'secondaryEmail',
    required: true,
    value: '',
    validation: function (e) {
      return e.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    },
    message: 'Please enter a valid secondary email address',
    messageShow: false,
  },
  {
    name: 'contactNumber',
    required: true,
    value: '',
    validation: function (e) {
      return e.length === 10
    },
    message: 'Please provide contact number',
    messageShow: false,
  },
  {
    name: 'permAddrLine1',
    required: true,
    value: '',
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please enter the address',
    messageShow: false,
  },
  {
    name: 'permAddrLine2',
    required: true,
    value: '',
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please enter the address',
    messageShow: false,
  },
  {
    name: 'country',
    required: true,
    value: '',
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please select country',
    messageShow: false,
  },
  {
    name: 'permPostCode',
    required: true,
    value: 0,
    validation: function (e) {
      return e > 0
    },
    message: 'Please enter the correct pincode',
    messageShow: false,
  },
  {
    name: 'permCity',
    required: true,
    value: '',
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please enter your permanent city',
    messageShow: false,
  },
  {
    name: 'permState',
    required: true,
    value: '',
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please enter permanent state',
    messageShow: false,
  },
  {
    name: 'corrAddrLine1',
    required: true,
    value: '',
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please enter the address',
    messageShow: false,
  },
  {
    name: 'corrAddrLine2',
    required: true,
    value: '',
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please enter the address',
    messageShow: false,
  },
  {
    name: 'country',
    required: true,
    value: '',
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please enter your country',
    messageShow: false,
  },
  {
    name: 'corrPostCode',
    required: true,
    value: 0,
    validation: function (e) {
      return e > 0
    },
    message: 'Please enter the correct pincode',
    messageShow: false,
  },
  {
    name: 'corrCity',
    required: true,
    value: '',
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please enter your current city',
    messageShow: false,
  },
  {
    name: 'corrState',
    required: true,
    value: '',
    validation: function (e) {
      return e.length > 0
    },
    message: 'Please enter current state',
    messageShow: false,
  },
]
