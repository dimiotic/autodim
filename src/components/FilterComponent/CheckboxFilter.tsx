import { useActions } from 'hooks/actions';
import { useAppSelector } from 'hooks/redux';
import React, { useState } from 'react';
import 'animate.css';

const CheckboxFilter = ({ infoArray, infoType, title }: any) => {
  const { handleCheckBoxChange, checkAllCheckboxes, unCheckAllCheckboxes } =
    useActions();
  const { filters } = useAppSelector((store) => store.filterReducer);
  const [display, setDisplay] = useState('none');

  return (
    <div style={{ overflowY: 'hidden', borderBottom: '1px solid #ccc' }}>
      <h3
        onClick={() => setDisplay(display === 'block' ? 'none' : 'block')}
        style={{ margin: '10px 0 15px 0' }}
      >
        {title}
      </h3>
      <ul
        style={{
          listStyle: 'none',
          display: `${display}`,
          marginBottom: '15px',
        }}
      >
        {infoArray.map((infoItem: string) => {
          return (
            <li
              className="animate__animated animate__fadeInDown"
              key={infoItem}
            >
              <input
                onChange={(e) => handleCheckBoxChange(e)}
                style={{ margin: '7px' }}
                type="checkbox"
                name={infoType}
                id={infoItem}
                value={filters[infoType].includes(infoItem)}
                checked={filters[infoType].includes(infoItem)}
              />
              <label htmlFor={infoItem}>{infoItem}</label>
            </li>
          );
        })}
        <div className="checkBtns">
          <button onClick={() => unCheckAllCheckboxes({ infoType })}>
            Uncheck all
          </button>
          <button onClick={() => checkAllCheckboxes({ infoArray, infoType })}>
            Check all
          </button>
        </div>
      </ul>
    </div>
  );
};

export default CheckboxFilter;
