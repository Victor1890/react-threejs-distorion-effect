import React, { useState } from "react";
import "./slider.scss";

interface Props {
  size: number;
  onItem: (index: number) => void;
}

export const Slider = ({ size, onItem }: Props) => {
  const [active, setActive] = useState<number>(0);

  const handleClick = (index: number | any) => {
    setActive(index);
    onItem(index);
  };
  return (
    <div className='slider' style={{ top: `calc(50% - ${size * 30}px)` }}>
      {[...Array(size)].map((_, index) => {
        return (
          <div
            key={index}
            className={`slider__item ${
              index === active ? "slider__item-active" : ""
            }`}
            onClick={() => handleClick(index)}
          ></div>
        );
      })}
    </div>
  );
};
