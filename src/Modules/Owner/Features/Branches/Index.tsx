import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Branches from "./Pages/Branches";

function Index() {
    return (
        <>
            <PageBreadcrumb pageTitle='Filialen' />
            <Branches />
        </>
    );
}

export default Index;
