import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import CycleItems from '../components/CycleItems';

const clientsArray = [
  '',
  'Audi',
  'HBO',
  'Showtime',
  'Netflix',
  'Amazon',
  'The Wall Street Journal',
  'Barbie',
  'Motorola',
  'Pratt Institute',
  'Uber',
  'United Airlines'
];

const Services: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-col items-center justify-start gap-2 px-4 md:gap-6">
        <p className="font-mono text-sm text-white">some rad brands I&apos;ve worked with...</p>
        <CycleItems itemsArray={clientsArray} />
      </div>
    </Layout>
  );
};

export default Services;
