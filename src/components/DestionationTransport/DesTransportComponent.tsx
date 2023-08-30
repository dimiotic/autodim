import { useActions } from 'hooks/actions';
import { useAppSelector } from 'hooks/redux';
import React from 'react';
import { Link } from 'react-router-dom';
import DesCard from './DesCard';

const DesTransportComponent = () => {
  const dest = [
    {
      image:
        'https://imgr1.auto-motor-und-sport.de/Autos-Ausland-Aufmacher-Collage-169FullWidth-45eb77d6-1663858.jpg',
      value: 'all',
    },
    {
      image:
        'https://www.autozeitung.de/assets/styles/article_image/public/field/image/gebrauchtwagen-mit-legendaeren-motoren.jpg?itok=iXghNO6h',
      value: 'sportcar',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgQw7vJ_HAVlkwdATiuyTo4Q2g2ecqJONaN7_BOsIpbNqsr1oL-fL7EKylMN6Z_K1Qo4&usqp=CAU',
      value: 'cheap',
    },
    {
      image:
        'https://us.123rf.com/450wm/teksomolika/teksomolika1812/teksomolika181200446/113836951-die-junge-familie-ruht-sich-im-kofferraum-ihres-autos-aus.jpg?ver=6',
      value: 'family',
    },
    {
      image:
        'https://autotheme.info/wp-content/uploads/2020/11/07ford_fiesta_213925.jpg',
      value: 'low-volume',
    },
    {
      image:
        ' https://cs4.pikabu.ru/post_img/big/2016/05/26/6/1464250943184011767.png',
      value: 'women',
    },
    {
      image:
        'https://content.homenetiol.com/640x480/d3beee2764cd45e7b0746abe390b5917.jpg',
      value: 'big-tank',
    },
    {
      image:
        'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/4ce55c66-b246-472f-965d-37786057aac4/Volkswagen%20Tiguan%20Allspace%20%285%29.jpg?width=800&fm=jpg&auto=format',
      value: 'trip',
    },
  ];
  const { filters } = useAppSelector((store) => store.filterReducer);
  return (
    <div>
      <div
        style={{
          margin: '90px 0 20px 0',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h3>Transport according to destination</h3>
        <Link
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
          to="cars"
        >
          Show all transport &gt;
        </Link>
      </div>
      <div
        style={{
          width: '1700px',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {dest.map((item) => {
          return (
            <DesCard key={item.value} value={item.value} image={item.image} />
          );
        })}
      </div>
    </div>
  );
};

export default DesTransportComponent;
