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
          'text-xl border-2 border-black rounded-l-lg px-2 my-2 hover:cursor-pointer hover:bg-slate-300',
          {
            'bg-slate-500 text-white': activeButton === 1,
            'bg-gray-200 text-gray-700': activeButton !== 1,
          }
        )}
        onClick={() => handleButtonClick(1)}
      >
        Homem
      </a>
      <button
        className={classNames(
          'text-xl border-2 border-black rounded-r-lg px-2 my-2 hover:cursor-pointer hover:bg-slate-300',
          {
            'bg-slate-500 text-white': activeButton === 2,
            'bg-gray-200 text-gray-700': activeButton !== 2,
          }
        )}
        onClick={() => handleButtonClick(2)}
      >
        Mulher
      </button>
    </div>
  );
};

export default ButtonGroup;
