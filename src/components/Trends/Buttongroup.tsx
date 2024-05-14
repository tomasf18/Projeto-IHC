import React, { useState } from 'react';
import classNames from 'classnames';

interface ButtonGroupProps {
  buttonNumber: number;
  onButtonClick: (buttonNumber: number) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttonNumber, onButtonClick }) => {
  const [activeButton, setActiveButton] = useState<number>(buttonNumber);

  // Function to handle button click
  const handleButtonClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
    onButtonClick(buttonNumber); // Call the callback function provided as prop
  };

  return (

    
    <div className="flex flex-row justify-center items-center ">
      <a
        className={classNames(
          'text-xl w-24 border-2 border-black rounded-l-lg px-2 my-2 hover:cursor-pointer hover:text-white hover:shadow-lg font-medium text-center transition-all duration-300 ease-in-out',
          {
            'bg-cyan-700 text-white': activeButton === 1,
            'hover:bg-cyan-500': activeButton !== 1,
          }
        )}
        onClick={() => handleButtonClick(1)}
      >
        Man
      </a>
      <button
        className={classNames(
          'text-xl w-24 border-2 border-black rounded-r-lg px-2 my-2 hover:cursor-pointer hover:text-white hover:shadow-lg font-medium text-center transition-all duration-300 ease-in-out',
          {
            'bg-cyan-700 text-white': activeButton === 2,
            'hover:bg-cyan-500': activeButton !== 2,
          }
        )}
        onClick={() => handleButtonClick(2)}
      >
        Woman
      </button>
    </div>
    
  );
};

export default ButtonGroup;
