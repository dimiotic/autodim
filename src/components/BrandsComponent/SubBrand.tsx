import { useActions } from 'hooks/actions';
import { ICar } from 'models/ICar';
import React from 'react';
import { Link } from 'react-router-dom';
import { brandsLogos } from 'utils/brandsLogos';

const SubBrand = ({ cars, brand }: any) => {
  const { setSearchOptions, applySearchOptions } = useActions();
  return (
    <Link
      onClick={() => {
        setSearchOptions({ value: brand, name: 'brand' });
        applySearchOptions();
      }}
      style={{
        textDecoration: 'none',
        color: 'black',
        fontSize: '20px',
        margin: '10px',
      }}
      to="/cars"
    >
      <h4 style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img
          style={{ width: '20px', height: '20px' }}
          src={brandsLogos[brand]}
          alt={brand}
        />
        <span>{brand} </span>
        <span>{cars.filter((car: ICar) => car.brand === brand).length}</span>
      </h4>
    </Link>
  );
};

export default SubBrand;
