import { useEffect, useState } from 'react';

type QuantityProps = {
  value: number;
};

const Quantity = ({ value }: QuantityProps) => {
  const [prev, setPrev] = useState(value);
  const [dir, setDir] = useState<'up' | 'down'>('up');

  useEffect(() => {
    if (value > prev) setDir('up');
    else if (value < prev) setDir('down');
    setPrev(value);
  }, [value, prev]);


  return (
    <span key={`${value}-${dir}`} className={`quantity-anim ${dir}`}>
      {value}
    </span>
  );
};

export default Quantity;
