import React from 'react'
import {
  StyledGroup,
  StyledCheckbox,
} from 'components/UIComponents/FilterCheckBoxComp/style'
import Flex from 'components/Flex'
import CustomTag from 'components/CustomTag'

const FilterCheckBoxComp = ({ options, onChange }) => {
  return (
    <StyledGroup onChange={onChange}>
      {options?.map(item => (
        <Flex spaceBetween centerVertically key={item.id}>
          <StyledCheckbox value={item.value} label={item.label} />
          <CustomTag colorType="grey" message="0" />
        </Flex>
      ))}
    </StyledGroup>
  )
}

export default FilterCheckBoxComp
