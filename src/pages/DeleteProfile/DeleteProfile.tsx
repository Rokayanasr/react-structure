import React, { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModal";
import PageMeta from "@/components/common/PageMeta";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

const DeleteProfile: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <>
      <PageMeta title="Profil löschen" description="Löschen Sie Ihr Profil" />
      <PageBreadcrumb pageTitle="Profil löschen" />
      <div className="mx-auto w-full bg-white dark:bg-white/[0.03] shadow-lg rounded-xl p-4 md:p-6 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-brand-600 dark:text-white">Profil löschen</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block font-medium text-sm md:text-base dark:text-white" htmlFor="email">
              Ihre E-Mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2.5 md:p-3 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-600 text-sm md:text-base"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block font-semibold text-sm md:text-base dark:text-white" htmlFor="reason">
              Können Sie uns bitte den Grund mitteilen, aus dem Sie Ihr Profil löschen möchten?
            </label>
            <textarea
              id="reason"
              className="w-full p-2.5 md:p-3 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white min-h-[100px] md:min-h-[120px] focus:outline-none focus:ring-2 focus:ring-brand-600 text-sm md:text-base resize-y"
              placeholder="Ihr Grund..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-2.5 bg-brand-600 text-white font-semibold rounded-md hover:bg-brand-700 transition text-sm md:text-base"
          >
            Absenden
          </button>
        </form>

        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className="max-w-xl p-4 md:p-6 m-4 rounded-xl"
        >
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="text-center space-y-2">
              <h1 className="text-lg md:text-2xl text-brand-500 font-semibold dark:text-white">
                Möchten Sie Ihr Konto wirklich löschen?
              </h1>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                Diese Aktion kann nicht rückgängig gemacht werden.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-2">
              <button 
                onClick={() => {
                  // Handle delete confirmation
                  console.log("Profile deletion confirmed");
                  closeModal();
                }}
                className="w-full sm:w-1/2 bg-[#004b80] text-white font-bold py-2.5 md:py-3 px-4 md:px-6 rounded-lg hover:bg-[#003b66] transition text-sm md:text-base"
              >
                Ja, löschen
              </button>

              <button 
                onClick={closeModal}
                className="w-full sm:w-1/2 bg-red-700 text-white font-bold py-2.5 md:py-3 px-4 md:px-6 rounded-lg hover:bg-red-800 transition text-sm md:text-base"
              >
                Abbrechen
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default DeleteProfile; 