import React from 'react';
import { Tooltip as PrimeTooltip } from 'primereact/tooltip';
import './Tooltip.css';

interface Props {
  id: string;
  children: React.ReactElement | React.ReactNode | string;
  content?: string;
}

const Tooltip = ({ children, id, content }: Props) => {
  return (
    <>
      <PrimeTooltip
        className={`custom-tooltip${id} custom-tooltip`}
        target={`.custom-tooltip-${id}`}
        content={content}
      >
        {children}
      </PrimeTooltip>
      <span className={`custom-tooltip-${id}`}>{children}</span>
    </>
  );
};

export default Tooltip;
