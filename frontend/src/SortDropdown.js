import React from 'react';
import {
   Select,
   SelectOption,
   SelectOptionGroup,
} from '@brandwatch/axiom-components';

const SortDropdown = () => {
    return (
        <Select onChange={function(){}} onClear={undefined} onSelect={function(){}} placeholder="Select an item" selectedValue="" space="x0">
        <SelectOptionGroup>
          <SelectOption value="ap">
            Apple
          </SelectOption>
          <SelectOption value="ba">
            Banana
          </SelectOption>
          <SelectOption value="gr">
            Grape
          </SelectOption>
          <SelectOption value="gra">
            Grapefruit
          </SelectOption>
          <SelectOption value="ma">
            Mango
          </SelectOption>
          <SelectOption value="pe">
            Pear
          </SelectOption>
          <SelectOption value="pa">
            Peach
          </SelectOption>
          <SelectOption disabled value="pi">
            Pineapple
          </SelectOption>
          <SelectOption value="pl">
            Plum
          </SelectOption>
        </SelectOptionGroup>
        <SelectOptionGroup>
          <SelectOption value="br">
            Broccoli
          </SelectOption>
          <SelectOption value="ca">
            Cabbage
          </SelectOption>
          <SelectOption value="car">
            Carrot
          </SelectOption>
          <SelectOption value="cau">
            Cauliflower
          </SelectOption>
          <SelectOption value="pea">
            Pea
          </SelectOption>
          <SelectOption value="ru">
            Runner Bean
          </SelectOption>
        </SelectOptionGroup>
      </Select>  
    );
};

export default SortDropdown;