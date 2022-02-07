import React from 'react';
import { Button as PrimeButton } from 'primereact/button';

interface Props {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ label, onClick, className }: Props) => {
  return <PrimeButton label={label} onClick={onClick} className={className} />;
};

export default Button;
