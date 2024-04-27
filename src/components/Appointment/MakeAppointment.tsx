import { useAppointmentContext } from '../../contexts/AppointmentContext';
import Localization from './Loc/Localization';
import TypeOfService from './TypeOfService/TypeOfService';
import Service from './Service/Service';
import Professional from './Professional/Professional';
import DateTime from './DateTime/DateTime';
import Summary from './Summary/Summary';
import Confirmed from './Confirmed/Confirmed';

function MakeAppointment() {
  const { currentStep } = useAppointmentContext();

  /*
      
      
      {currentStep === 4 && <Professional />}
      {currentStep === 5 && <DateTime />}
      {currentStep === 6 && <Summary />}
      {currentStep === 7 && <Confirmed />}
  */

  return (
    <div id="container" className='grid grid-rows-6 grid-cols-6 bg-white p-2 rounded-lg shadow-md w-1/2 min-h-144 items-center border-4 border-cyan-950'>
      {currentStep === 1 && <Localization />}
      {currentStep === 2 && <TypeOfService />}
      {currentStep === 3 && <Service />}
    </div>
  );
}

export default MakeAppointment;