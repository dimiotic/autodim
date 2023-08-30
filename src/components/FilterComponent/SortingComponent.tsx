import { useActions } from 'hooks/actions';
import { useAppSelector } from 'hooks/redux';

const SortingComponent = () => {
  const { sortCars, setSelectValue } = useActions();
  const { sortValue } = useAppSelector((store) => store.filterReducer);
  return (
    <div style={{ position: 'absolute', right: '50px', top: '10px' }}>
      <select
        name={sortValue}
        id="sortSelect"
        onChange={(e) => {
          setSelectValue(e.target.value);
          sortCars(e.target.value);
        }}
      >
        <option value="priceL">price (lowest)</option>
        <option value="priceH">price (highest)</option>
        <option value="name-a">brand (a-z)</option>
        <option value="name-z">brand (z-a)</option>
        <option value="year-o">year (old)</option>
        <option value="year-n">year (new)</option>
      </select>
    </div>
  );
};

export default SortingComponent;
