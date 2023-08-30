import { useActions } from 'hooks/actions';
import { useAppSelector } from 'hooks/redux';
import React from 'react';

const CarSearchSelector = ({ options, title }: any) => {
  const { setSearchOptions, applySearchOptions } = useActions();
  const { searchOptions } = useAppSelector((store) => store.filterReducer);
  return (
    <select
      style={{
        padding: '10px 20px',
        margin: '7px',
        border: '0',
        width: '240px',
        outline: 'none',
        borderBottom: '2px solid #ccc',
      }}
      disabled={title === 'model' && searchOptions.brand === 'brand'}
      name={title}
      onChange={(e) => {
        const value = e.target.value;
        const name = e.target.name;
        setSearchOptions({ value, name });
        applySearchOptions();
      }}
    >
      <option>{title}</option>
      {options.map((option: any) => {
        return (
          <option id={option} key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default CarSearchSelector;
