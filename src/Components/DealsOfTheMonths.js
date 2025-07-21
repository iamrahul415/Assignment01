import React, { useEffect, useState } from 'react';
import leftModel from '../assets/image 2.png';

const DealsOfTheMonths = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 6,
    minutes: 5,
    seconds: 30,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div className=" flex justify-center max-w-[1080px] bg-gradient-to-br from-white to-gray-100 py-10 px-6">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        
        {/* Left Side */}
        <div className="">
          <h2 className="text-4xl font-serif text-gray-800">Deals Of The Month</h2>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
          </p>
          <p className="text-gray-500 mt-1">
            Scelerisque duis ultrices sollicitudin
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800">
            Buy Now
          </button>

          <div className="mt-10">
            <h4 className="text-xl text-gray-600 font-semibold mb-4">Hurry, Before It’s Too Late!</h4>
            <div className="flex space-x-4 text-gray-600 ">
              {[
                { label: 'Days', value: pad(timeLeft.days) },
                { label: 'Hr', value: pad(timeLeft.hours) },
                { label: 'Mins', value: pad(timeLeft.minutes) },
                { label: 'Sec', value: pad(timeLeft.seconds) },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="bg-white px-4 py-2 rounded-lg shadow text-2xl font-bold font-mono">
                    {item.value}
                  </div>
                  <p className="mt-1 text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Slider */}
        <div className="relative w-full lg:w-2/3 overflow-hidden">
          <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative min-w-[280px] max-w-[300px]">
                <img
                  src={leftModel}
        
                  alt={`Deal ${3}`}
                  className="rounded-md w-full object-cover"
                />
                <div className="absolute bottom-8 left-6 bg-white px-4 py-4 rounded-md shadow-md text-base">
                  <p className="text-gray-500">01— Spring Sale</p>
                  <p className="text-xl font-light text-gray-800">30% OFF</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-200">
            ❮
          </div>
          <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-200">
            ❯
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === 0 ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheMonths;
