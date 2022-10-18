/**
 * Props -
 * 1.SelectWidth - to specify the percent width of Select
 * 2.InputWidth - to specify the percent width of Input
 */

import React from 'react'

import { Select, Input } from 'antd'

//importing styled components
import { SelectLocal, InputLocal } from 'components/SelectInput/style'

const SelectInput = ({ selectWidth, InputWidth, arr, formHandler, name }) => {
  const { Option } = Select

  return (
    <Input.Group
      compact
      style={{
        marginTop: '10px',
        width: '100%',
        display: 'flex',
      }}
    >
      <SelectLocal
        defaultValue={arr.length ? arr[0] : null}
        style={{
          width: selectWidth,
          borderRadius: '8px',
        }}
      >
        {arr.length
          ? arr.map(obj => {
              return (
                <Option key={obj} value={obj}>
                  {obj}
                </Option>
              )
            })
          : null}
      </SelectLocal>
      <InputLocal
        style={{
          width: InputWidth,
          height: '50px',
        }}
        onChange={e => formHandler(e, name)}
      />
    </Input.Group>
  )
}

export default SelectInput
