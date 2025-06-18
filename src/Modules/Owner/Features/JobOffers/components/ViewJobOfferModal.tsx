import { Modal } from '@/components/ui/modal';
import { JobOffer } from '../types/jobOffer.type';
import { CalenderIcon, Cash, MapPin } from '@/assets/icons';

interface ViewJobOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobOffer: JobOffer | null;
}

const ViewJobOfferModal = ({ isOpen, onClose, jobOffer }: ViewJobOfferModalProps) => {
  if (!jobOffer) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl">
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{jobOffer.title}</h1>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="bg-brand-100 text-brand-800 px-3 py-1 rounded-md text-sm font-medium dark:bg-brand-900 dark:text-brand-200">
                {jobOffer.type}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <CalenderIcon className="h-4 w-4 mr-1" />
                {/* <span>Veröffentlicht am {jobOffer.date}</span> */}
              </div>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800 dark:bg-success-200/10 dark:text-success-500">
              {jobOffer.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">Standort: {jobOffer.location || 'Nicht angegeben'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Cash className="text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">Stundenlohn: €{jobOffer.hourlyRate || '--'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalenderIcon className="text-gray-400" />
              {/* <span className="text-gray-600 dark:text-gray-300">Arbeitstage: {jobOffer.workDays || '--'} Tage</span> */}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Beschreibung</h3>
            <p className="text-gray-600 dark:text-gray-300">{jobOffer.description || 'Keine Beschreibung verfügbar'}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewJobOfferModal; 