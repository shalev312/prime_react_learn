import React from 'react';
import SideNav from './share/Navigation/SideNav';
import Header from './share/Navigation/Header';

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="app relative grid">
      <div className="col-1">
        <SideNav />
      </div>
      <div className="col-11">
        <div className="grid">
          <div className="col-11">
            <Header />
          </div>
          <div className="flex justify-content-center align-items-center col-11">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
