import React from 'react';
import { useActions } from 'hooks/actions';
import { useAppSelector } from 'hooks/redux';
import favBtnRed from '../images/favRed.png';
import favBtnBlack from '../images/favBlack.png';
const FavBtn = ({ id }: any) => {
  const { addFav, removeFav } = useActions();
  const { favs } = useAppSelector((store) => store.favsReducer);
  const [isFav, setIsFav] = React.useState(favs.includes(String(id)));
  const addToFav = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFav(String(id));
    setIsFav(true);
  };
  const removeFromFav = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFav(String(id));
    setIsFav(false);
  };
  return (
    <button style={{ border: '0' }} onClick={isFav ? removeFromFav : addToFav}>
      <img
        style={{
          height: '32px',
          width: '36px',
          cursor: 'pointer',
        }}
        src={isFav ? favBtnRed : favBtnBlack}
        alt="favs"
      />
    </button>
  );
};

export default FavBtn;
