import BrandsComponent from 'components/BrandsComponent/BrandsComponent';
import CarSearch from 'components/CarSearch/CarSearch';
import DesTransportComponent from 'components/DestionationTransport/DesTransportComponent';
import MyBtn from 'components/MyBtn';
import Slider from 'components/Slider';
import { useAppSelector } from 'hooks/redux';
import { ISliderOpts } from 'models/ISliderOpts';

const HomePage = () => {
  const images = [
    'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1611651186486-415f04eb78e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  ];

  const sliderOptions: ISliderOpts = {
    width: 1200,
    height: 390,
    btnsTop: 38,
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="homepage">
        <CarSearch />
        <DesTransportComponent />
        <Slider images={images} options={sliderOptions} />
        <BrandsComponent />
      </div>
    </div>
  );
};

export default HomePage;
