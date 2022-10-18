import React from 'react'
import { TableTop } from 'components/UIComponents/TableSearchFilter/Style/style'
import SearchInput from 'components/SearchInput'
import FilterDiv from 'components/FilterDiv'
import { FilterText } from 'components/FilterDiv'

const TableSearchFilter = ({ menu, totalCount = 0, currentCount = 0 }) => {
  return (
    <TableTop centerVertically>
      <SearchInput
        width={'100%'}
        placeholder="Search by keyword"
        bordered={false}
      />
      <FilterDiv overlayMenu={menu} />
      <FilterText>
        Showing {currentCount} 0f {totalCount}
      </FilterText>
    </TableTop>
  )
}

export default TableSearchFilter
