import React from 'react';
import Tooltip from '../UIElements/Tooltip/Tooltip';
import '../UIElements/Tooltip/Tooltip.css';

const SideNav = () => {
  return (
    <div
      className="absolute bottom-0 left-0 flex align-items-center"
      style={{ height: '100%', background: 'var(--main-item)' }}
    >
      <div className="p-4 flex align-items-center justify-content-center flex-column">
        <Tooltip id="FO" content="Fleet Overview">
          <i className="pi pi-chart-pie" style={{ fontSize: '2rem' }}></i>
        </Tooltip>
        <Tooltip id="D" content="Devices">
          <i className="pi pi-database mt-4" style={{ fontSize: '2rem' }}></i>
        </Tooltip>
        <Tooltip id="P" content="Policy">
          <i className="pi pi-sliders-h mt-4" style={{ fontSize: '2rem' }}></i>
        </Tooltip>
        <Tooltip id="SU" content="Software Update">
          <i className="pi pi-cog mt-4" style={{ fontSize: '2rem' }}></i>
        </Tooltip>
      </div>
    </div>
  );
};

export default SideNav;
