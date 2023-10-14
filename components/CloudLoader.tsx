import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import useWindowBox from '../hooks/useWindowBox';
import type { Variants } from 'framer-motion';
import {
  motionBlackCloud,
  motionRedCircle,
  variantCount,
  VariantType
} from '../data/loaderAnimation/loaderAnimation4';

import blackCloudPng from '/public/black-cloud.png';
import redCirclePng from '/public/red-circle.png';
import { blackCloudLoadHash, redCircleLoadHash } from '../data/loaderAnimation/loadHash';

function ImageBox(props: {
  id: string;
  src: string;
  loadHash: string;
  variants: Variants;
  scale?: number[];
  boxSize: number;
}) {
  return (
    <motion.div
      key={props.id}
      variants={props.variants}
      initial="start"
      animate="end"
      exit="exit"
      className="absolute"
      transition={{ duration: props.boxSize / 400 }}
      style={{ width: props.boxSize, height: props.boxSize, willChange: 'transform' }}>
      <motion.div
        className="h-full w-full "
        key={props.id}
        animate={{ scale: [2.5, 1], transition: { duration: 1 } }}
        exit={{ scale: [1, 2.5], transition: { duration: 1 } }}>
        <Image
          priority
          placeholder="blur"
          blurDataURL={props.loadHash}
          layout="fill"
          src={props.src}
          alt={props.id}
        />
      </motion.div>
    </motion.div>
  );
}

function getTypedKeys<T extends object>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}

export default function CloudLoader(props: { children: React.ReactNode }) {
  const [ref, bounds] = useMeasure();
  const boxSize = useWindowBox(bounds);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.1 } }}
        exit={{ opacity: 0, transition: { delay: 0.75, duration: 0.1 } }}>
        {props.children}
      </motion.div>
      <motion.div
        ref={ref}
        style={{ willChange: 'transform' }}
        className="pointer-events-none absolute top-0 left-0 right-0 bottom-0 z-30 overflow-hidden">
        {getTypedKeys(motionRedCircle).map((circle) => (
          <ImageBox
            loadHash={redCircleLoadHash}
            key={`redCircle-${circle}`}
            id={`redCircle-${circle}`}
            src={redCirclePng.src}
            variants={motionRedCircle[circle] ?? {}}
            boxSize={boxSize}
          />
        ))}
        {getTypedKeys(motionBlackCloud).map((cloud) => {
          return (
            <ImageBox
              loadHash={blackCloudLoadHash}
              key={`blackcloud-${cloud}`}
              id={`blackcloud-${cloud}`}
              src={blackCloudPng.src}
              variants={motionBlackCloud[cloud] ?? {}}
              boxSize={boxSize}
            />
          );
        })}
      </motion.div>
    </>
  );
}
