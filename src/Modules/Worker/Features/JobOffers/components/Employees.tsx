import PharmacyCard  from "@/components/common/PharmacyCard";
import { JobOffer } from "../types/jobOffers.type";
interface EmployeesProps {
  jobOffers: JobOffer[] 
}

const Employees:React.FC<EmployeesProps> = ({ jobOffers }) => {
  // ... existing code ...
 

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="grid grid-cols-1 w-full sm:gap-2 md:gap-4 lg:gap-4 xl:grid-cols-2">
        {jobOffers.map((jobOffer, index) => (
          <PharmacyCard jobOffer={jobOffer}  key={index} to={`/offers/${jobOffer.id}`}/>
        ))}
      </div>
    </div>
  )
}

export default Employees