import React from 'react';

const SpecificItem = ({ title, value }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        color: 'gray',
      }}
    >
      <h4>{title}</h4> <h4>{value}</h4>
    </div>
  );
};
export default SpecificItem;
