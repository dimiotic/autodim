import { useEffect, useState } from 'react';

import { useAppSelector } from 'hooks/redux';
import CarSearchSelector from './CarSearchSelector';
import { Link } from 'react-router-dom';
import { useActions } from 'hooks/actions';

const CarSearch = () => {
  const { resetFilters, filterInit, setSearchOptions, applySearchOptions } =
    useActions();
  const { cars } = useAppSelector((store) => store.autoReducer);
  const { filteredCars, allCars } = useAppSelector(
    (store) => store.filterReducer
  );
  useEffect(() => {
    resetFilters();
    filterInit(cars);
  }, []);
  const { searchOptions } = useAppSelector((store) => store.filterReducer);
  let carBrands = Array.from(new Set(filteredCars.map((car) => car.brand)));
  let carModels = Array.from(new Set(filteredCars.map((car) => car.model)));
  let carFuel = Array.from(new Set(filteredCars.map((car) => car.fuel_type)));
  let carBody = Array.from(new Set(filteredCars.map((car) => car.body)));

  return (
    <div style={{ width: '1200px', marginTop: '70px' }}>
      <div className="carSearch_header">
        <h2 style={{ marginBottom: '15px' }}>Car Search</h2>
        <p style={{ marginBottom: '15px' }}>
          Today we have{' '}
          <span style={{ color: '#da4747' }}>{allCars.length}</span> cars in
          katalog
        </p>
      </div>
      <div style={{ display: 'flex' }}>
        <CarSearchSelector options={carBrands} title="brand" />
        <CarSearchSelector options={carModels} title="model" />
        <CarSearchSelector options={carFuel} title="fuel_type" />
        <CarSearchSelector options={carBody} title="body" />
        <Link
          style={{
            padding: '17px 100px',
            textAlign: 'center',
            borderRadius: '8px',
            background: '#f32234',
            textDecoration: 'none',
            color: 'white',
          }}
          to="cars"
        >
          Search
        </Link>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '5px' }}>
          <input
            style={{ margin: '5px' }}
            onChange={(e) => {
              setSearchOptions(e.target);
              applySearchOptions();
            }}
            checked={searchOptions.carNew === 'any'}
            type="radio"
            id="any"
            value="any"
            name="carNew"
          />
          <label htmlFor="any">any</label>
        </div>
        <div style={{ margin: '5px' }}>
          <input
            style={{ margin: '5px' }}
            onChange={(e) => {
              setSearchOptions(e.target);
              applySearchOptions();
            }}
            checked={searchOptions.carNew === 'new'}
            type="radio"
            id="new"
            value="new"
            name="carNew"
          />
          <label htmlFor="new">New</label>
        </div>
        <div style={{ margin: '5px' }}>
          <input
            style={{ margin: '5px' }}
            onChange={(e) => {
              setSearchOptions(e.target);
              applySearchOptions();
            }}
            checked={searchOptions.carNew === 'old'}
            type="radio"
            id="old"
            value="old"
            name="carNew"
          />
          <label htmlFor="old">old</label>
        </div>
      </div>
    </div>
  );
};

export default CarSearch;
