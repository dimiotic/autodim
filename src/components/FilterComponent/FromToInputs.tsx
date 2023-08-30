import { useActions } from 'hooks/actions';
import { useAppSelector } from 'hooks/redux';
import React from 'react';

const FromToInputs = ({ fromInput, toInput }: any) => {
  const { handleFilterChange } = useActions();
  const { filters } = useAppSelector((store) => store.filterReducer);
  return (
    <div className="fromToInputs">
      <input
        name={fromInput}
        onChange={(e) => handleFilterChange(e)}
        value={filters[fromInput]}
        type="number"
        min={0}
        placeholder="from"
      />
      <h3>-</h3>
      <input
        name={toInput}
        onChange={(e) => handleFilterChange(e)}
        value={filters[toInput]}
        type="number"
        min={0}
        placeholder="to"
      />
    </div>
  );
};

export default FromToInputs;
