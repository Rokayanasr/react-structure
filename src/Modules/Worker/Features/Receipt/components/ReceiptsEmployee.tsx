import PharmacyCard, { PharmacyData } from "@/components/common/PharmacyCard";
import Input from "@/components/form/input/InputField";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModal";

function ReceiptsEmployee() {
    const profiles: PharmacyData[] = [
  {
    id:1,
    name: "Unicorn pharmacy",
    pharmacyId: "03.08.31/08",
    applicationDate: "05.01.2025",
    startDate: "09.01.2025",
    location: "44809 Bochum",
    hourlyRate: 250,
    fees: 50,
        imageUrl: "./images/user/owner.jpg",
  },
  {    id:2,

    name: "Löwen Apotheke",
    pharmacyId: "12.04.22/15",
    applicationDate: "10.01.2025",
    startDate: "15.01.2025",
    location: "50667 Köln",
    hourlyRate: 230,
    fees: 40,
        imageUrl: "./images/user/owner.jpg",
  },
  {    id:3,

    name: "Adler Apotheke",
    pharmacyId: "07.09.19/23",
    applicationDate: "20.12.2024",
    startDate: "05.01.2025",
    location: "20095 Hamburg",
    hourlyRate: 240,
    fees: 45,
        imageUrl: "./images/user/owner.jpg",
  },
  {
        id:4,

    name: "Rathaus Apotheke",
    pharmacyId: "11.11.20/30",
    applicationDate: "01.01.2025",
    startDate: "10.01.2025",
    location: "80331 München",
    hourlyRate: 260,
    fees: 55,
        imageUrl: "./images/user/owner.jpg",
  }
];

          const { isOpen, openModal, closeModal } = useModal();


  return (
  <div className="w-full">
     <div className="grid grid-cols-1 sm:gap-2 md:gap-4 w-full lg:gap-8 md:grid-cols-2">
        {profiles.map((Employee, index) => (
          <PharmacyCard BtnTitle=" Rechnung senden" profile={Employee} to={`/receipts/${Employee.id}`} onClick={openModal} key={index} />
        ))}
      </div>
         <Modal
                      isOpen={isOpen}
                      onClose={closeModal}
                      className="max-w-[600px]  p-6 "
                    >
                        <div className="flex flex-col gap-8 text-center">
                                              <h1 className="text-2xl text-brand-500 font-semibold">Bitte geben Sie den km-Zähler ein</h1>

                            <div>
                  <Input className="bg-brand-300" />
                </div>
          
   <button onClick={()=>closeModal()} className="bg-brand-500 hover:bg-brand-400 text-white px-6 py-2 rounded-md font-medium transition-colors">
    Senden
         </button>
         </div>
                 
                    </Modal>
  </div>

  )
}

export default ReceiptsEmployee