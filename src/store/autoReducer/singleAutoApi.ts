import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICar } from 'models/ICar';

export const singleCarApi = createApi({
  reducerPath: 'singleCar/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  endpoints: (build) => ({
    singleCar: build.query<ICar, string>({
      query: (id: string) => ({
        url: `/cars/${id}`,
      }),
    }),
  }),
});

export const { useSingleCarQuery } = singleCarApi;
