import JobOfferView from "../components/JobOfferView";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

const JobOfferDetailsPage = () => {
    return (
        <div className='overflow-x-hidden'>
            <PageBreadcrumb pageTitle='Angebot ansehen' parentTitle='Angebote verwalten' parentPath='../' />
            <JobOfferView />
        </div>
    );
};

export default JobOfferDetailsPage;

