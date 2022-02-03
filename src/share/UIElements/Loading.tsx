import React from 'react';

interface Props {
  size?: number;
}

const Loading = ({ size }: Props) => {
  return (
    <i
      className="pi pi-spin pi-spinner"
      style={{
        fontSize: size ? `${size / 10}em` : '4em',
        color: 'var(--main-orange)',
      }}
    />
  );
};

export default Loading;
