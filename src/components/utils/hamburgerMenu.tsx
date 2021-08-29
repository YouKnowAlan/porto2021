import React, { useState } from 'react';
import hamStyles from '@/styles/components/hamburger.module.css';

export default function Hamburger(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickHam = () => {
    setIsOpen(!isOpen);
    props.menuOpen(!isOpen);
  };

  return (
    <button
      type="button"
      className={hamStyles.hamburger}
      onClick={handleClickHam}
    >
      <div
        className={`${hamStyles.hamLine} ${
          isOpen ? hamStyles.hamLineTopRotate : ``
        }`}
      />
      <div className={`${hamStyles.hamLine} ${isOpen ? `opacity-0` : ``}`} />
      <div
        className={`${hamStyles.hamLine} ${
          isOpen ? hamStyles.hamLineBottomRotate : ``
        }`}
      />
    </button>
  );
}
