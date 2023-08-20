import { useRef, useState, useEffect } from "react";
import "./slider.css";
import "./thumb.css";

// https://www.youtube.com/watch?v=vh-9myT8-yc ???


type ProgressBarProps = {
  percentage: number;
  onChange: React.ChangeEventHandler;
}

const ProgressBar = ({ percentage = 0, onChange }: ProgressBarProps) => {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef<HTMLInputElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rangeWidth = rangeRef.current!.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current!.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar = thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage;
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  return (
    <div className="slider-container">
      <div className="progress-bar-cover" style={{ width: `${progressBarWidth}` }}></div>
      <div ref={thumbRef} style={{ left: `${position}%`, marginLeft: `${marginLeft}px` }}></div>
      <input 
        type="range"
        value={position}
        ref={rangeRef}
        step="0.01"
        className="range"
        onChange={onChange}
      />
    </div>
  );
}
 
export default ProgressBar;