import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function CycleItems(props: { itemsArray: string[] }) {
  const [items, setItems] = useState(props.itemsArray);
  function nextItems() {
    setItems((prevState) => {
      const newState = structuredClone(prevState);
      if (!newState) return [''];
      const firstItem = newState.shift();
      if (firstItem === '') {
        return newState;
      }
      if (firstItem === undefined) return ['error'];
      newState.push(firstItem);
      return newState;
    });
  }

  useEffect(() => {
    const cycleItems = setInterval(nextItems, 1000);

    return () => {
      clearInterval(cycleItems ?? 0);
    };
  }, []);

  return (
    <motion.p
      key={items[0]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-2 w-full text-center font-glodok text-3xl text-white md:text-6xl">
      {items[0]}
    </motion.p>
  );
}
