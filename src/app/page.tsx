'use client';
import Hero from '@/app/Hero';
import BrandsStrip from '@/app/BrandsStrip';
import grid from '@/app/grid.module.css';
import ModelCard from '@/app/ModelCard'; 
import FeatureStrip from '@/app/FeatureStrip';
import AppPromo from './AppPromo';
import Footer from './Footer';

const FEATURED = [
  { id:'m1', name:'Les Paul Standard', type:'Electric', image:'/placeholder-guitar.png', brandId:'gibson' },
  { id:'m2', name:'Stratocaster Pro', type:'Electric', image:'/placeholder-guitar.png', brandId:'fender' },
  { id:'m3', name:'RG Prestige', type:'Electric', image:'/placeholder-guitar.png', brandId:'ibanez' },
  { id:'m4', name:'814ce', type:'Acoustic', image:'/placeholder-guitar.png', brandId:'taylor' },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandsStrip />
      <FeatureStrip/>
      <AppPromo />
      <Footer/>
    </>
  );
}
