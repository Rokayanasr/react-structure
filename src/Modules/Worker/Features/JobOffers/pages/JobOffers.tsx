import Employees from "../components/Employees"
import Hero from "../components/Hero"
import JobFilter from "../components/JobFilter"
import { useGetJobOffersQuery } from "@/Modules/Worker/services/jobOffers/slices/JobOffers";
import PharmacyCardSkeleton from "../components/JobLoading";

function JobOffers() {
  const { data: jobOffers,isLoading } = useGetJobOffersQuery();
  console.log(jobOffers);
  return (
    // ... existing code ...
  
       <div className="flex md:flex-row flex-col  p-2 gap-4  ">

   <div className="hidden md:block w-1/2 "> 
       <JobFilter />
   </div>
      <div className="w-full">
        <Hero/>

          {isLoading && <div className="w-full flex flex-col gap-2">
            <div className="grid grid-cols-1 w-full sm:gap-2 md:gap-4 lg:gap-4 xl:grid-cols-2">
              {Array.from({length:4}).map((_, index) => (
                <PharmacyCardSkeleton key={index} />
              ))}  
               </div>
    </div>}
  
    { jobOffers && <Employees jobOffers={jobOffers}   /> }
      </div>

    </div>
  )
}

export default JobOffers 