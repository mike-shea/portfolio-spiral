import React, { useEffect } from 'react';
import { RectReadOnly } from 'react-use-measure';

export default function useWindowBox(bounds: RectReadOnly) {
  const boxSize = bounds.width === 0 ? 500 : Math.max(bounds.width, bounds.height) / 3;
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--windowTop',
      `-${bounds.height === 0 ? 1000 : bounds.height}px`
    );
    document.documentElement.style.setProperty(
      '--windowBottom',
      `${bounds.height === 0 ? 1000 : bounds.height}px`
    );
    document.documentElement.style.setProperty(
      '--windowLeft',
      `-${bounds.width === 0 ? 1000 : bounds.width}px`
    );
    document.documentElement.style.setProperty(
      '--windowRight',
      `${bounds.width === 0 ? 1000 : bounds.width}px`
    );
    document.documentElement.style.setProperty(
      '--windowXCenter',
      `${Math.round(bounds.width / 2 - boxSize / 2)}px`
    );
    document.documentElement.style.setProperty(
      '--windowYCenter',
      `${Math.round(bounds.height / 2 - boxSize / 2)}px`
    );
  }, [bounds]);
  return boxSize;
}
