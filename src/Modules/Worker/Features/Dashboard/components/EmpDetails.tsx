import { BedIcon, CLockIcon, Estatecon, LabCoatIcon, MapPin, PhoneIcon, PostageIcon, UserSliderIcon, VehicleIcon } from '@/assets/icons';

// ... existing code ...
function PharmacyInfo() {
  
  return (
    <div className=" flex md:flex-row flex-col  gap-8 pt-4 mx-auto font-sans">
<div className="bg-white rounded-xl md:w-1/2 h-full overflow-hidden shadow-[5px_5px_20px_5px_rgba(0,0,0,0.08)] p-6">
        <div className="space-y-4">
        <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
              <MapPin  />
              <div>
                <p className="text-brand-500 font-normal text-sm">Adresse der Apotheke</p>
                
              </div>
            </div>
            <p className="font-medium">Test Street</p>
        </div>
          
        <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
            <PostageIcon  />
              <div>
              <p className="text-brand-500 font-normal text-sm">PLZ & Ort</p>
                
              </div>
            </div>
              <p className="font-medium">Test City</p>
        </div>
          
        <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
            <Estatecon  />
              <div>
              <p className="text-brand-500 font-normal text-sm">Bundesland</p>
                
              </div>
            </div>
              <p className="font-medium">Bayern</p>
        </div>
        <div className='flex flex-col gap-1'>
            <div className="flex items-center  gap-4">
            <PhoneIcon  />
              <div>
              <p className="text-brand-500 font-normal text-sm">Telefonnummer</p>
                
              </div>
            </div>
              <p className="font-medium">01234567890</p>
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
              <p className="font-medium">08:30 bis 16:15</p>
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
export default PharmacyInfo