import { CalenderIcon, Cash, MapPin } from "@/assets/icons";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModal";
import { useGetJobOfferByIdQuery } from "@/Modules/Worker/services/jobOffers/slices/JobOffers";
import { useParams } from "react-router-dom";

function JobHero() {
  const { id } = useParams();
  const { data: jobOffer } = useGetJobOfferByIdQuery(id || "");
  // ... existing code ...
  console.log(jobOffer);
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className=" w-full bg-white rounded-lg  p-4 md:p-6">
      <div className="flex flex-col md:flex-row  justify-between mb-4 gap-4">

        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-black">{jobOffer?.pharmacy?.name}</h1>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="bg-blue-light-500 text-white px-3 py-1 rounded-md text-sm font-medium">
              {jobOffer?.salary?.job_type}
            </span>
            <div className="flex items-center text-brand-400 text-sm">
              <CalenderIcon className="h-4 w-4  mr-1" />
              <span>Veröffentlicht vor  {jobOffer?.created_at}</span>
            </div>
          </div>
        </div>

        <div>

          <button onClick={() => openModal()} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Bewerb Dich Hier
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 my-4">
        <div className="flex items-center gap-2 text-black">
          <MapPin />
          <span>{jobOffer?.pharmacy?.city}</span>
        </div>

        <div className="flex items-center gap-2 text-black">
          <Cash />
          <span>der Preis: ${jobOffer?.salary?.amount} pro Stunde </span>
        </div>
      </div>

      <div className=" pt-4 mt-2">
        <div className="grid grid-cols-1  gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-2 ">
              <span className="font-bold text-brand-700">Erster Arbeitstag:</span>
              <span className="text-brand-500">{jobOffer?.work_schedule[0]?.work_date}</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="font-bold text-brand-700">Letzter Arbeitstag:</span>
              <span className="text-brand-500">{jobOffer?.work_schedule[jobOffer?.work_schedule.length - 1]?.work_date}</span>
            </div>
          </div>

          <div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <p className="font-semibold text-brand-700">Weitere Arbeitstage: 0</p>
              <p className="font-semibold text-brand-700">Insgesamt Arbeitstage dieses Angebots.:{jobOffer?.total_days}</p>
            </div>

          </div>
        </div>
      </div>
      <Modal
        showCloseButton={false}
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[500px]  p-6 "
      >
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-2xl text-brand-500 font-semibold">Fur diese stelle bewerben</h1>
          <p>Sie mussen ihre <span className="font-semibold text-blue-light-500">profil-daten</span> ausfullen, damit konnen sie sich bewerben!</p>
          <button onClick={() => closeModal()} className="bg-brand-500 hover:bg-brand-400 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Bewerb Dich Hier
          </button>
        </div>

      </Modal>
    </div>
  );
}

export default JobHero
