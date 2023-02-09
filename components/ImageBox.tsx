import React from 'react';
import Image from 'next/image';

export default function ImageBox(props: {
  setImgLoadingComplete?: React.Dispatch<React.SetStateAction<boolean>>;
  boxSize: number;
  className: string;
  src: string;
}) {
  return (
    <div
      className={`flex aspect-square h-auto w-full flex-row items-center justify-center ${props.className}`}>
      <div
        style={{ width: props.boxSize }}
        className="cloud-container absolute aspect-square h-auto">
        <Image
          onLoadingComplete={() => props.setImgLoadingComplete && props.setImgLoadingComplete(true)}
          layout="fill"
          className="h-auto w-full"
          src={props.src}
          alt="black-cloud"
        />
      </div>
    </div>
  );
}
