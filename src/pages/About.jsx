import { useState } from 'react';
import React, { Component }  from 'react';

import Page from '../components/Page';

// mock

// ----------------------------------------------------------------------

export default function About() {
  // eslint-disable-next-line no-unused-vars
  const [openFilter, setOpenFilter] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };


  return (
    <>
      <h1>About</h1>
    </>    
  );
}
