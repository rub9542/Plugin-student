/**
 * This component is for building a local styled component for multiple select-search input
 *
 */

import React, { useState } from 'react'

//importing styled components
import {
  LocalSelect,
  LocalOption,
} from 'components/SearchInputResponsive/style'
const yearOptions = ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
const cityOption = [
  'Bangalore',
  'Pune',
  'Mumbai',
  'Chennai',
  'Surat',
  'Noida',
  'Anywhere',
]

const SearchInputResponsive = ({ placeholder, mode, responsive, onChange }) => {
  const [white, setWhite] = useState(false)

  return (
    <>
      <LocalSelect
        showSearch
        placeholder={placeholder}
        white={white}
        optionFilterProp="children"
        filterOption={(input, option) => option.children.includes(input)}
        onChange={onChange}
        filterSort={(optionA, optionB) =>
          optionA.children
            .toLowerCase()
            .localeCompare(optionB.children.toLowerCase())
        }
        maxTagCount="responsive"
        mode={mode ? mode : 'single'}
        onFocus={e => setWhite(true)}
        onBlur={e => setWhite(false)}
      >
        {placeholder === 'year'
          ? yearOptions.map(item => (
              <LocalOption value={item}>{item}</LocalOption>
            ))
          : cityOption.map(item => (
              <LocalOption value={item}>{item}</LocalOption>
            ))}
      </LocalSelect>
    </>
  )
}

export default SearchInputResponsive
