import React, { useEffect, useState } from 'react';

export default function useInView(ref: React.MutableRefObject<null>, listeners: any[]) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (ref && ref.current) {
      setInView(true);
    } else {
      setInView(false);
    }
  }, [...listeners]);
  return inView;
}
