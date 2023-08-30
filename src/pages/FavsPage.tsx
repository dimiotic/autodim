import CarCard from 'components/CarCard/CarCard';
import { useAppSelector } from 'hooks/redux';

const FavsPage = () => {
  const { cars } = useAppSelector((store) => store.autoReducer);
  const { favs } = useAppSelector((store) => store.favsReducer);
  const favsCars = cars.filter((car) => favs.includes(String(car.id)));
  return (
    <div className="favs__page">
      {favsCars.map((car) => {
        return <CarCard key={car.id} {...car} />;
      })}
    </div>
  );
};

export default FavsPage;
