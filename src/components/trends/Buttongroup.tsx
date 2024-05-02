import  { useState } from 'react';
import classNames from 'classnames';

const ButtonGroup = ({ buttonNumber, onButtonClick }) => {
  const [activeButton, setActiveButton] = useState(buttonNumber);

  // Function to handle button click
  const handleButtonClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
    onButtonClick(buttonNumber); // Call the callback function provided as prop
  };

  return (
    <div className="justify-center">
      <button
        className={classNames(
          'px-4 py-2 rounded-l-md',
          {
            'bg-blue-500 text-white': activeButton === 1,
            'bg-gray-200 text-gray-700': activeButton !== 1,
          }
        )}
        onClick={() => handleButtonClick(1)}
      >
        Masculino
      </button>
      <button
        className={classNames(
          'px-4 py-2 rounded-r-md',
          {
            'bg-blue-500 text-white': activeButton === 2,
            'bg-gray-200 text-gray-700': activeButton !== 2,
          }
        )}
        onClick={() => handleButtonClick(2)}
      >
        Feminino
      </button>
    </div>
  );
};

export default ButtonGroup;