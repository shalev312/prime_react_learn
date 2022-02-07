import React, { useCallback } from 'react';
import { InputText } from 'primereact/inputtext';

interface Props {
  id?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, value, placeholder, onChange }: Props) => {
  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value, e);
    },
    [onChange]
  );
  return (
    <InputText
      className="border-none"
      id={id}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  );
};

export default Input;
