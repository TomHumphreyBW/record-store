import React from 'react';
import {
  Select,
  SelectOption,
  SelectOptionGroup,
} from '@brandwatch/axiom-components';

const SortDropdown = ({
  setSort,
  sort
}) => {
  return (
    <Select onClear={undefined} onSelect={function (event) { setSort(event) }} placeholder="Sort by" selectedValue={sort} value={sort} space="x0">
      <SelectOptionGroup>
        <SelectOption value="artist">
          Artist Name
          </SelectOption>
        <SelectOption value="album">
          Album Name
          </SelectOption>
        <SelectOption value="year">
          Album Year
          </SelectOption>
        <SelectOption value="genre">
          Album Genre
          </SelectOption>
      </SelectOptionGroup>
    </Select>
  );
};

export default SortDropdown;