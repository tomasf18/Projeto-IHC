import { useAppointmentContext } from '../../contexts/AppointmentContext';
import Localization from './Loc/Localization';
import TypeOfService from './TypeOfService/TypeOfService';
import Service from './Service/Service';
import Professional from './Professional/Professional';
import DateTime from './DateTime/DateTime';
import Summary from './Summary/Summary';
import Confirmed from './Confirmed/Confirmed';

function MakeAppointment() {
  const { currentStep, confirmed } = useAppointmentContext();

  return (
    <div id="container" className='relative grid grid-rows-6 grid-cols-10 md:grid-cols-6 bg-white border-2 border-gray-900 rounded-lg w-full lg:w-8/12 min-h-160 items-center'>
      {currentStep === 1 && <Localization />}
      {currentStep === 2 && <TypeOfService />}
      {currentStep === 3 && <Service />}
      {currentStep === 4 && <Professional />}
      {currentStep === 5 && <DateTime />}
      {currentStep === 6 && <Summary />}
      {confirmed && <Confirmed />}
    </div>
  );
}

export default MakeAppointment;