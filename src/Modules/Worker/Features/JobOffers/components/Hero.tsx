import { FilterIcon } from '@/assets/icons';
import Select from '@/components/form/Select';
import { Modal } from '@/components/ui/modal';
import { useModal } from '@/hooks/useModal';
// import React from 'react'
import JobFilter from './JobFilter';
type Option = {
  label: string;
  // ... existing code ...
  value: string;
};

function Hero() {
    const { isOpen, openModal, closeModal } = useModal();
  
 const options: Option[] = ["Standard", "Neueste", "älteste", "Zufällig"].map((item) => ({
    label: item,
    value: item,
  }));    

  return (
    <div className='flex flex-col md:flex-row gap-2 justify-between mb-4 '>
          <h1 className="text-brand-500  w-full text-[28px] font-bold">
     Alle Ergebnisse
      </h1>
        

       <div className='flex items-center gap-4'>
        
             <div className="bg-[#EAECF5] w-full">
             <Select
   options={options}
   defaultValue="Sortieren"
   className="w-full"
   onChange={(selected) => {
     console.log("Selected option:", selected);
   }}
 />
         </div>
         <div className='md:hidden'>
        <button onClick={()=>openModal()} className='w-full '>
          <FilterIcon className='w-6 h-6'/>
        </button>
         </div>
       </div>
          <Modal isOpen={isOpen} onClose={closeModal} className="w-full  my-10">
        <div className="relative w-full p-4  rounded-3xl dark:bg-gray-900 ">
         
         <JobFilter/>
        </div>
      </Modal>
        </div>
  )
}

export default Hero