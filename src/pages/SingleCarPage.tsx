import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useSingleCarQuery } from 'store/autoReducer/singleAutoApi';

import 'animate.css';
import HeaderCarOption from 'components/CarOptions/HeaderCarOption';
import MainCharacterisricsOption from 'components/CarOptions/MainCharacterisricsOption';

import FavBtn from 'components/FavBtn';
import SpecificItem from 'components/CarOptions/SpecificItem';
import YoutubePlayer from 'components/Player/YoutubePlayer';
import Slider from 'components/Slider';
import { ISliderOpts } from 'models/ISliderOpts';
const sliderOptions: ISliderOpts = {
  width: 760,
  height: 400,
  btnsTop: 38,
};
const SingleCarPage = () => {
  const { id }: any = useParams();
  const { data: car, isLoading, isError } = useSingleCarQuery(id);
  const {
    model,
    year,
    body,
    brand,
    fuel_type,
    transmission,
    gears,
    seats,

    price,
    images,
    videoId,
  } = { ...car };
  const headerCarOptions = [
    { title: 'Trasmission', value: transmission },
    { title: 'Fuel type', value: fuel_type },
    { title: 'Volume', value: '1494³' },
    { title: 'body', value: body },
  ];
  const mainCharacteristicOptions = [
    { title: 'Year', value: year },
    { title: 'Engine', value: fuel_type },
    { title: 'Trasmission', value: transmission },
    { title: 'Volume', value: '1494³' },
    { title: 'Fuel type', value: fuel_type },
    { title: 'body', value: body },
  ];
  const specificationsDimensions = [
    { title: 'Body type', value: body },
    { title: 'Seats Count', value: seats },
    { title: 'Doors Count', value: '4' },
    { title: 'Height(mm)', value: '1653' },
  ];
  const specificationsEngine = [
    { title: 'Fuel type', value: fuel_type },
    { title: 'Engine Volume', value: '1496 cm³' },
    { title: 'Engine Power(H.P)', value: '154' },
    { title: 'Fuel exit', value: '-' },
  ];
  const specificationsTransmission = [
    { title: 'Gears type', value: gears },
    { title: 'Transmission type', value: transmission },
    { title: 'Transmission shifts', value: '6' },
  ];

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;
  return (
    <div style={{ margin: '30px 50px' }}>
      <Link
        style={{
          color: 'black',
          textDecoration: 'none',
        }}
        to="/cars"
      >
        Go back
      </Link>
      <div
        style={{
          marginTop: '15px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h1>
            {brand} {model}
          </h1>
          <h3>{year}</h3>
        </div>
        <div>
          <FavBtn id={id} />
          <h3>
            Price:{' '}
            <b>{price && new Intl.NumberFormat('en-US').format(price)}$</b>
          </h3>
          <button
            style={{
              background: 'red',
              padding: '10px 30px',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
            }}
          >
            Contact wtih a dealer
          </button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '500px',
          marginTop: '50px',
        }}
      >
        {headerCarOptions.map((option) => {
          return (
            <HeaderCarOption key={option.title + option.value} {...option} />
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            overflowX: 'hidden',
            position: 'relative',
            marginTop: '30px',
          }}
        >
          <Slider images={images} options={sliderOptions} underImages />
        </div>
        <div style={{ width: '740px', marginLeft: '20px', marginTop: '30px' }}>
          <h3>Main characteristic</h3>
          <div style={{ marginLeft: '20px', lineHeight: '3' }}>
            {mainCharacteristicOptions.map((option) => {
              return (
                <MainCharacterisricsOption
                  key={option.value + option.title}
                  {...option}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '80px' }}>
        <h2 style={{ textAlign: 'center' }}>specifications</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ width: '500px', lineHeight: '3' }}>
            <h3>dimensions</h3>
            {specificationsDimensions.map((item) => {
              return <SpecificItem {...item} key={item.value + item.title} />;
            })}
          </div>
          <div style={{ width: '500px', lineHeight: '3' }}>
            <h3>Engine</h3>
            {specificationsEngine.map((item) => {
              return <SpecificItem {...item} key={item.value + item.title} />;
            })}
          </div>
          <div style={{ width: '500px', lineHeight: '3' }}>
            <h3>transmission</h3>
            {specificationsTransmission.map((item) => {
              return <SpecificItem {...item} key={item.value + item.title} />;
            })}
          </div>
          {videoId && (
            <div style={{ margin: '130px  auto 0' }}>
              <YoutubePlayer videoId={videoId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCarPage;
