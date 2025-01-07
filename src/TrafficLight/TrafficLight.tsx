import { useEffect, useState } from 'react';
import './TrafficLight.css';

// Buila a traffic light indicator
// which would change the light from one to another
// after the duration provided below to the next light to which
// reference has been provided
interface TrafficLight {
  backgroundColor: string;
  duration: number;
  next: any;
}
const config: Record<string, TrafficLight> = {
  red: {
    backgroundColor: 'red',
    duration: 5000,
    next: 'green',
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 3000,
    next: 'red',
  },
  green: {
    backgroundColor: 'green',
    duration: 4000,
    next: 'yellow',
  },
};

function TrafficLight() {
  const [currentColor, setcurrentColor] = useState('red');
  useEffect(() => {
    const timer = setTimeout(() => {
      setcurrentColor(config[currentColor].next);
    }, config[currentColor].duration);
    return () => {
      clearTimeout(timer);
    };
  }, [currentColor]);
  return (
    <>
      <ul className="traffic-light">
        {Object.keys(config).map((key, idx) => (
          <li
            key={config[key].backgroundColor + idx}
            className={`light ${currentColor === key ? currentColor : ''}`}
          />
        ))}
      </ul>
    </>
  );
}

export default TrafficLight;
