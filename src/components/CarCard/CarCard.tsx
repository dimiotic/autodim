import { Link } from 'react-router-dom';
import { ICar } from 'models/ICar';

import styles from './CarCart.module.css';
import FavBtn from 'components/FavBtn';
import CardCarOptions from 'components/CarOptions/CardCarOptions';
const CarCard = (car: ICar) => {
  const {
    id,
    model,
    year,
    body,
    mileage,
    brand,
    fuel_type,
    transmission,
    gears,
    carNew,
    price,
    images,
  } = car;
  interface OptionInterface {
    value: string;
  }
  const headerCarOptions: OptionInterface[] = [
    { value: transmission },
    { value: fuel_type },
    { value: gears },
    { value: body },
  ];
  return (
    <Link to={`/cars/${id}`} className={styles.car__card}>
      <div className={styles.car_header}>
        <FavBtn id={id} />
      </div>
      <div className={styles.car_image}>
        <img src={images[0]} alt={model} />
      </div>
      <div className={styles.car_info}>
        <h2>
          {brand} {model}
        </h2>
        <h3 style={{ color: '#ccc' }}>{year}</h3>
        <div className={styles.car_rate}>
          {carNew === 'new' ? (
            <h4 style={{ color: 'lightgreen' }}>New car</h4>
          ) : (
            <h4>mileage: {mileage}kms</h4>
          )}
        </div>
        <h3 style={{ color: 'green', marginTop: '15px' }}>
          {price && new Intl.NumberFormat('en-US').format(price)}$
        </h3>
        <div className={styles.car_options}>
          {headerCarOptions.map((option) => {
            return <CardCarOptions key={option.value} {...option} />;
          })}
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
