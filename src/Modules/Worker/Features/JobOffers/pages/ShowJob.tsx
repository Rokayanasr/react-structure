import JobHero from "../components/JobHero"
import JobDetails from "../components/JobDetails"
import { useParams } from "react-router-dom"
import { useGetJobOfferByIdQuery } from "@/Modules/Worker/services/jobOffers/slices/JobOffers"
function ShowJob() {
    const { id } = useParams();
    const { data: jobOffer } = useGetJobOfferByIdQuery(id || "");
    // ... existing code ...
    console.log(jobOffer);
    return (
        <div>
            <JobHero  />
            <JobDetails />
            
        </div>
    );
}
  

export default ShowJob