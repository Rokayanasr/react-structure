import { CalenderIcon, Cash, MapPin } from "@/assets/icons";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModal";

 function JobHero() {
          const { isOpen, openModal, closeModal } = useModal();

    const Card={
         title: "Test Offer by Worker",
  category : "Pharmacist",
  location : "Test City",
  hourlyRate : 250,
  publishedDate : "2 Wochen",
  firstWorkingDay : "31/03/2025",
  lastWorkingDay : "18/03/2025",
  workingDays : "01 {dot}} 02 . 2023, 02 {dot}} 05 {dot}} 2024, 20 {dot} . 2023",
  totalDays : 4
    }
  return (
    <div className=" w-full bg-white rounded-lg  p-4 md:p-6">
      <div className="flex flex-col md:flex-row  justify-between mb-4 gap-4">

        <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-black">{Card.title}</h1>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <span className="bg-blue-light-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                  {Card.category}
                </span>
                <div className="flex items-center text-brand-400 text-sm">
                  <CalenderIcon className="h-4 w-4  mr-1" />
                  <span>Veröffentlicht vor  {Card.publishedDate}</span>
                </div>
        </div>
          </div>
    
       <div>
         
         <button onClick={()=>openModal()} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
         Schon beantragt
         </button>
       </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 my-4">
        <div className="flex items-center gap-2 text-black">
          <MapPin  />
          <span>{Card.location}</span>
        </div>
        
        <div className="flex items-center gap-2 text-black">
          <Cash  />
          <span>der Preis: ${Card.hourlyRate} pro Stunde </span>
        </div>
      </div>
      
      <div className=" pt-4 mt-2">
        <div className="grid grid-cols-1  gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-2 ">
              <span className="font-bold text-brand-700">Erster Arbeitstag::</span>
              <span className="text-brand-500">{Card.firstWorkingDay}</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="font-bold text-brand-700">Letzter Arbeitstag:</span>
              <span className="text-brand-500">{Card.lastWorkingDay}</span>
            </div>
          </div>
          
          <div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <p className="font-semibold text-brand-700">Weitere Arbeitstage:{Card.workingDays}</p>
               <p className="font-semibold text-brand-700">Insgesamt Arbeitstage dieses Angebots.: 4 :{Card.totalDays}</p>
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
                      <div className="flex items-start gap-2 text-sm text-gray-700">
      <input
        type="checkbox"
        id="consent"
        className="mt-1.5 border-gray-300 focus:ring-0 text-blue-600"
      />
      <label htmlFor="consent" className="leading-relaxed text-start">
        Ich willige ein, dass extra-pharm.de von mir ggfs. (bspw. im Rahmen eines Lebenslaufs) übermittelte personenbezogene Daten, insbesondere sensible Daten im Sinne von Art.9 DSGVO (bspw. Gesundheitsdaten) speichert und im Falle einer erfolgreichen Vermittlung Rahmen des Vertragszwecks an die registrierte Apotheke übermittelt. Die Einwilligung kann ich jederzeit mit Wirkung für die Zukunft widerrufen. Details zur Datenverarbeitung finde ich im{" "}
        <a href="#" className="text-blue-light-500 font-semibold underline hover:blue-light-600">
          AGB <span className="text-gray-700">&</span> Datenschutz
        </a>
        .
      </label>
    </div>

   <button onClick={()=>closeModal()} className="bg-brand-500 hover:bg-brand-400 text-white px-6 py-2 rounded-md font-medium transition-colors">
         Schon beantragt
         </button>
         </div>
           
              </Modal>
    </div>
  );
}

export default JobHero
