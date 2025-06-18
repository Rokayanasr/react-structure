import { BedIcon, CLockIcon, LabCoatIcon, MapPin, PhoneIcon, PostageIcon, UserSliderIcon, VehicleIcon } from '@/assets/icons';
import { useGetJobOfferByIdQuery } from '@/Modules/Worker/services/jobOffers/slices/JobOffers';
import { useParams } from 'react-router-dom';

function JobDetails() {
  // ... existing code ...
  const { id } = useParams();
  const { data: jobOffer } = useGetJobOfferByIdQuery(id || "");
  
  return (
    <div className=" flex md:flex-row flex-col  gap-8 pt-4 mx-auto font-sans">
<div className='md:w-1/2 h-full flex flex-col gap-4'>
<div className="bg-white rounded-xl  overflow-hidden shadow-[5px_5px_20px_5px_rgba(0,0,0,0.08)] p-6">
        <div className="space-y-4">
        <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
              <MapPin  />
              <div>
                <p className="text-brand-500 font-normal text-sm">Adresse der Apotheke</p>
                
              </div>
            </div>
            <p className="font-medium">{jobOffer?.pharmacy?.address}</p>
        </div>
          
        <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
            <PostageIcon  />
              <div>
              <p className="text-brand-500 font-normal text-sm">PLZ & Ort</p>
                
              </div>
            </div>
              <p className="font-medium">{jobOffer?.pharmacy?.city}</p>
        </div>
       
          
        {/* <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
            <Estatecon  />
              <div>
              <p className="text-brand-500 font-normal text-sm">Bundesland</p>
                
              </div>
            </div>
              <p className="font-medium">Bayern</p>
        </div> */}
        <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
            <PhoneIcon  />
              <div>
              <p className="text-brand-500 font-normal text-sm">Telefonnummer</p>
                
              </div>
            </div>
              <p className="font-medium">{jobOffer?.pharmacy?.phone}</p>
        </div>

      
          
       
       
        </div>
      </div>
      <div className='bg-white rounded-xl overflow-hidden shadow-[5px_5px_20px_5px_rgba(0,0,0,0.08)] p-6'>
        <h3 className="text-lg font-semibold text-brand-500 mb-4">Arbeitsplan</h3>
        <div className='grid grid-cols-1 gap-4'>
          <div className='grid grid-cols-3 gap-2 bg-gray-50 p-2 rounded-lg'>
            <p className='font-semibold text-brand-500'>Datum</p>
            <p className='font-semibold text-brand-500'>Start</p>
            <p className='font-semibold text-brand-500'>Ende</p>
          </div>
          {jobOffer?.work_schedule.map((item) => (
            <div key={item.start_time} className='grid grid-cols-3 gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors'>
              <p className='text-gray-700'>{item.work_date}</p>
              <p className='text-gray-700'>{item.start_time}</p>
              <p className='text-gray-700'>{item.end_time}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      
<div className="bg-white rounded-xl overflow-hidden md:w-1/2 shadow-[5px_5px_20px_4px_rgba(0,0,0,0.08)] p-6">
        <div className="space-y-4">
           <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
            <CLockIcon  />
              <div>
              <p className="text-brand-500 font-semibold text-sm">Arbeitszeiten (pro Tag)</p>
                
              </div>
            </div>
              <p className="font-medium">{jobOffer?.working_hours_per_day} Stunden</p>
        </div>
           <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
            <LabCoatIcon  />
              <div>
              <p className="text-brand-500 font-semibold text-sm">Berufskleidung mitnehmen:</p>
                
              </div>
            </div>
              <p className="font-medium">Nein</p>
        </div>
           <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
            <VehicleIcon  />
              <div>
              <p className="text-brand-500 font-semibold text-sm">Parkplatz vorhanden</p>
                
              </div>
            </div>
              <p className="font-medium">Nein</p>
        </div>
           <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
            <BedIcon  />
              <div>
              <p className="text-brand-500 font-semibold text-sm">Schlafzimmer bei Notdienst</p>
                
              </div>
            </div>
              <p className="font-medium">Ja</p>
        </div>
           <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
            <UserSliderIcon  />
              <div>
              <p className="text-brand-500 font-semibold text-sm">WWS (Kassenprogramm)</p>
                
              </div>
            </div>
              <p className="font-medium">Aposoft</p>
        </div>
     
          
          
       
         
          
          <div className=" pt-3">
            <p className="text-md text-brand-500">Für die tägliche Vertretung gibt es eine Fahrkostenpauschale von 20€ bis 21 km. Ab 21 km kommen 38 Cent pro km dazu .</p>
            <p className="font-medium mt-1">Yes</p>
            
            <div className="mt-3">
              <p className="text-sm text-gray-600 font-medium" >
                Other 
              </p>
           
                <p className="mt-1 text-sm">test</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  export default JobDetails