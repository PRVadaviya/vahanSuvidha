import React from 'react';
import HeaderCard from './HeaderCard';
import { Outlet } from 'react-router-dom';

const Page = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Page;
