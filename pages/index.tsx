import type { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-center font-benguia text-3xl font-medium text-white lg:font-glodok lg:text-6xl lg:leading-tight">
        I&apos;m Nakiska, <br />
        creative director & <br />
        experience designer <br />
        based in Brooklyn.
      </h1>
    </Layout>
  );
};

export default Home;
