import React, { useEffect, useRef, useState } from 'react';

interface TotalPriceProps {
  totalPrice: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ totalPrice }) => {
  const [animatedPrice, setAnimatedPrice] = useState(totalPrice);
  const rafRef = useRef<number | null>(null); 

  useEffect(() => {
    const duration = 500;
    const start = performance.now();
    const initial = animatedPrice;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const newPrice = Math.floor(initial + (totalPrice - initial) * progress);
      setAnimatedPrice(newPrice);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [totalPrice]);

  return <p className='all-price'>Общая сумма: {animatedPrice.toLocaleString()} Р</p>;
};

export default TotalPrice;
