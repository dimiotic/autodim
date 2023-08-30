import SubBrand from './SubBrand';
import { Link } from 'react-router-dom';
import { useActions } from 'hooks/actions';
import { useAppSelector } from 'hooks/redux';

const BrandsComponent = () => {
  const { cars } = useAppSelector((store) => store.autoReducer);
  const { setSearchOptions, applySearchOptions } = useActions();
  let brands = Array.from(
    new Set(cars.map((car: { brand: any }) => car.brand))
  );
  return (
    <div style={{ margin: '170px 0 50px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Buy auto</h3>
        <Link
          onClick={() => {
            setSearchOptions({ value: 'new', name: 'carNew' });
            applySearchOptions();
          }}
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
          to="cars"
        >
          Show all new autos &gt;
        </Link>
      </div>
      <div
        style={{
          display: 'grid',
          margin: '15px',
          gridTemplateColumns: 'repeat(5,1fr)',
          columnGap: '25px',
        }}
      >
        {brands.map((brand: any, id: any) => (
          <SubBrand cars={cars} key={id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandsComponent;
