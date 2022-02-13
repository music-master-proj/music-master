import React from 'react';
import PageContainer from './PageContainer';
import HeroSection from './Sections/Hompage/HeroSection';
import WhatOnMusic from './Sections/Hompage/MusicSection';
import './Styles/homepage.scss'

function Homepage() {
  return (
    <PageContainer title='Home' footer={false}>
      <HeroSection />
      <WhatOnMusic />
    </PageContainer>
  );
}

export default Homepage;
