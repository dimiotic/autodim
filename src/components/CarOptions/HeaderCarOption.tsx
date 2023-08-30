import React from 'react';

const HeaderCarOption = ({ title, value }: any) => {
  return (
    <h3>
      {title}
      <br />
      <span style={{ color: 'gray' }}>{value}</span>
    </h3>
  );
};

export default HeaderCarOption;
