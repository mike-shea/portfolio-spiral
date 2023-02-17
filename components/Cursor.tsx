import React, { useContext } from 'react';
import Image from 'next/image';
import MouseContext from '../contexts/mouse-context';

export default function Cursor() {
  const contextState = useContext(MouseContext);
  return (
    <>
      <div
        ref={contextState.cursorRef}
        className="pointer-events-none absolute z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition duration-300">
        <p className="pointer-events-none flex aspect-square h-auto w-24 items-center justify-center rounded-full border border-white text-xs text-white">
          {contextState.fullScreenVideo ? 'Pause Reel' : 'Play Reel'}
        </p>
      </div>
      <div
        ref={contextState.cursor2Ref}
        className="pointer-events-none absolute z-50 ml-12 -mt-14 aspect-square h-auto w-8 transition">
        <Image
          className="animate-spin-slow"
          alt="red-cloud-spin"
          priority={true}
          layout="fill"
          src="/red-cloud.png"
        />
      </div>
    </>
  );
}
