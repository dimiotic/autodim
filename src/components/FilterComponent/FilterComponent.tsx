import { useState } from 'react';
import { useAppSelector } from 'hooks/redux';

import { ICar } from 'models/ICar';
import { useActions } from 'hooks/actions';
import FromToInputs from 'components/FilterComponent/FromToInputs';
import CheckboxFilter from './CheckboxFilter';

const FilterComponent = ({ cars }: any) => {
  const {
    handleFilterChange,
    resetFilters,
    applyFilters,
    filterInit,
    sortCars,
  } = useActions();
  const { filters } = useAppSelector((store) => store.filterReducer);
  const { sortValue } = useAppSelector((store) => store.filterReducer);

  return (
    <div className="filter_component">
      <div className="filter_header">
        <div className="mainRadio">
          <input
            type="radio"
            id="mainAll"
            name="carNew"
            value="all"
            onChange={(e) => handleFilterChange(e)}
          />
          <label
            className={filters.carNew === 'all' ? 'mainRadioActive' : ''}
            htmlFor="mainAll"
          >
            All
          </label>
        </div>
        <div className="mainRadio">
          <input
            type="radio"
            id="mainNew"
            name="carNew"
            value="new"
            onChange={(e) => handleFilterChange(e)}
          />

          <label
            className={filters.carNew === 'new' ? 'mainRadioActive' : ''}
            htmlFor="mainNew"
          >
            New
          </label>
        </div>
        <div className="mainRadio">
          <input
            type="radio"
            id="mainOld"
            name="carNew"
            value="old"
            onChange={(e) => handleFilterChange(e)}
          />
          <label
            className={filters.carNew === 'old' ? 'mainRadioActive' : ''}
            htmlFor="mainOld"
          >
            Old
          </label>
        </div>
      </div>
      <div
        style={{
          lineHeight: '2',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="car_type"
      >
        <h3>Transport Type</h3>
        <div>
          <input
            style={{ marginRight: '15px' }}
            checked={filters.tstype === 'leight'}
            onChange={(e) => handleFilterChange(e)}
            type="radio"
            id="leight"
            name="tstype"
            value="leight"
          />
          <label htmlFor="leight">leight</label>
        </div>
        <div>
          <input
            style={{ marginRight: '15px' }}
            checked={filters.tstype === 'truck'}
            onChange={(e) => handleFilterChange(e)}
            type="radio"
            id="truck"
            name="tstype"
            value="truck"
          />
          <label htmlFor="truck">truck</label>
        </div>
        <div>
          <input
            style={{ marginRight: '15px' }}
            checked={filters.tstype === 'bus'}
            onChange={(e) => handleFilterChange(e)}
            type="radio"
            id="bus"
            name="tstype"
            value="bus"
          />
          <label htmlFor="bus">bus</label>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <h3>Year</h3>
        <FromToInputs fromInput="yearFrom" toInput="yearTo" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <h3>Price</h3>
        <FromToInputs fromInput="priceFrom" toInput="priceTo" />
      </div>
      <div>
        <CheckboxFilter
          title="brand"
          infoType="brand"
          infoArray={Array.from(new Set(cars.map((car: ICar) => car.brand)))}
        />
        <CheckboxFilter
          title="body type"
          infoType="body"
          infoArray={Array.from(new Set(cars.map((car: ICar) => car.body)))}
        />
        <CheckboxFilter
          title="Fuel type"
          infoType="fuel_type"
          infoArray={Array.from(
            new Set(cars.map((car: ICar) => car.fuel_type))
          )}
        />
        <CheckboxFilter
          title="Gears type"
          infoType="gears"
          infoArray={Array.from(new Set(cars.map((car: ICar) => car.gears)))}
        />
        <CheckboxFilter
          title="Transmission type"
          infoType="transmission"
          infoArray={Array.from(
            new Set(cars.map((car: ICar) => car.transmission))
          )}
        />
        <CheckboxFilter
          title="Seats(count)"
          infoType="seats"
          infoArray={Array.from(new Set(cars.map((car: ICar) => car.seats)))}
        />
      </div>

      <div style={{ marginTop: '15px' }} className="filter_btns">
        <button
          onClick={() => {
            resetFilters();
            filterInit(cars);
          }}
          className="reset_btn"
        >
          Reset filters
        </button>
        <button
          onClick={() => {
            applyFilters();
            sortCars(sortValue);
          }}
          className="apply_btn"
        >
          Apply filters
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
