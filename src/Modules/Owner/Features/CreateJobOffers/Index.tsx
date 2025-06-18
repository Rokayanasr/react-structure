import CreateJobOffer from "./Pages/CreateJobOffer";
import PageMeta from "@/components/common/PageMeta";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

function Index() {
  return (
    <div>
        <PageMeta title="Arbeitsangebot erstellen" description="Erstellen Sie ein neues Arbeitsangebot" />
        <PageBreadcrumb pageTitle="Arbeitsangebot erstellen" />
        <CreateJobOffer />
    </div>
  )
}

export default Index