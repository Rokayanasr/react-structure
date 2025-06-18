import { Cash, MapPin, CalenderIcon } from "@/assets/icons"; 
import { FC } from "react";  
import { useNavigate } from "react-router";
import { JobOffer } from "@/Modules/Worker/Features/JobOffers/types/jobOffers.type";


interface ProfileCardProps {
  jobOffer: JobOffer; 
  BtnTitle?:string
  onClick?:()=>void
  to?:string
}  

const PharmacyCard: FC<ProfileCardProps> = ({ jobOffer,BtnTitle,to}) => {
  console.log(jobOffer)
  const navigate=useNavigate()
  return (
    <div className="w-full  bg-white rounded-2xl p-4 shadow-md cursor-pointer " onClick={()=>navigate(to||"/")}>
      <div className="grid grid-cols-4 md:gap-4">
        <div className="col-span-1 flex justify-center ">
          <img 
            src={jobOffer?.pharmacy?.photo || "/api/placeholder/80/80"} 
            alt={jobOffer?.pharmacy?.name} 
            className="h-20 w-20 rounded-full object-cover" 
          />
        </div>
        
        <div className="col-span-3 sm:col-span-3 space-y-2 text-sm text-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 text-center sm:text-left">
                {jobOffer?.pharmacy?.name} 
          </h3>
          
          <div className="flex items-center">
            <CalenderIcon className="w-5 h-5 mr-2" />
            <span>Bewerbungsdatum: {jobOffer?.created_at}</span>
          </div>
          
          <div className="flex items-center">
            <CalenderIcon className="w-5 h-5 mr-2" />
            <span>Erster Arbeitstag: {jobOffer?.work_schedule[0]?.work_date}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Ort: {jobOffer?.job_location.name}</span>
          </div>
          
          <div className="flex items-center">
            <Cash className="w-5 h-5 mr-2" />
            <span>  Gehalt: {jobOffer?.salary.amount} pro Stunde</span>
          </div>
          
          <div className="flex items-center">
            <Cash className="w-5 h-5 mr-2" />
            <span>Gebühren: 2000 pro Stunde</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-2 pt-2">
            <p className="border-2 text-brand-500  text-center    bg-[#A4D1DF] w-full text-nowrap font-semibold px-6 py-2 rounded-md ">
             {jobOffer?.salary?.job_type}
            </p>
{BtnTitle &&            <button   
 className="bg-blue-light-500 w-full  text-center text-white md:px-4 lg:px-6 py-2 rounded-md font-medium transition-colors">
             {BtnTitle}
            </button>}
          </div>
        </div>
      </div>
    </div>
  ); 
};  

export default PharmacyCard;  