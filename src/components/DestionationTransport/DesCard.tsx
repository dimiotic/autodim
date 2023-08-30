import { useActions } from 'hooks/actions';
import React from 'react';
import { Link } from 'react-router-dom';
const DesCard = ({ value, image }: any) => {
  const { handleFilterChange, applyFilters } = useActions();
  return (
    <Link
      to="cars"
      onClick={() => {
        const e = { target: { name: 'destinations', value } };
        handleFilterChange(e);
        applyFilters();
      }}
      key={value}
      className="desCard"
    >
      <h3 style={{ fontSize: '22px' }}>{value}</h3>
      <h5 style={{ fontSize: '16px' }}>Show &gt;</h5>
      <img
        style={{
          width: '320px',
          height: '180px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
        src={image}
        alt={value}
      />
    </Link>
  );
};

export default DesCard;
