import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import CycleItems from '../components/CycleItems';

const abilitiesArray = [
  '',
  'Creative Direction',
  'Brand Strategy',
  'Interaction Design',
  'Event Production',
  'Persona Mapping',
  'Package Design',
  'Hybrid Digital Experiences',
  'Metascapes',
  'Information Architecture',
  'Prototyping',
  'Audio/visual Experiments',
  'Journey Mapping',
  'Set Design',
  'Engagement Strategy',
  'Art Direction',
  'Product Staging',
  'Marketing Strategy',
  'Color Theory',
  'Digital Illustration',
  'Data Visualization'
];

const Services: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-col items-center justify-start gap-2 px-4 pb-12 lowercase md:gap-6 ">
        <p className="font-mono text-sm text-white">
          Some Things <span className="uppercase">I</span> do...
        </p>
        <CycleItems itemsArray={abilitiesArray} />
      </div>
    </Layout>
  );
};

export default Services;
