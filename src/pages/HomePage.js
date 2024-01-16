import React from 'react';
import HeroSectionOne  from '../components/HomePage/HeroSectionOne';
import AdventureSection from '../components/HomePage/AdventureSection';
import WorkSection from '../components/HomePage/WorkSection';
import DestinationSection from '../components/HomePage/DestinationSection';
import HotelSection from '../components/HomePage/HotelSection';
import HeroSectionTwo from '../components/HomePage/HeroSectionTwo';
import ActivitySection from '../components/HomePage/ActivitySection';
import FooterSection from '../components/Layout/FooterSection';
export const HomePage = () => {
  return (
  <div>

    <HeroSectionOne/>
    <AdventureSection/>
    <DestinationSection/>
    <HotelSection/>
    <HeroSectionTwo/>
    <ActivitySection/>
    <WorkSection/>

    </div>
    
  )
}

