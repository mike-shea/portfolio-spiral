import React, { useContext } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import MouseContext from '../contexts/mouse-context';

function LinkChangeCursor() {
  const contextState = useContext(MouseContext);
  return (
    <a
      href="mailto:hi@nakiskashaikh.com"
      onMouseLeave={contextState.mouseExitEvent}
      onMouseEnter={contextState.mouseEnterEvent}
      className="group z-10  p-4">
      <h1 className="font-glodok text-6xl text-white">contact@email.com</h1>
      <div className="h-2 w-full origin-right scale-x-0 bg-red-500 transition duration-500 ease-in-out group-hover:origin-left group-hover:scale-x-100 "></div>
    </a>
  );
}

const Services: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-col items-center justify-start gap-2 px-4 pb-12 md:gap-6 ">
        <p className="font-mono text-sm text-white">contact blurb here</p>
        <LinkChangeCursor />
      </div>
    </Layout>
  );
};

export default Services;
