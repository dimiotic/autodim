import { createSlice } from '@reduxjs/toolkit';
import { ICar } from 'models/ICar';
interface filterState {
  filters: any;
  filteredCars: ICar[];
  allCars: ICar[];
  sortValue: string;
  searchOptions: any;
}

const initialState: filterState = {
  filters: {
    carNew: 'all',
    tstype: 'leight',
    yearFrom: 0,
    yearTo: new Date().getFullYear(),
    priceFrom: 0,
    priceTo: 0,
    brand: [],
    body: [],
    fuel_type: [],
    gears: [],
    transmission: [],
    seats: [],
    destinations: 'all',
  },
  filteredCars: [],
  allCars: [],
  sortValue: 'priceH',
  searchOptions: {
    brand: 'brand',
    model: 'model',
    fuel_type: 'fuel_type',
    body: 'body',
    carNew: 'any',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchOptions: (state, action) => {
      const { value, name } = action.payload;
      return {
        ...state,
        searchOptions: { ...state.searchOptions, [name]: value },
      };
    },
    applySearchOptions: (state) => {
      let tempCars: ICar[] = [...state.allCars];
      let { brand, fuel_type, body, carNew } = state.searchOptions;

      if (brand !== 'brand') {
        tempCars = tempCars.filter((car) => {
          return car.brand === brand;
        });
      }

      if (fuel_type !== 'fuel_type') {
        tempCars = tempCars.filter((car) => {
          return car.fuel_type === fuel_type;
        });
      }
      if (body !== 'body') {
        tempCars = tempCars.filter((car) => {
          return car.body === body;
        });
      }

      if (carNew !== 'any') {
        if (state.searchOptions.carNew === 'new') {
          tempCars = tempCars.filter((car) => {
            return car.carNew === 'new';
          });
        } else if (state.searchOptions.carNew === 'old') {
          tempCars = tempCars.filter((car) => {
            return car.carNew === 'old';
          });
        }
      }
      return {
        ...state,
        filters: { ...state.filters, ...state.searchOptions },
        filteredCars: tempCars,
      };
    },
    filterInit: (state, action): any => {
      let minYear = action.payload.map((item: any) => item.year);
      minYear = Math.min(...minYear);
      let maxPrice = action.payload.map((item: any) => item.price);
      maxPrice = Math.max(...maxPrice);
      const brands = Array.from(
        new Set(action.payload.map((item: any) => item.brand))
      );
      const bodys = Array.from(
        new Set(action.payload.map((item: any) => item.body))
      );
      const fuels = Array.from(
        new Set(action.payload.map((item: any) => item.fuel_type))
      );
      const gears = Array.from(
        new Set(action.payload.map((item: any) => item.gears))
      );
      const transmissions = Array.from(
        new Set(action.payload.map((item: any) => item.transmission))
      );
      const seats = Array.from(
        new Set(action.payload.map((item: any) => item.seats))
      );

      return {
        ...state,
        allCars: [...action.payload],
        filteredCars: action.payload,
        filters: {
          ...state.filters,
          priceTo: maxPrice,
          yearFrom: minYear,
          brand: brands,
          body: bodys,
          fuel_type: fuels,
          gears: gears,
          transmission: transmissions,
          seats: seats,
        },
      };
    },
    handleFilterChange: (state, action) => {
      const e = action.payload;
      const name = e.target.name;
      const value = e.target.value;
      return { ...state, filters: { ...state.filters, [name]: value } };
    },

    checkAllCheckboxes: (state, action) => {
      const { infoArray, infoType } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [infoType]: infoArray },
      };
    },
    unCheckAllCheckboxes: (state, action) => {
      const { infoType } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [infoType]: [] },
      };
    },
    handleCheckBoxChange: (state, action) => {
      const e = action.payload;
      const id = e.target.id;
      const checkboxType = e.target.name;
      let newOptions: string[] = [...state.filters[checkboxType]];

      if (newOptions.includes(id))
        newOptions = newOptions.filter((option) => option !== id);
      else {
        newOptions.push(id);
      }
      return {
        ...state,
        filters: { ...state.filters, [checkboxType]: [...newOptions] },
      };
    },
    resetFilters: (state) => {
      return { ...state, ...initialState };
    },
    applyFilters: (state) => {
      const {
        carNew,
        tstype,
        yearFrom,
        yearTo,
        priceFrom,
        priceTo,
        brand,
        body,
        fuel_type,
        gears,
        transmission,
        seats,
        destinations,
      } = state.filters;
      let tempCars = [...state.allCars];
      if (carNew !== 'all') {
        tempCars = tempCars.filter((car) => {
          return car.carNew === carNew;
        });
      }
      if (tstype !== 'all') {
        tempCars = tempCars.filter((car) => {
          return car.type === tstype;
        });
      }
      if (destinations !== 'all') {
        tempCars = tempCars.filter((car) => {
          return car.destinations.includes(destinations);
        });
      }
      tempCars = tempCars.filter((car) => car.price <= priceTo);
      tempCars = tempCars.filter((car) => car.price >= priceFrom);
      tempCars = tempCars.filter((car) => car.year <= yearTo);
      tempCars = tempCars.filter((car) => car.year >= yearFrom);
      tempCars = tempCars.filter((car) => brand.includes(car.brand));
      tempCars = tempCars.filter((car) => body.includes(car.body));
      tempCars = tempCars.filter((car) => fuel_type.includes(car.fuel_type));
      tempCars = tempCars.filter((car) => gears.includes(car.gears));
      tempCars = tempCars.filter((car) =>
        transmission.includes(car.transmission)
      );
      tempCars = tempCars.filter((car) => seats.includes(car.seats));

      return { ...state, filteredCars: tempCars };
    },
    setSelectValue: (state, action) => {
      const value = action.payload;
      return { ...state, sortValue: value };
    },
    sortCars: (state, action) => {
      const sortType = action.payload;
      let tempCars = [...state.filteredCars];
      if (sortType === 'priceH') {
        tempCars = tempCars.sort((a, b) => b.price - a.price);
      }
      if (sortType === 'priceL') {
        tempCars = tempCars.sort((a, b) => a.price - b.price);
      }
      if (sortType === 'year-n') {
        tempCars = tempCars.sort((a, b) => b.year - a.year);
      }
      if (sortType === 'year-o') {
        tempCars = tempCars.sort((a, b) => a.year - b.year);
      }
      if (sortType === 'name-a') {
        tempCars = tempCars.sort((a, b) => {
          return a.brand.localeCompare(b.brand);
        });
      }
      if (sortType === 'name-z') {
        tempCars = tempCars.sort((a, b) => {
          return b.brand.localeCompare(a.brand);
        });
      }
      return { ...state, filteredCars: tempCars };
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
