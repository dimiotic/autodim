import { useEffect, useState } from 'react';
import CarCard from 'components/CarCard/CarCard';
import FilterComponent from 'components/FilterComponent/FilterComponent';
import { useAppSelector } from 'hooks/redux';
import { useActions } from 'hooks/actions';
import SortingComponent from 'components/FilterComponent/SortingComponent';

const CarsPage = () => {
  const { cars, isLoading, error } = useAppSelector(
    (store) => store.autoReducer
  );

  const { filteredCars, filters } = useAppSelector(
    (store) => store.filterReducer
  );
  if (error) {
    return <h1>There was an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section style={{ display: 'flex', position: 'relative' }}>
      {filters.destinations !== 'all' ? (
        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: '10px',
          }}
        >
          <h1>{filters.destinations}</h1>
        </div>
      ) : (
        <FilterComponent cars={cars} />
      )}
      <SortingComponent />
      <div className="cars__page">
        {filteredCars.map((car) => {
          return <CarCard key={car.id} {...car} />;
        })}
      </div>
    </section>
  );
};

export default CarsPage;
