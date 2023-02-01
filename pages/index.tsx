import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { BlackCloudSvg, NakiskaLogoSvg, RedCircleSvg } from '../components/IconComponents';
import Spinner from '../components/Spinner';

function Cloud(props: { cloudColour: string; placement: string; zIndex: number }) {
  const randomIndex = Math.floor(Math.random() * 3) + 1;
  return (
    <div
      style={{ gridArea: props.placement, zIndex: props.zIndex }}
      className={`move${randomIndex} clouds relative`}>
      <BlackCloudSvg classGroup={`inner-cloud shrink-inner`} className={`${props.cloudColour}`} />
    </div>
  );
}

function Circle(props: { placement: string; index: string; animate: string }) {
  const randomIndex = Math.floor(Math.random() * 3) + 1;
  return (
    <div
      style={{ gridArea: props.placement, zIndex: props.index }}
      className={`${props.animate} relative scale-150`}>
      <RedCircleSvg classGroup={`inner-circle`} />
    </div>
  );
}

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen grow flex-col items-center justify-center bg-black">
        <Spinner />
      </div>
    );
  }
  const circle1Pos = '1 / 1 / span 1 / span 1';
  const circle2Pos = '2 / 2 / span 1 / span 1';
  const circle3Pos = '3 / 1 / span 1 / span 1';

  return (
    <div className="relative flex min-h-screen grow flex-col items-center bg-white p-8">
      <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-3 grid-rows-3 overflow-hidden">
        {Array.from({ length: 9 }).map((item, index) => {
          const row = index < 3 ? 1 : index < 6 ? 2 : index < 9 ? 3 : 3;
          const col = (index % 3) + 1;
          return (
            <Cloud
              zIndex={2}
              key={`cloud-${index}`}
              placement={`${row} / ${col} / span 1 / span 1`}
              cloudColour="fill-black"
            />
          );
        })}
        <Circle animate="moveCircle1" placement={circle1Pos} index="1" />
        <Circle animate="moveCircle2" placement={circle2Pos} index="1" />
        <Circle animate="moveCircle3" placement={circle3Pos} index="1" />
      </div>

      <Head>
        <title>Spiral Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full w-full grow flex-col items-center overflow-hidden bg-black">
        <nav className="flex w-full justify-between p-7">
          <NakiskaLogoSvg className="fill-red-600" />
          <p className="font-mono text-white">contact</p>
        </nav>
        <section className="flex h-full w-full grow items-center justify-center">
          <h1 className="text-center font-benguia text-3xl font-medium text-white lg:text-5xl lg:leading-tight">
            I&apos;m Nakiska, <br />
            creative director & <br />
            experience designer <br />
            based in Brooklyn.
          </h1>
        </section>
        <footer className="flex w-full justify-between p-7">
          <p className="font-mono text-white">services</p>
          <p className="font-mono text-white">clients</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
